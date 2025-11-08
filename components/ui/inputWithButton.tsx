import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

export function InputWithButton() {
	return (
		<div className="flex w-full max-w-sm items-center gap-2">
			<Input type="search" placeholder="Search" />
			<Button type="submit" variant="outline">
				<SearchIcon />
			</Button>
		</div>
	)
}

