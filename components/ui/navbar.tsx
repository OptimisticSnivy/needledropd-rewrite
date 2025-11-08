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
		<div className="p-0 md:p-1.5 flex flex-col mt-3 w-1 md:w-1 lg:w-1 mx-auto">
			<NavigationMenu>
				<div className="flex">
					<div className="grow-0 md:grow-0 lg:grow-0">
						<NavigationMenuList>
							<NavigationMenuItem className=" font-extrabold text-base font-mono">needledropd.</NavigationMenuItem>
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
					<div className="md:grow md:w-32 lg:grow lg:w-128">
					</div>
					<div className="md:grow-0 md:w-64 lg:grow-0 lg:w-64">
						<NavigationMenuList>
							<InputWithButton />
						</NavigationMenuList>
					</div>
				</div>
			</NavigationMenu>
		</div>
	);
}
