import { Logo } from "@/assets/svg";
import Container from "./container";
import Button from "./button";
import NavLink from "./navLink";

const links = [
  { href: `/about`, label: `About Us` },
  { href: `/features`, label: `Features` },
  { href: `/faqs`, label: `FAQ's` },
  { href: `/contact`, label: `Contact Us` },
];

const NavBar = () => {
  return (
    <nav className="w-screen backdrop-blur-[6px] flex justify-center shadow-[2px_2px_6px_1px_rgba(28,27,27,0.06)] pt-[1.25rem] pb-[0.94rem] bg-[rgba(255, 251, 242, 0.95)] sticky top-0 z-20">
      <Container className="flex justify-between items-center">
        <NavLink href="/">
          <Logo />
        </NavLink>
        <div className="flex justify-between items-center gap-[1.19rem]">
          {links.length > 0 &&
            links.map(({ href, label }, idx) => {
              return (
                <NavLink key={idx} className="p-[0.62rem]" href={href}>
                  {label}
                </NavLink>
              );
            })}
        </div>
        <div className="flex items-center gap-[0.6rem]">
          <Button variant="outline">Sign In</Button>
          <Button>Book a Demo</Button>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
