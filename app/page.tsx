import Image from "next/image";
import AlbumCard from "@/components/ui/album-card";

export default function Home() {
	return (
		<div className="flex font-sans">
			<AlbumCard ARTIST="Radiohead" ANAME="Amnesiac" />
		</div>
	);
}
