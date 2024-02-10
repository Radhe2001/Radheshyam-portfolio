'use client';
import React from 'react';
import { darkSelector } from '../../provider/redux/dark';
import { useSelector } from 'react-redux';
function About() {
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
						<h1 className=" text-4xl pb-2  font-bold ">About Me</h1>
						<span className="w-4"></span>
						<h1 className=" text-4xl pb-2  font-semibold bg-gradient-to-br from-cyan-600 via-slate-800 to-purple-400 text-transparent bg-clip-text">
							--------
						</h1>
					</div>
					<div className="lg:flex w-full  mt-4">
						<div className="lg:w-4/6 ">
							<h3 className=" lg:text-3xl md:text-2xl sm:text-xl font-semibold mb-3">
								Who am I ?
							</h3>
							<p className="lg:w-[80%] pb-8 text-justify lg:text-lg md:text-md sm:text-sm">
								I'm a Full Stack Developer adept in crafting
								robust web and mobile applications using a
								diverse tech stack, including React, Node.js,
								Express, Next.js, Django,Android SDK and
								Flutter. Proficient in building live projects,
								with a keen eye for delivering seamless user
								experiences. Eagerly seeking new opportunities
								to leverage expertise in driving innovative
								solutions and contributing to dynamic
								development teams.
							</p>
						</div>
						<div className="lg:w-2/6">
							<h3 className=" lg:text-3xl md:text-2xl sm:text-xl font-semibold mb-6">
								Personal Info
							</h3>
							<div className="grid grid-cols-2 gap-4">
								<div className="flex">
									<div
										className="flex place-items-center px-2 rounded-xl"
										style={{
											backgroundColor: dark
												? '#5d555542'
												: '#092635',
										}}
									>
										<div
											className="h-8 w-8 bg-cover"
											style={{
												backgroundImage:
													'url(/assets/phone.png)',
											}}
										></div>
									</div>
									<span className="w-4"></span>
									<div className="">
										<h6 className="text-sm text-cyan-400">
											Phone
										</h6>
										<h4 className="md:text-md sm:text-sm">
											+91 6204293537
										</h4>
									</div>
								</div>

								<div className="flex">
									<div
										className="flex place-items-center px-2 rounded-xl"
										style={{
											backgroundColor: dark
												? '#5d555542'
												: '#092635',
										}}
									>
										<div
											className="h-8 w-8 bg-cover"
											style={{
												backgroundImage:
													'url(/assets/email.png)',
											}}
										></div>
									</div>
									<span className="w-4"></span>
									<div className="">
										<h6 className="text-sm text-cyan-400">
											Email
										</h6>
										<h4 className="md:text-md sm:text-sm">
											<abbr
												title="
										radheshyamjha469@gmail.com"
												className="no-underline cursor-pointer"
											>
												Hover me
											</abbr>
										</h4>
									</div>
								</div>
								<div className="flex">
									<div
										className="flex place-items-center px-2 rounded-xl"
										style={{
											backgroundColor: dark
												? '#5d555542'
												: '#092635',
										}}
									>
										<div
											className="h-8 w-8 bg-cover"
											style={{
												backgroundImage:
													'url(/assets/location.png)',
											}}
										></div>
									</div>
									<span className="w-4"></span>
									<div className="">
										<h6 className="text-sm text-cyan-400">
											Location
										</h6>
										<h4 className="md:text-md sm:text-sm">
											Phagwara, Punjab
										</h4>
									</div>
								</div>
								<div className="flex">
									<div
										className="flex place-items-center px-2 rounded-xl"
										style={{
											backgroundColor: dark
												? '#5d555542'
												: '#092635',
										}}
									>
										<div
											className="h-8 w-8 bg-cover"
											style={{
												backgroundImage:
													'url(/assets/calendar.png)',
											}}
										></div>
									</div>
									<span className="w-4"></span>
									<div className="">
										<h6 className="text-sm text-cyan-400">
											Birthday
										</h6>
										<h4 className="md:text-md sm:text-sm">
											Dec. 8 <sup>th</sup>, 2001
										</h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<h3 className=" lg:text-3xl md:text-2xl sm:text-xl font-semibold mb-6">
							What I do !
						</h3>
						<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
							<div className="px-4 py-3  border-2 border-slate-600 rounded-2xl shadow-xl shadow-black">
								<div className="flex place-items-center">
									<div
										className="h-10 w-10 mr-2 bg-cover"
										style={{
											backgroundImage:
												'url(/assets/app.png',
										}}
									></div>
									<h4 className="md:text-2xl sm:text-xl pb-1 font-semibold">
										App Development
									</h4>
								</div>
								<h5 className="ml-12 mt-2 text-justify text-md">
									Android Developer with expertise in Android
									SDK and Flutter. Successfully developed
									innovative applications like Hostel
									Management System and Quiz App, delivering
									intuitive user experiences. Passionate about
									crafting cutting-edge mobile solutions.
								</h5>
							</div>
							<div className="px-4 py-3  border-2 border-slate-600 rounded-2xl shadow-xl shadow-black">
								<div className="flex place-items-center">
									<div
										className="h-10 w-10 mr-2 bg-cover"
										style={{
											backgroundImage:
												'url(/assets/frontend.png',
										}}
									></div>
									<h4 className="md:text-2xl sm:text-xl pb-1 font-semibold">
										Front-end Development
									</h4>
								</div>
								<h5 className="ml-12 mt-2 text-justify text-md">
									Skilled Frontend Developer proficient in
									React, Tailwind CSS, and Next.js-14.
									Demonstrated expertise in crafting dynamic
									web applications, including ChatGPT Clone,
									Nature Tour, and GitHub Clone, with a focus
									on intuitive user experiences.
								</h5>
							</div>
							<div className="px-4 py-3  border-2 border-slate-600 rounded-2xl shadow-xl shadow-black">
								<div className="flex place-items-center">
									<div
										className="h-10 w-10 mr-2 bg-cover"
										style={{
											backgroundImage:
												'url(/assets/backend.png',
										}}
									></div>
									<h4 className="md:text-2xl sm:text-xl pb-1 font-semibold">
										Back-end Development
									</h4>
								</div>
								<h5 className="ml-12 mt-2 text-justify text-md">
									Backend Developer adept in building robust
									server-side solutions using Express, Django,
									and Next.js. Successfully developed backend
									systems for ChatGPT Clone, e-commerce
									platforms, QuizApp, and more, ensuring
									seamless functionality.
								</h5>
							</div>
						</div>
					</div>
				</section>
				<span className="h-[2vw]"></span>
			</div>
		</>
	);
}

export default About;
