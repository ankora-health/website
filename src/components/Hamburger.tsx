import { m } from "framer-motion";
import React from "react";

interface Props {
  toggle: () => void
  open: boolean
}


export const Hamburger: React.FC<Props> = ({ toggle, open }) => (
  <button 
    className="lg:hidden flex z-30 btn bg-transparent p-0"
    onClick={toggle}
  >
    <svg width="23" height="18" viewBox="0 0 23 18">
      <m.path
        fill="transparent"
        strokeWidth="2.5"
        stroke="black"
        strokeLinecap="round"
        initial="closed"
        animate={!open ? "closed" : "open"}
        d="M 2 2.5 L 20 2.5"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <m.path
        fill="transparent"
        strokeWidth="2.5"
        stroke="black"
        initial="closed"
        animate={!open ? "closed" : "open"}
        strokeLinecap="round"
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.05 }}
      />
      <m.path
        fill="transparent"
        strokeWidth="2.5"
        stroke="black"
        initial="closed"
        animate={!open ? "closed" : "open"}
        strokeLinecap="round"
        d="M 2 16.346 L 20 16.346"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);