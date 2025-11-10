import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import 'dotenv/config';
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default async function AlbumCard({ ANAME, ARTIST }: { ANAME: string, ARTIST: string }) {
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
	let imgsrc: string;
	let aname, artist, album;

	const response = await fetch(
		`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${API_KEY}&artist=${ARTIST}&album=${ANAME}&format=json`,
	);

	const data = await response.json();
	imgsrc = data.album.image[3]["#text"];
	aname = ANAME;
	artist = ARTIST;

	return (
		<Card className='flex flex-col m-3 max-w-md pt-0'>
			<CardContent className='px-0'>
				<Image src={imgsrc} alt="Album Cover" width={180} height={180} className="rounded-xl"></Image>
			</CardContent>
			<CardHeader>
				<CardTitle>{aname}</CardTitle>
				<CardDescription>{artist}</CardDescription>
			</CardHeader>
		</Card>
	)
}

