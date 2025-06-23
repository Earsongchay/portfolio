import { Card } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import ThemeToggle from "../component/themeToggle";
import { Facebook, Instagram, Send } from "lucide-react";
import ClickSpark from "@/components/ClickSpark/ClickSpark";

export const AppbarComponent = () => {
  return (
    <ClickSpark>
      <div className="flex justify-start">
        <Card className="w-full px-6 py-4 flex flex-row justify-between items-center">
          <div className="flex flex-row justify-start items-center">
            <div>Welcome to Songchay's Portfolio !!</div>
            <div>
              <div className="w-[1px] h-4 bg-foreground mx-8"></div>
            </div>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="cursor-pointer">
                  <NavigationMenuLink>Introduction</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="cursor-pointer">
                  <NavigationMenuLink>Project</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="cursor-pointer">
                  <NavigationMenuLink>Experience</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
