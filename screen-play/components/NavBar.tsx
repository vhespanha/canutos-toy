import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  ShoppingCartIcon,
  ShopIcon,
  DashMenuIcon,
} from "mage-icons-react/stroke";

const links = [
  { text: "Início", href: "/", icon: HomeIcon },
  { text: "Catálogo", href: "/catalogo", icon: ShopIcon },
  { text: "Carrinho", href: "/carrinho", icon: ShoppingCartIcon },
];

const Navbar = () => {
  return (
    <nav className="z-10 bg-transparent p-4">
      <div className="bg-transparent">
        <div className="container mx-auto flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" passHref>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="cursor-pointer transform hover:scale-110 transition-transform duration-300"
            />
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="text-fg hover:text-primary-foreground hover:scale-110 transition-transform cursor-pointer"
                  variant="ghost"
                >
                  <DashMenuIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {links.map((link) => (
                  <DropdownMenuItem key={link.href}>
                    <Link href={link.href} passHref>
                      <span className="text-fg hover:text-primary-foreground cursor-pointer">
                        {link.text}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Regular Menu for Desktop */}
          <ul className="hidden md:flex space-x-4 items-center">
            {links.map((link) => (
              <li
                className="hover:scale-110 transition-transform"
                key={link.href}
              >
                <Link href={link.href} passHref>
                  <span className="flex items-center text-fg hover:text-primary-foreground cursor-pointer">
                    {link.icon && <link.icon className="mr-2" />}
                    {link.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
