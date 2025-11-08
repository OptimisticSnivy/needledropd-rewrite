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
import { InputWithButton } from "./inputWithButton";

export default function Navbar() {
	return (
		<div className="flex flex-col mt-3 w-2xl mx-auto">
			<NavigationMenu>
				<div className="flex">
					<div className="grow-0 ...">
						<NavigationMenuList>
							<NavigationMenuItem className="p-1.5 md:p-1.5 font-extrabold text-base font-mono">needledropd.</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="">Profile</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="">Artists</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="">Albums</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</div>
					<div className="grow w-128 ...">
					</div>
					<div className="grow-0 w-64 ...">
						<NavigationMenuList>
							<InputWithButton />
						</NavigationMenuList>
					</div>
				</div>
			</NavigationMenu>
		</div>
	);
}
