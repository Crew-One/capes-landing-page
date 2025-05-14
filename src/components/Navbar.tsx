import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#capesFeatures",
    label: "Features",
  },
  {
    href: "#dashboard",
    label: "Dashboard",
  },
  {
    href: "#services",
    label: "Offerings",
  },
  {
    href: "#howItWorks",
    label: "How it Works",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background py-1">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-16  px-8 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-primary text-xl flex"
            >
              CAPES.APP
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side="top" className="m-4 p-3 rounded-xl">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl text-primary text-left px-3">
                    CAPES.APP
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`${buttonVariants({
                        variant: "ghost",
                        className: "w-full",
                      })} !justify-start`}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://creator.capes.app/login"
                    className={`h-11 font-semibold border ${buttonVariants({
                      variant: "outline",
                    })}`}
                  >
                    Login
                  </a>
                  <a
                    rel="noreferrer noopener"
                    href="https://creator.capes.app/signup"
                    className={`h-11 font-semibold border ${buttonVariants({
                      variant: "default",
                    })}`}
                  >
                    Get Started
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-lg ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-3">
            <a
              rel="noreferrer noopener"
              href="https://creator.capes.app/login"
              className={`h-11 !rounded-lg font-semibold border ${buttonVariants(
                {
                  variant: "outline",
                }
              )}`}
            >
              Login
            </a>
            <a
              rel="noreferrer noopener"
              href="https://creator.capes.app/signup"
              className={`h-11 !rounded-lg font-semibold border ${buttonVariants(
                {
                  variant: "default",
                }
              )}`}
            >
              Get Started
            </a>
            {/* <ModeToggle /> */}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
