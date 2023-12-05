"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useMediaQueryScreen } from "mc-media-query";
import { Card } from "@/components/ui/card";
import product5 from "@/images/ryan-hoffman-6Nub980bI3I-unsplash.jpg";

export default function Page({}: {}) {
	const matches = useMediaQueryScreen("(max-width: 768px)");
	return (
		<div className="flex justify-between max-xl:flex-col md:space-x-4 max-md:space-y-10">
			<div className="w-full flex flex-col p-1 rounded-md overflow-hidden justify-center">
				<div className="">
					<AspectRatio ratio={matches ? 16 / 17 : 16 / 14} className="rounded-md h-[]">
						<Image
							src={product5}
							alt="shore"
							fill
							className="md:object-contain object-cover rounded-md  -mt-[1rem] object-center "
						/>
					</AspectRatio>
				</div>
			</div>
			<Card className="p-7 flex flex-col h-fit mt-10 mr-2 ml-2">
				<p className=" max-w-5xl">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quaerat optio natus
					voluptatum excepturi, tempore facere amet. Aspernatur veniam qui tempore nihil
					repudiandae amet soluta. Soluta blanditiis libero aut at?
				</p>
				<Button className="mt-10 w-1/2" variant={"outline"}>
					Shop Now
					<ArrowDown className="animate-bounce ml-4" />
				</Button>
			</Card>
		</div>
	);
}
