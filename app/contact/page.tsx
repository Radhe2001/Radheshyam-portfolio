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
	const [contacts,setContacts] = useState([
		{image:"/assets/phone.png",title:"Phone",value:"+91 6204293537"},
		{image:"/assets/email.png",title:"Email",value:"radheshyamjha469@gmail.com"},
		{image:"/assets/location.png",title:"Address",value:"Madhubani, Bihar"}]);
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
		<div className="grid w-full gap-2 mt-4 ">
			<section
				className="mx-[5vw] p-[3vw] rounded-3xl"
				style={{ backgroundColor: dark ? '#5d555542' : '#4b2d2d99' }}
			>
				<div className="flex items-center">
					<h1 className="text-4xl pb-2 font-bold">Contact</h1>
					<span className="w-4"></span>
					<h1 className="text-4xl pb-2 font-semibold bg-gradient-to-br from-cyan-600 via-slate-800 to-purple-400 text-transparent bg-clip-text">
						--------
					</h1>
				</div>
				<div className="flex flex-col md:flex-row mt-10 gap-4 w-full">
					<div className="grid gap-4 w-full md:w-1/2">
						{contacts.map((contact, index) => (
							<div className="border-2 px-8 py-6 rounded-xl border-cyan-600 shadow-xl shadow-black" key={index}>
								<div className="flex items-center">
									<div
										className="h-12 w-12 bg-cover"
										style={{ backgroundImage: `url(${contact.image})` }}
									/>
									<h3 className="text-xl md:text-3xl ml-2 font-semibold text-[#F8BDEB]">
										{contact.title} :
									</h3>
								</div>
								<h3 className="ml-8 font-semibold text-base md:text-xl pt-1 text-[#A7D397]">
									{contact.value}
								</h3>
							</div>
						))}
					</div>
					<div className="flex justify-center w-full md:w-1/2 mt-8 md:mt-0">
						<div className="border-2 border-slate-600 rounded-2xl w-full py-4 shadow-xl shadow-black">
							<div className="flex justify-center mb-8 mt-8">
								<h1 className="text-2xl md:text-3xl font-bold text-[#BFB29E]">Message Me</h1>
							</div>
							<div className="flex justify-center mb-4 mt-4">
								<input
									type="text"
									className="w-[90%] md:w-[80%] py-2 h-12 rounded-xl px-3 placeholder:text-sm md:placeholder:text-xl placeholder:font-semibold placeholder:text-slate-600 text-black font-semibold"
									placeholder="Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>
							<div className="flex justify-center mb-4">
								<input
									type="email"
									className="w-[90%] md:w-[80%] py-2 h-12 rounded-xl px-3 placeholder:text-sm md:placeholder:text-xl placeholder:font-semibold placeholder:text-slate-600 text-black font-semibold"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className="flex justify-center mb-4">
								<textarea
									className="w-[90%] md:w-[80%] py-2 h-24 rounded-xl px-3 placeholder:text-sm md:placeholder:text-xl placeholder:font-semibold placeholder:text-slate-600 text-black font-semibold"
									placeholder="Message"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									required
								/>
							</div>
							<div className="flex justify-center mb-4 mt-12">
								<button
									className="px-4 py-2 hover:bg-[#9A4444] border-2 border-slate-500 rounded-xl text-lg md:text-2xl font-semibold"
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
