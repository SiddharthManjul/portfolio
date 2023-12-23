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


const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Blogs", "Projects", "Contact"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-4xl font-rubik uppercase text-inherit">
            siddharth manjul
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarBrand>
          <p className="font-bold text-4xl pr-64 font-rubik uppercase text-inherit">
            Siddharth manjul
          </p>
        </NavbarBrand>
        <NavbarItem>
          <Link
            className="font-bold text-xl uppercase font-josefin"
            color="foreground"
            href="Blogs"
          >
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-bold text-xl uppercase font-josefin"
            href="#"
            aria-current="page"
            color="foreground"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-bold text-xl uppercase font-josefin"
            color="foreground"
            href="#"
          >
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
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
