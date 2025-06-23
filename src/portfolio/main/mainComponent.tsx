import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useScroll, useSpring } from "framer-motion";
import ProjectSlider from "./projectSlider";

export type Project = {
  name: string;
  image: string[];
  description: string;
};

export const MainComponent = () => {
  const scrollRef = useRef(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("./projects.json", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
        className="max-h-[calc(100vh-16px-168px)] overflow-y-auto flex flex-col gap-4 pr-4"
      >
        <motion.div
          initial={{ scaleX: 0.97 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <Card className="h-[calc(100vh-16px-168px)] px-4">
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>
                Everything I have built throughout my journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              {projects.length === 0 ? (
                <p className="text-muted">Loading projects...</p>
              ) : (
                <ProjectSlider items={projects} />
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
