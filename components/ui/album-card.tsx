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

export default async function AlbumCard() {
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
	let imgsrc: string;
	let aname, artist, album;
	let ARTIST, ANAME;

	const myLoader = ({ src }) => {
		return `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${API_KEY}&artist=radiohead&album=kid+a&format=json`;
	}

	const response = await fetch(
		// `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${API_KEY}&artist=${ARTIST}&album=${ANAME}&format=json`,
		`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${API_KEY}&artist=radiohead&album=kid+a&format=json`,
	);
	const data = await response.json();
	imgsrc = data.album.image[3]["#text"];

	// // async function getAlbumInfo(ARTIST: string, ANAME: string) {
	// async function getAlbumInfo() {
	// 	const response = await fetch(
	// 		// `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${API_KEY}&artist=${ARTIST}&album=${ANAME}&format=json`,
	// 		`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${API_KEY}&artist=radiohead&album=kid+a&format=json`,
	// 	);
	// 	const data = await response.json();
	// 	imgsrc = data.album.image[3]["#text"];
	// 	console.log(typeof (imgsrc))
	// 	aname = ANAME;
	// 	artist = ARTIST;
	// }

	return (
		<Card className="mx-auto w-full max-w-sm">
			<CardHeader>
				<CardTitle></CardTitle>
				<CardDescription>
				</CardDescription>
				<CardAction>
				</CardAction>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-6">
					<Image src={imgsrc} alt="Album Cover" width={500} height={500}></Image>
				</div>
			</CardContent>
			<CardFooter className="flex-col gap-2">
			</CardFooter>
		</Card>
	)
}

