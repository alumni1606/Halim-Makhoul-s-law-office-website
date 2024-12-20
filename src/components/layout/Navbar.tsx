import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageSwitcher from "@/components/ui/language-switcher";

interface NavbarProps {
  logo?: string;
  firmName?: string;
  phoneNumber?: string;
}

const Navbar = ({
  logo = "https://api.dicebear.com/7.x/initials/svg?seed=HM&backgroundColor=001f3f",
  firmName = "Halim Makhoul Law Office",
  phoneNumber = "(555) 123-4567",
}: NavbarProps) => {
  const location = useLocation();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuItems = [
    { path: "/", label: "Home" },
    { path: "/practice-areas", label: "Practice Areas" },
    { path: "/practice-areas/family-law", label: "- Family Law" },
    { path: "/practice-areas", label: "- Criminal Defense" },
    { path: "/practice-areas", label: "- Corporate Law" },
    { path: "/team", label: t("nav.team") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <div className="fixed top-0 w-full h-20 bg-white border-b border-gray-200 z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo and Firm Name */}
        <Link to="/" className="flex items-center space-x-4">
          <img src={logo} alt="Law Firm Logo" className="h-12 w-12 rounded" />
          <span className="text-xl font-semibold text-blue-900 hidden md:block hover:text-blue-800">
            {firmName}
          </span>
        </Link>

        {/* Language Switcher */}
        <LanguageSwitcher />

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mr-2"
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">{firmName}</SheetTitle>
              </SheetHeader>
              <nav className="mt-8">
                <ul className="space-y-4">
                  {mobileMenuItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`block py-2 ${item.label.startsWith("-") ? "pl-4 text-sm" : "text-base font-medium"} ${location.pathname === item.path ? "text-blue-900" : "text-gray-600 hover:text-blue-900"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label.startsWith("-")
                          ? item.label.slice(2)
                          : item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="absolute bottom-8 left-6 right-6">
                <Button
                  variant="default"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  <span>{phoneNumber}</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation Menu */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink
                  className={`px-4 py-2 hover:text-blue-900 transition-colors ${location.pathname === "/" ? "text-blue-900 font-semibold" : ""}`}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={
                  location.pathname.includes("/practice-areas")
                    ? "text-blue-900 font-semibold"
                    : ""
                }
              >
                Practice Areas
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4 grid gap-3">
                  <Link
                    to="/practice-areas/family-law"
                    className="block hover:bg-blue-50 p-2 rounded"
                  >
                    Family Law
                  </Link>
                  <Link
                    to="/practice-areas"
                    className="block hover:bg-blue-50 p-2 rounded"
                  >
                    Criminal Defense
                  </Link>
                  <Link
                    to="/practice-areas"
                    className="block hover:bg-blue-50 p-2 rounded"
                  >
                    Corporate Law
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/team">
                <NavigationMenuLink
                  className={`px-4 py-2 hover:text-blue-900 transition-colors ${location.pathname === "/team" ? "text-blue-900 font-semibold" : ""}`}
                >
                  Our Team
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink
                  className={`px-4 py-2 hover:text-blue-900 transition-colors ${location.pathname === "/contact" ? "text-blue-900 font-semibold" : ""}`}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Button (Desktop) */}
        <Button
          variant="default"
          className="hidden md:flex bg-blue-900 hover:bg-blue-800 text-white"
        >
          <Phone className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">{phoneNumber}</span>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
