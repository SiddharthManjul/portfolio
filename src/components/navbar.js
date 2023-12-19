import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">Siddharth Manjul</p>
      </NavbarBrand>
      <NavbarContent className="font-josefin sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-green-400">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
