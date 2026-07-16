"use client";
import { motion, useReducedMotion } from "motion/react";
export function Reveal({children}:{children:React.ReactNode}){const reduced=useReducedMotion();return <motion.div initial={reduced?false:{opacity:0,y:48,filter:"blur(5px)"}} whileInView={reduced?undefined:{opacity:1,y:0,filter:"blur(0px)"}} viewport={{once:true,amount:.08}} transition={{duration:.85,ease:[.22,1,.36,1]}}>{children}</motion.div>}
