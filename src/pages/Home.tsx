import logo from "../assets/logo.png"
export default function Home() {
	return (
		<div class="flex h-[90vh] flex-col items-center justify-center gap-8">
			<img src={logo} alt="TeamVoided logo" width="800" />
			<h1 class="text-xl font-light italic">"The best god dam space crab pirates you have ever seen!"</h1>
		</div>
	);
}