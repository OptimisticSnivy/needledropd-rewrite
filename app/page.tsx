import Image from "next/image";
import AlbumCard from "@/components/ui/album-card";

export default function Home() {
	return (
		<div className="flex mt-15 md:w-4xl md:justify-center md:mx-auto lg:justify-center lg:w-6xl lg:mx-auto">
			<div className="flex flex-row flex-wrap mt:5 justify-center">
				<AlbumCard ARTIST="Radiohead" ANAME="Amnesiac" />
				<AlbumCard ARTIST="Radiohead" ANAME="Hail to the Thief" />
				<AlbumCard ARTIST="Radiohead" ANAME="Kid A" />
				<AlbumCard ARTIST="Radiohead" ANAME="The King of Limbs" />
				<AlbumCard ARTIST="Radiohead" ANAME="The Bends" />
				<AlbumCard ARTIST="Radiohead" ANAME="A Moon Shaped Pool" />
				<AlbumCard ARTIST="Radiohead" ANAME="In Rainbows" />
				<AlbumCard ARTIST="Radiohead" ANAME="Ok Computer" />
				<AlbumCard ARTIST="Radiohead" ANAME="Pablo Honey" />
				<AlbumCard ARTIST="Radiohead" ANAME="I Might Be Wrong (Live)" />
				<AlbumCard ARTIST="Caroline Polachek" ANAME="Pang" />
				<AlbumCard ARTIST="Charli XCX" ANAME="Brat" />
			</div>
		</div>
	);
}
