"use client"

import { Button } from "./button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react"
import Link from "next/link";

export default function MobileNavMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="sm"><MenuIcon className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="sm:hidden md:hidden lg:hidden w-56" align="start">
				<DropdownMenuGroup>
					<DropdownMenuItem>
						Profile
					</DropdownMenuItem>
					<DropdownMenuItem>
						Albums
					</DropdownMenuItem>
					<DropdownMenuItem>
						Artists
					</DropdownMenuItem>
					{/* Link to the consequent search page */}
					<DropdownMenuItem>
						Search
						<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					Settings
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					Log out
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
