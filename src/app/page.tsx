"use client";
import { ModeToggle } from "@/components/ModeToggle";

import { Button } from "@/components/ui/button";
import { navState, useScrollHeight, scrollToTop } from "mc-media-query";
import { ArrowUp } from "lucide-react";

export default function Home() {
	const { state, handleToggleNav } = navState({ toggle: false });

	const isHeight = useScrollHeight("100px", 250);
	console.log(isHeight);

	return (
		<div className="p-10">
			<div className="absolute top-3 right-5 z-40">
				<ModeToggle />
			</div>
			<Button onClick={handleToggleNav}>click me</Button>
			<p className="mt-2 p-6">{state.toggle.toString()}</p>
			{isHeight.matches && (
				<Button className="fixed bottom-5 z-40 right-3" variant="outline" size="sm">
					<ArrowUp className="animate-bounce" onClick={scrollToTop} />
				</Button>
			)}
		</div>
	);
}
