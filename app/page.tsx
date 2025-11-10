import Image from "next/image";
import AlbumCard from "@/components/ui/album-card";

export default function Home() {
	return (
		<div className="flex mt-15 w-8xl mx:auto justify-center">
			<div className="flex flex-row flex-wrap mt:5 mx:auto justify-center">
				<AlbumCard ARTIST="Radiohead" ANAME="Amnesiac" />
				<AlbumCard ARTIST="Radiohead" ANAME="Hail to the Thief" />
				<AlbumCard ARTIST="Radiohead" ANAME="Kid A" />
				<AlbumCard ARTIST="Radiohead" ANAME="The King of Limbs" />
				<AlbumCard ARTIST="Radiohead" ANAME="The Bends" />
				<AlbumCard ARTIST="Radiohead" ANAME="A Moon Shaped Pool" />
				<AlbumCard ARTIST="Radiohead" ANAME="In Rainbows" />
				<AlbumCard ARTIST="Radiohead" ANAME="Ok Computer" />
			</div>
		</div>
	);
}
