'use client'
import { AnimatePresence, motion, useCycle } from "framer-motion";
import {Logo } from "@/assets/svg";
import Container from "./container";
import Button from "./button";
import NavLink from "./navLink";
import { Hamburger } from "./Hamburger";

const links = [
  { href: `/about`, label: `About Us` },
  { href: `/#features`, label: `Features` },
  { href: `/faqs`, label: `FAQs` },
  { href: `/contact`, label: `Contact Us` },
  { href: `https://app.ankora.health`, label: `Sign In` },
  { href: `#`, label: `Book a Demo` },
];

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: 1
    }
  }
};


const NavBar = () => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <nav className="w-screen backdrop-blur-[6px] flex justify-center shadow-[2px_2px_6px_1px_rgba(28,27,27,0.06)] pt-[1.25rem] pb-[0.94rem] bg-[rgba(255,_251,_242,_0.95)] sticky top-0 z-20">
      <Container className="flex justify-between items-center desktop:mx-auto gap-16 w-full">
        <NavLink className="[&>svg]:w-[5.375rem] desktop:[&>svg]:w-[7.25rem] [&>svg]:h-[2.735rem]" href="/"> 
          <Logo />
        </NavLink>

        <div className="hidden lg:flex justify-between items-center gap-[1.19rem]">
          {links.slice(0, 4).map(({ href, label }, idx) => {
            return (
              <NavLink 
                key={idx} 
                className="p-[0.62rem]" 
                href={href}
              >
                {label}
              </NavLink>
            )
          })}
        </div>

        <div className="hidden lg:flex items-center gap-[0.6rem]">
          {links.slice(4, 6).map(({ href, label }, idx) => {
            return (
              <Button 
                key={idx}
                variant={label === links[4].label ? 'outline' : 'solid'}
              >
                <a target="_blank" href={href}>{label}</a>
              </Button>
            )
          })}
        </div>

        {/* mobile menu button */}
        <Hamburger 
          toggle={cycleOpen}
          open={open}
        />
      </Container>
      {/* mobile menu button */}

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            className="lg:hidden flex fixed justify-center bg-[#FFFBF2] w-screen h-screen"
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{
              height: 0,
              transition: { delay: 0.7, duration: 0.3 }
            }}
          >
            <motion.ul  
              className='flex pt-36 flex-col w-full items-center'
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.slice(0, 4).map(({ href, label }, idx) => {
                return (
                  <motion.li
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    className="p-[0.94rem]"
                  >
                    <NavLink 
                      key={idx} 
                      className="p-[0.62rem]" 
                      onClick={() => cycleOpen() as unknown as MouseEvent}
                      href={href}
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                )
              })}

              {links.slice(4, 6).map(({ href, label }, idx) => {
                return (
                  <motion.li
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    className="py-5 px-[0.94rem]"
                  >
                    <Button 
                      key={idx}
                      variant={label === links[4].label ? 'outline' : 'solid'}
                      onClick={() => cycleOpen() as unknown as MouseEvent}
                    >
                      <a target="_blank" href={href}>{label}</a>
                    </Button>
                  </motion.li>
                )
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
      {/* mobile menu */}
    </nav>
  );
};

export default NavBar;