import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { MenuIcon } from "lucide-react"
import { Button } from "./button";
import { InputWithButton } from "./inputWithButton";

export default function Navbar() {
	return (
		<div className="flex flex-col mt-7 md:mt-5 lg:mt-5 md:w-1 lg:w-1 mx-auto">
			<NavigationMenu>
				<div className="flex">
					<div className="grow-0 md:grow-0 lg:grow-0">
						<NavigationMenuList>
							<NavigationMenuItem className="p-3 md:hidden lg:hidden font-extrabold text-base font-mono">
								<Button><MenuIcon className="h-4 w-4" /></Button>
							</NavigationMenuItem>
							<NavigationMenuItem className="font-extrabold text-base font-mono">needledropd.</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="hidden md:block lg:block">Profile</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="hidden md:block lg:block">Artists</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="hidden md:block lg:block">Albums</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</div>
					<div className="grow md:grow md:w-32 lg:grow lg:w-128">
					</div>
					<div className="hidden md:block lg:block md:grow-0 md:w-64 lg:grow-0 lg:w-64 ">
						<NavigationMenuList>
							<InputWithButton />
						</NavigationMenuList>
					</div>
				</div>
			</NavigationMenu>
		</div>
	);
}

