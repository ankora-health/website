import { Logo } from "@/assets/svg";
import Container from "./container";
import Button from "./button";
import NavLink from "./navLink";
import { Menu } from "@/assets/svg/menu";

const links = [
  { href: `/about`, label: `About Us` },
  { href: `/#features`, label: `Features` },
  { href: `/faqs`, label: `FAQ's` },
  { href: `/contact`, label: `Contact Us` },
];

const NavBar = () => {
  return (
    <nav className="w-screen backdrop-blur-[6px] flex justify-center shadow-[2px_2px_6px_1px_rgba(28,27,27,0.06)] pt-[1.25rem] pb-[0.94rem] bg-[rgba(255,_251,_242,_0.95)] sticky top-0 z-20 ">
      <Container className="flex justify-between items-center mx-auto gap-16">
        <NavLink href="/"> 
          <Logo />
        </NavLink>
        <div className="hidden desktop:flex justify-between items-center gap-[1.19rem]">
          {links.length > 0 &&
            links.map(({ href, label }, idx) => {
              return (
                <NavLink 
                  key={idx} 
                  className="p-[0.62rem]" 
                  href={href}
                >
                  {label}
                </NavLink>
              );
            })}
        </div>
        <div className="hidden desktop:flex items-center gap-[0.6rem]">
          <Button variant="outline">
            <a href="https://app.ankora.health">
              Sign In
            </a>
          </Button>
          <Button>Book a Demo</Button>
        </div>
        <button className="desktop:hidden flex">
          <Menu />
        </button>
      </Container>
    </nav>
  );
};

export default NavBar;
