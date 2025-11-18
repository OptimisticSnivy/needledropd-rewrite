import Image from "next/image";

interface Route {
	params: {
		artist: string,
		album: string,
	}
}

export default async function Page({ params }: { params: Promise<{ artist: string, album: string }> }) {
	const { artist, album } = await params;
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
	let imgsrc: string;

	const response = await fetch(
		`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${API_KEY}&artist=${artist}&album=${album}&format=json`,
	);
	const data = await response.json();
	imgsrc = data.album.image[4]["#text"];

	return (
		<div className="flex mt-15 md:w-4xl md:justify-center md:mx-auto lg:justify-center lg:w-6xl lg:mx-auto">
			<div className="flex flex-col flex-wrap mt:5 justify-center">
				<div> hi from {artist} page ?</div>
				<div> hi from {album} page ?</div>
				<Image src={imgsrc} alt="Album Cover" width={180} height={180} className="rounded-sm"></Image>
			</div>
		</div>
	);
}
