import React from "react";
import ThemeSwitcher from "./themeSwitcher";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link,
} from "@nextui-org/react";

import "./custom.css";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About", "Projects", "Contact"]; // include blogs between about and project later!

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="rounded-b-lg"
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link
            href="/"
            className="font-bold text-xl pr-10 font-rubik uppercase text-inherit text-dark-100"
          >
            siddharth manjul
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarBrand>
          <Link
            href="/"
            className="font-bold text-3xl pr-32 font-rubik uppercase text-inherit text-dark-100"
          >
            Siddharth manjul
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link
            className="font-bold text-xl uppercase font-josefinSans text-dark-100"
            color="foreground"
            href="About"
          >
            About
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link
            className="font-bold text-xl uppercase font-josefinSans text-dark-100"
            color="foreground"
            href="Blogs"
          >
            Blogs
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link
            className="font-bold text-xl uppercase font-josefinSans text-dark-100"
            href="Projects"
            aria-current="page"
            color="foreground"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-bold text-xl uppercase font-josefinSans text-dark-100"
            color="foreground"
            href="Contact"
          >
            Contact
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              // color={
              //   index === 0 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              // }
              className="w-full"
              href={
                index === 0
                  ? "About"
                  : index === 1
                  ? "Blogs"
                  : index === 2
                  ? "Projects"
                  : "Contact"
              }
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
