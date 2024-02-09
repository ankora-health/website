import React from "react"
import { Variants, m } from "framer-motion"


interface ColorFlashProps {
  variants: Variants;
  children: React.ReactNode;
}

export const ColorFlash: React.FC<ColorFlashProps> = ({ variants, children }) => {
  return (
    <m.span 
      viewport={{ once: true }} 
      className="bg-clip-padding box-decoration-clone" 
      variants={variants} 
      initial="hidden" 
      whileInView="visible"
    >
      {children}
    </m.span>
  )
}