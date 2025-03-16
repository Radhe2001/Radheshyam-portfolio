'use client';
import { useSelector } from 'react-redux';
import { darkSelector } from '../provider/redux/dark';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import About from './about/page';
import Resume from './resume/page';
import Works from './works/page';
import Contact from './contact/page';
export default function Home() {
	const dark = useSelector((state: any) => state.changeDark.value);
	const [count, setCount] = useState(0);
	const [increment, setIncrement] = useState(true);
	useEffect(() => {
		let str = 'Full Stack Web Developer  ';
		setTimeout(() => {
			const element = document.querySelector('.text') as HTMLElement;
			if (element) {
				element.innerHTML = str.substring(0, count);
			}
			if (increment) {
				if (count < str.length) {
					setCount(count + 1);
				} else {
					setIncrement(false);
				}
			} else {
				if (count > 1) {
					setCount(count - 1);
				} else {
					setIncrement(true);
				}
			}
		}, 200);
	}, [count, setCount, increment, setIncrement]);

	return (
		<>
			<main className="w-full h-[100vh] flex place-content-center place-items-center">
				<section>
					<div
						className="img-div ml-auto mr-12 border-2 xl:w-[20vw] xl:h-[20vw] lg:w-[25vw] lg:h-[25vw] md:w-[35vw] md:h-[35vw]  w-[45vw] h-[45vw] border-cyan-900 rounded-full  bg-cover "
						style={{
							backgroundImage: 'url(/assets/picture1.png)',
							backgroundColor: '#B4B4B8',
						}}
					></div>
					<div className="grid">
						<h1
							className="text-center ml-[-13%] text-3xl font-bold mt-6"
							style={{ color: dark ? '#83C0C1' : '#561C24' }}
						>
							Radheshyam Jha
						</h1>
						<div className="">
							<h3
								className="text text-center ml-[-13%] font-semibold text-xl mt-2"
								style={{ color: dark ? '#F28585' : '#6D2932' }}
							></h3>
						</div>
						<div className="flex place-content-center gap-3 mt-4 ml-[-13%]">
							<Link href="https://www.facebook.com/radheshyam.jha.773124">
								<div
									className="h-8 w-8 bg-cover p-3 bg-[#503C3C] rounded-lg hover:bg-red-500"
									style={{
										backgroundImage:
											'url(/assets/facebook.png)',
									}}
								></div>
							</Link>
							<Link href="https://www.instagram.com/radheshyam_2001/">
								<div
									className="h-8 w-8 bg-cover p-3 bg-[#503C3C] rounded-lg hover:bg-red-500"
									style={{
										backgroundImage:
											'url(/assets/instagram.png)',
									}}
								></div>
							</Link>
							<Link href="https://twitter.com/Radheshyam_22">
								<div
									className="h-8 w-8 bg-cover p-3 bg-[#503C3C] rounded-lg hover:bg-red-500"
									style={{
										backgroundImage: 'url(/assets/twitter.png)',
									}}
								></div>
							</Link>
							<Link href="https://github.com/Radhe2001">
								<div
									className="h-8 w-8 bg-cover p-3 bg-[#503C3C] rounded-lg hover:bg-red-500"
									style={{
										backgroundImage: 'url(/assets/github.png)',
									}}
								></div>
							</Link>
							<Link href="https://www.linkedin.com/in/radheshyam2001/">
								<div
									className="h-8 w-8 bg-cover p-3 bg-[#503C3C] rounded-lg hover:bg-red-500"
									style={{
										backgroundImage:
											'url(/assets/linkedin.png)',
									}}
								></div>
							</Link>
						</div>
						<div className="flex place-content-center">
							<Link
								className={`py-3 px-6 flex place-items-center gap-1 rounded-3xl ml-[-15%] mt-8 bg-[#323031] hover:bg-gradient-to-br  from-slate-600 via-red-500 to-cyan-600 shadow-xl shadow-black`}
								href="https://drive.google.com/file/d/1CnnDqMYTwJNgm2sWTFzJssF1TfKI7FXe/view?usp=sharing"
								download
							>
								<div
									style={{
										backgroundImage:
											'url(/assets/download.png)',
									}}
									className="h-8 w-8 bg-cover"
								/>
								<h1 className="font-bold text-xl">Download CV</h1>
							</Link>
						</div>
					</div>
				</section>

			</main>
			<About/>
			<Resume/>
			<Works/>
			<Contact/>
		</>
	);
}
