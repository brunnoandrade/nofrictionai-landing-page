"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, PhoneCall, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./logo";

function Header() {
  const navigationItems = [
    {
      title: "Metodologia",
      href: "/",
      description: "",
    },
    {
      title: "Clientes",
      href: "/",
      description: "",
    },
    {
      title: "Soluções",
      href: "/",
      description: "",
    },
    {
      title: "Funcionalidades",
      href: "/",
      description: "",
    },
    {
      title: "Preço",
      href: "/",
      description: "",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full z-10 fixed top-0 left-0 ${
        isScrolled ? "bg-background" : ""
      }`}
    >
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="flex justify-start items-center">
          <Logo />
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <NavigationMenu className="flex justify-center items-center">
            <NavigationMenuList className="flex justify-center gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink>
                        <Button variant="ghost">{item.title}</Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10">
                              Book a call today
                            </Button>
                          </div>
                          {/* Uncomment if you want to include the sub-items */}
                          {/* <div className="flex flex-col text-sm h-full justify-end">
                      {item.items?.map((subItem) => (
                        <NavigationMenuLink
                          href={subItem.href}
                          key={subItem.title}
                          className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                        >
                          <span>{subItem.title}</span>
                          <MoveRight className="w-4 h-4 text-muted-foreground" />
                        </NavigationMenuLink>
                      ))}
                    </div> */}
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex justify-end w-full gap-4">
          <div className="hidden md:inline"></div>
          <Button>
            Agenda uma demonstração <PhoneCall className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {/* {item.href ? (
                      <Link
                        href={item.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex justify-between items-center"
                        >
                          <span className="text-muted-foreground">
                            {subItem.title}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                      ))} */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export { Header };
