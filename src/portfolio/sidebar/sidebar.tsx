import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import chai from "@/assets/chai.png";
import chaiAvatar from "@/assets/chai_avatar_no_bg.png";
import { IntroductionComponent } from "./introduction";
import { InfoComponent } from "./info";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import BlurText from "@/components/BlurText/BlurText";

const TabKey = {
  introduction: "introduction",
  experience: "experience",
  info: "info",
};

const initialAnimate = {
  opacity: 0,
  x: -50,
};
const exitAnimate = { opacity: 0, x: 50 };
const durationAnimate = { duration: 0.3 };
const animate = { opacity: 1, x: 0 };
export const SidebarComponent = () => {
  const [flipped, setFlipped] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [tabValue, setTabValue] = useState(TabKey.introduction);

  const startAutoFlip = () => {
    intervalRef.current = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 8000);
  };

  useEffect(() => {
    startAutoFlip();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleClick = () => {
    setFlipped((prev) => !prev);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoFlip();
  };

  return (
    <div>
      <Card className="px-4 py-4">
        <div className="flex justify-center perspective-[1500px]">
          <div className="w-[280px] h-[280px]" onClick={handleClick}>
            <motion.div
              className="relative w-full h-full"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.8 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.img
                src={chaiAvatar}
                alt="Front"
                className="absolute w-full h-full object-top object-cover brightness-90 rounded-md"
                style={{ backfaceVisibility: "hidden" }}
              />
              <motion.img
                src={chai}
                alt="Back"
                className="absolute w-full h-full object-top object-cover brightness-90 rounded-md"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              />
            </motion.div>
          </div>
        </div>

        <Card className="rounded-none">
          <CardHeader>
            <CardTitle>
              <BlurText
                text="Ear Songchay"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl"
              ></BlurText>
            </CardTitle>
            <CardDescription>Frontend developer</CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs value={tabValue} onValueChange={setTabValue}>
              <TabsList className="grid w-full grid-cols-2 text-xs">
                <TabsTrigger value={TabKey.introduction}>
                  Introduction
                </TabsTrigger>

                <TabsTrigger value={TabKey.info}>Info</TabsTrigger>
              </TabsList>

              <SpotlightCard
                className="p-4 my-4 h-[280px] max-h-[280px]"
                spotlightColor="rgba(255, 255, 255, 0.2)"
              >
                <AnimatePresence mode="wait">
                  {tabValue === TabKey.introduction && (
                    <motion.div
                      key={TabKey.introduction}
                      initial={initialAnimate}
                      animate={animate}
                      exit={exitAnimate}
                      transition={durationAnimate}
                    >
                      <IntroductionComponent />
                    </motion.div>
                  )}

                  {tabValue === TabKey.info && (
                    <motion.div
                      key={TabKey.info}
                      initial={initialAnimate}
                      animate={{ opacity: 1, x: 0 }}
                      exit={exitAnimate}
                      transition={durationAnimate}
                    >
                      <InfoComponent />
                    </motion.div>
                  )}
                </AnimatePresence>
              </SpotlightCard>
            </Tabs>
          </CardContent>
        </Card>
      </Card>
    </div>
  );
};
