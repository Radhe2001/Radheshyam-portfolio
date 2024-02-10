'use client';
import React, { useState } from 'react';
import { darkSelector } from '../../provider/redux/dark';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Contact() {
	const dark = useSelector((state: any) => state.changeDark.value);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const submitForm = (e: any) => {
		e.preventDefault();
		if (name && email && message) {
			const data = {
				name: name,
				email: email,
				message: message,
			};

			axios
				.post('/api/email', data)
				.then((response) => {
					setName('');
					setEmail('');
					setMessage('');
					alert('Your message has been sent successfully');
				})
				.catch((error) => alert('Sorry please try again'));
		} else {
			alert('Please fill all the fields first');
		}
	};
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
						<h1 className=" text-4xl  pb-2  font-bold ">Contact</h1>
						<span className="w-4"></span>
						<h1 className="  text-4xl pb-2  font-semibold bg-gradient-to-br from-cyan-600 via-slate-800 to-purple-400 text-transparent bg-clip-text">
							--------
						</h1>
					</div>
					<div className="md:flex mt-10 gap md:gap-4">
						<div className="grid w-[3/6] gap-4">
							<div className="border-2 w-[90%] px-8 py-6 ml-[2vw] rounded-xl border-cyan-600 shadow-xl shadow-black">
								<div className="flex place-items-center">
									<div
										className="h-[2vw] w-[2vw] bg-cover"
										style={{
											backgroundImage:
												'url(/assets/phone.png)',
										}}
									></div>
									<h3 className="text-3xl ml-2 font-semibold text-[#F8BDEB]">
										Phone :
									</h3>
								</div>
								<h3 className="ml-8 font-semibold text-xl pt-1 text-[#A7D397]">
									+91 6204293537
								</h3>
							</div>
							<div className="border-2 w-[90%] px-8 py-6 ml-[2vw] rounded-xl border-cyan-600 shadow-xl shadow-black">
								<div className="flex place-items-center">
									<div
										className="h-[2vw] w-[2vw] bg-cover"
										style={{
											backgroundImage:
												'url(/assets/email.png)',
										}}
									></div>
									<h3 className="text-3xl ml-2 font-semibold text-[#F8BDEB]">
										Email :
									</h3>
								</div>
								<h3 className="ml-8 font-semibold text-xl pt-1 text-[#A7D397]">
									radheshyamjha469@gmail.com
								</h3>
							</div>
							<div className="border-2 w-[90%] px-8  py-6 ml-[2vw] rounded-xl border-cyan-600 shadow-xl shadow-black">
								<div className="flex place-items-center">
									<div
										className="h-[2vw] w-[2vw] bg-cover"
										style={{
											backgroundImage:
												'url(/assets/location.png)',
										}}
									></div>
									<h3 className="text-3xl ml-2 font-semibold text-[#F8BDEB]">
										Address :
									</h3>
								</div>
								<h3 className="ml-8 font-semibold text-xl pt-1 text-[#A7D397]">
									Madhubani, Bihar
								</h3>
							</div>
						</div>
						<div className="flex place-content-center sm:mt-8 md:mt-8 mt-8 w-[100%]">
							<div className="border-2 border-slate-600 rounded-2xl w-[92%] py-4 shadow-xl shadow-black">
								<div className="flex place-content-center mb-8 mt-8">
									<h1 className="text-3xl font-bold text-[#BFB29E]">
										Message Me
									</h1>
								</div>

								<div className="flex place-content-center mb-4 mt-4">
									<input
										type="text"
										className="lg:w-[60%] md:w-[80%] sm:w-[80%] lg:h-12 sm:h-16 md:h-16 rounded-xl px-3 placeholder:text-xl placeholder:font-semibold placeholder:text-slate-600 text-xl text-black font-semibold"
										placeholder="Name"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
										required
									/>
								</div>
								<div className="flex place-content-center mb-4 mt-4">
									<input
										type="email"
										className="lg:w-[60%] md:w-[80%] sm:w-[80%] lg:h-12 sm:h-16 md:h-16 rounded-xl px-3 placeholder:text-xl placeholder:font-semibold placeholder:text-slate-600 text-xl text-black font-semibold"
										placeholder="Email"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										required
									/>
								</div>
								<div className="flex place-content-center mb-4 mt-4">
									<textarea
										className="lg:w-[60%] md:w-[80%] sm:w-[80%] lg:h-12 sm:h-16 md:h-16 rounded-xl px-3 placeholder:text-xl placeholder:font-semibold placeholder:text-slate-600 text-xl text-black font-semibold"
										placeholder="Message"
										value={message}
										onChange={(e) =>
											setMessage(e.target.value)
										}
										required
									/>
								</div>
								<div className="flex place-content-center mb-4 mt-12">
									<button
										className="px-4 py-2 hover:bg-[#9A4444]  border-2 border-slate-500 rounded-xl text-2xl font-semibold"
										onClick={submitForm}
									>
										Submit
									</button>
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

export default Contact;
