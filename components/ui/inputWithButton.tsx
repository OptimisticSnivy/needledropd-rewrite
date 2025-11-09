import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { SearchIcon } from "lucide-react"

export function KbdInputGroup() {
	return (
		<div className="flex w-full max-h-1 max-w-xs flex-col gap-6">
			<InputGroup>
				<InputGroupInput placeholder="Search..." />
				<InputGroupAddon>
					<SearchIcon />
				</InputGroupAddon>
				<InputGroupAddon align="inline-end">
					<Kbd>⌘</Kbd>
					<Kbd>K</Kbd>
				</InputGroupAddon>
			</InputGroup>
		</div>
	)
}
