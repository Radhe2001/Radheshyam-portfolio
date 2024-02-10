'use client';
import React, { useState } from 'react';
import { darkSelector } from '../../provider/redux/dark';
import { useSelector } from 'react-redux';
import Link from 'next/link';

function Works() {
	const dark = useSelector((state: any) => state.changeDark.value);
	return (
		<>
			<div className="grid gap-2 mt-4">
				<section
					className="mx-[5vw] p-[3vw] rounded-3xl"
					style={{
						backgroundColor: dark ? '#5d555542' : '#4b2d2d99',
					}}
				>
					<div className="flex">
						<h1 className=" text-4xl  pb-2  font-bold ">
							Portfolio
						</h1>
						<span className="w-4"></span>
						<h1 className="  text-4xl pb-2  font-semibold bg-gradient-to-br from-cyan-600 via-slate-800 to-purple-400 text-transparent bg-clip-text">
							--------
						</h1>
					</div>
					<div className="lg:flex lg:gap-8 lg:place-content-center mt-14 ">
						<div
							className="lg:w-[27vw] lg:h-[18vw] md:w-[80vw] md:h-[55vw] sm:w-[80vw] sm:h-[55vw] w-[80vw] h-[55vw] mb-6 bg-cover rounded-2xl shadow-xl shadow-black"
							style={{
								backgroundImage: 'url(/assets/chatgpt.png)',
							}}
						></div>
						<div className="lg:w-[50%] flex place-items-center">
							<div className="">
								<div className="flex place-items-center">
									<h1 className="text-4xl font-semibold text-[#FF8080]">
										ChatGPT Clone
									</h1>
									<span className="w-6"></span>
									<Link
										href="https://chatgpt-clone-frontend.vercel.app/"
										className="py-1 px-3 flex place-items-center border-2 border-cyan-600 rounded-lg  bg-[#323031] hover:bg-gradient-to-br  from-slate-600 via-red-500 to-cyan-600 shadow-xl shadow-black"
									>
										<h3>Live</h3>
										<div
											className="h-4 w-4 bg-cover"
											style={{
												backgroundImage:
													'url(/assets/link.png)',
											}}
										></div>
									</Link>
								</div>
								<h4 className="mt-6 text-lg text-justify text-[#D7E4C0]">
									ChatGPT clone project developed on the MERN
									stack. Featuring a highly efficient backend,
									the application ensures seamless data
									handling with MongoDB. The eye-catching UI
									enhances user engagement, blending
									functionality with aesthetics. Experience
									the future of chatbot technology through
									this project, where a dynamic MERN
									foundation meets an appealing design for
									optimal performance.
								</h4>
								<div className="flex mt-4">
									<h3 className="text-[#BED1CF] text-lg font-semibold">
										Tech Stack
									</h3>
									<span className="ml-2 mr-2">:</span>
									<h4 className="text-[FFCF96] text-lg">
										React.js | Express.js | Node.js |
										Tailwind CSS | MongoDB | OpenAI
									</h4>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:flex lg:gap-8 lg:place-content-center mt-14 ">
						<div className="lg:w-[50%] flex place-items-center">
							<div className="">
								<div className="flex place-items-center">
									<h1 className="text-4xl font-semibold text-[#FF8080]">
										NatureTour - Travel Planner
									</h1>
									<span className="w-6"></span>
									<Link
										href="https://naturetour.vercel.app/"
										className="py-1 px-3 flex place-items-center border-2 border-cyan-600 rounded-lg  bg-[#323031] hover:bg-gradient-to-br  from-slate-600 via-red-500 to-cyan-600 shadow-xl shadow-black"
									>
										<h3>Live</h3>
										<div
											className="h-4 w-4 bg-cover"
											style={{
												backgroundImage:
													'url(/assets/link.png)',
											}}
										></div>
									</Link>
								</div>
								<h4 className="mt-6 text-lg text-justify text-[#D7E4C0]">
									My project integrates MongoDB, Express.js,
									React.js, and Node.js to offer a dynamic and
									user-friendly experience. From itinerary
									creation to blog writing, it streamlines the
									entire process. The efficient admin page
									ensures easy management, allowing admins to
									oversee user activities effortlessly.
								</h4>
								<div className="flex mt-4">
									<h3 className="text-[#BED1CF] text-lg font-semibold">
										Tech Stack
									</h3>
									<span className="ml-2 mr-2">:</span>
									<h4 className="text-[FFCF96] text-lg">
										React.js | Express.js | Node.js |
										Redux.js | Tailwind CSS | MongoDB
									</h4>
								</div>
							</div>
						</div>
						<div
							className="lg:w-[27vw] lg:h-[25vw]  md:w-[80vw] md:h-[55vw] sm:w-[80vw] sm:h-[55vw] w-[80vw] h-[55vw] mt-6 bg-cover rounded-2xl shadow-xl shadow-black"
							style={{
								backgroundImage: 'url(/assets/naturetour.jpg)',
							}}
						></div>
					</div>
					<div className="lg:flex lg:gap-8 lg:place-content-center mt-14 ">
						<div
							className="lg:w-[27vw] lg:h-[18vw]  md:w-[80vw] md:h-[55vw] sm:w-[80vw] sm:h-[55vw] w-[80vw] h-[55vw] mb-6 bg-cover rounded-2xl shadow-xl shadow-black"
							style={{
								backgroundImage:
									'url(/assets/urbanharbour.jpg)',
							}}
						></div>
						<div className="lg:w-[50%] flex place-items-center">
							<div className="">
								<div className="flex place-items-center">
									<h1 className="text-4xl font-semibold text-[#FF8080]">
										UrbanHarbour
									</h1>
									<span className="w-6"></span>
								</div>
								<h4 className="mt-6 text-md text-justify text-[#D7E4C0]">
									An e-commerce website, meticulously crafted
									using Django, Tailwind CSS, and PostgreSQL.
									Having a nice looking UI that seamlessly
									merges style and functionality. It has an
									efficient backend ensures smooth
									transactions, while the admin page empowers
									easy management.
								</h4>
								<div className="flex mt-4">
									<h3 className="text-[#BED1CF] text-lg font-semibold">
										Tech Stack
									</h3>
									<span className="ml-2 mr-2">:</span>
									<h4 className="text-[FFCF96] text-lg">
										Django | Tailwind CSS | HTML5 |
										PostgreSQL
									</h4>
								</div>
							</div>
						</div>
					</div>
				</section>
				<span className="h-[2vw]"></span>
			</div>
		</>
	);
}

export default Works;
