import { Card } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import ThemeToggle from "../component/themeToggle";
import { Facebook, Instagram, Menu, Send } from "lucide-react";
import ClickSpark from "@/components/ClickSpark/ClickSpark";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import TextStackComponent from "../main/techStack";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useStore } from "@/lib/useStore";

export const AppbarComponent = () => {
  const downloadResume = () => {
    const uri = "EAR Songchay's CV.pdf";
    const name = "EAR Songchay's CV.pdf";

    const link = document.createElement("a");
    link.setAttribute("download", name);
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const { routeChange } = useStore();

  return (
    <ClickSpark>
      <div className="flex justify-start">
        <Card className="w-full px-6 py-4 flex flex-row justify-between items-center">
          <div className="flex flex-row justify-start items-center">
            <div className="block lg:hidden">Songchay's Portfolio !!</div>
            <div className="hidden lg:block">
              Welcome to Songchay's Portfolio !!
            </div>
            <div>
              <div className="w-[1px] h-4 bg-foreground mx-8"></div>
            </div>

            {/* DropdownMenu - only shown on small screens (<1000px) */}
            <div className="block lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Menu />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-64 p-6">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem
                        className="cursor-pointer"
                        onClick={() => {
                          routeChange("project");
                        }}
                      >
                        <NavigationMenuLink>Projects</NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem
                        className="cursor-pointer"
                        onClick={() => {
                          routeChange("tech");
                        }}
                      >
                        <NavigationMenuLink>
                          Tech Stack & Skills
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem
                        className="cursor-pointer"
                        onClick={downloadResume}
                      >
                        <NavigationMenuLink>Download Resume</NavigationMenuLink>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Full NavigationMenu - shown on large screens (≥1024px) */}
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem
                    className="cursor-pointer"
                    onClick={() => {
                      routeChange("project");
                    }}
                  >
                    <NavigationMenuLink>Projects</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem
                    className="cursor-pointer"
                    onClick={() => {
                      routeChange("tech");
                    }}
                  >
                    <NavigationMenuLink>Tech Stack & Skills</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem
                    className="cursor-pointer"
                    onClick={downloadResume}
                  >
                    <NavigationMenuLink>Download Resume</NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <a href={"tel:+85587546553"}>
              <Send size={14} />
            </a>
            <a href={"https://www.instagram.com/3scape.28"}>
              <Instagram size={14} />
            </a>
            <a href={"https://www.facebook.com/songchay.ear/"}>
              <Facebook size={14} />
            </a>
            <ThemeToggle />
          </div>
        </Card>
      </div>{" "}
    </ClickSpark>
  );
};
