import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ProjectComponent from "./project";
import { useStore } from "@/lib/useStore";
import TextStackComponent from "./techStack";

export type Project = {
  name: string;
  image: string[];
  description: string;
  tech: string[];
};

export const MainComponent = () => {
  const scrollRef = useRef(null);
  const { route } = useStore();

  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-foreground origin-left z-50"
        style={{ scaleX }}
      />

      <div
        ref={scrollRef}
        className="max-h-[calc(100vh-16px-158px)] overflow-y-auto flex flex-col gap-4"
      >
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <ProjectComponent />
        </motion.div>

        <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }}>
          <TextStackComponent />
        </motion.div>
      </div>
    </div>
  );
};
