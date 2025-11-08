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
		<div className="flex flex-col mt-5 mx-auto w-7xl">
			<NavigationMenu>
				<NavigationMenuList className="flex flex-row">
					<NavigationMenuItem className="md:p-4 p-4 font-extrabold text-base font-mono">needledropd.</NavigationMenuItem>
					<div className="flex flex-row">
						<NavigationMenuItem>
							<NavigationMenuLink className="hover:text-[#e53935]">Profile</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink className="hover:text-[#e53935]">Artists</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink className="hover:text-[#e53935]">Albums</NavigationMenuLink>
						</NavigationMenuItem>
					</div>
					{/* <div className="ml-auto md:ml-auto"> */}
					{/* 	<InputWithButton /> */}
					{/* </div> */}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
