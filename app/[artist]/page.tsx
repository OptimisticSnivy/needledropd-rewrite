import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ artist: string }> }) {
	const { artist } = await params;
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
	let imgsrc: string;
	let aname, formattedArtist;

	const response = await fetch(
		`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=${API_KEY}&artist=${artist}&format=json`
	);
	const data = await response.json();
	imgsrc = data.artist.image[4]["#text"];
	formattedArtist = data.artist.name;

	return (
		<div className="flex mt-15 md:w-4xl md:justify-center md:mx-auto lg:justify-center lg:w-6xl lg:mx-auto">
			<div className="flex flex-row flex-wrap mt:5 justify-center">
				<div> hi from {formattedArtist} page ?</div>
				<Image src={imgsrc} alt="Album Cover" width={180} height={180} className="rounded-sm"></Image>
			</div>
		</div>
	);
}
