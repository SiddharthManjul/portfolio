import React from "react";
import ThemeSwitcher from "./themeSwitcher";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
        <p color="foreground" className="font-bold uppercase font-rubik text-4xl">Siddharth Manjul</p>
      </NavbarBrand>
      <NavbarContent className="font-josefin sm:flex gap-8 uppercase" justify="center">
        <NavbarItem>
          <Link className="text-2xl font-bold" color="foreground" href="#">
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-2xl font-bold" href="#" color="foreground">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-2xl font-bold" color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
