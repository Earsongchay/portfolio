import { motion } from "motion/react";
import { useRef } from "react";
import { useFollowPointer } from "../hook/useFollowPointer";

export default function PointerFollow() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return <motion.div ref={ref} style={{ ...ball, x, y }} />;
}

const ball = {
  width: 20,
  height: 20,
  backgroundColor: "#ff0088",
  borderRadius: "50%",
};
