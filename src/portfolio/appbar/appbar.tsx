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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import TextStackComponent from "../main/techStack";

export const AppbarComponent = () => {
  const downloadRessume = () => {
    const uri = "EAR Songchay's CV.pdf";
    const name = "EAR Songchay's CV.pdf";

    const link = document.createElement("a");
    link.setAttribute("download", name);
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

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
                  <NavigationMenuLink>Projects</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="cursor-pointer">
                  <NavigationMenuLink>
                    <Dialog>
                      <DialogTrigger asChild>
                        <NavigationMenuLink>
                          Tech Stack & Skills
                        </NavigationMenuLink>
                      </DialogTrigger>
                      <DialogContent className="rounded-3xl pt-8">
                        <TextStackComponent />
                        <DialogFooter>
                          <DialogClose asChild>
                            <button>Cancel</button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem
                  className="cursor-pointer"
                  onClick={downloadRessume}
                >
                  <NavigationMenuLink>Download Resume</NavigationMenuLink>
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
