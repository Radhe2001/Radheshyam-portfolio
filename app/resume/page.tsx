'use client';
import React, { useState } from 'react';
import { darkSelector } from '../../provider/redux/dark';
import { useSelector } from 'react-redux';

function Resume() {
	const dark = useSelector((state: any) => state.changeDark.value);
	const [certification,setCertification] = useState([
		{course:"Web Development Bootcamp",institution:"Udemy",time:3},
		{course:"Django Development Masterclass",institution:"Udemy",time:2},
		{course:"Java with DSA & System Design",institution:"PWSkills",time:6},
		{course:"Mobile App Development with Flutter",institution:"Learn Code Online",time:2}
	])
	const [skills,setSkills]=useState([
		{skill:"Dotnet",expertise:80},
		{skill:"Next.js",expertise:90},
		{skill:"MERN Stack",expertise:85},
		{skill:"Angular",expertise:70}
	])
	const [knowledges,setKnowledges]= useState(
		["Next.js","DotNet Web Api","Dotnet Web Form","React.js","Express.js","Angular",
			"React Native", "Material UI","Tailwind CSS","C#","JavaScript","SignalR",
			"Microservice", "SQL Server","MySQL"]);
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
						<h1 className=" text-4xl  pb-2  font-bold ">Resume</h1>
						<span className="w-4"></span>
						<h1 className="  text-4xl pb-2  font-semibold bg-gradient-to-br from-cyan-600 via-slate-800 to-purple-400 text-transparent bg-clip-text">
							--------
						</h1>
					</div>
					<div>
						<div className="flex mt-8 place-items-center gap-2 mb-6">
							<div
								className="h-12 w-12 bg-cover"
								style={{
									backgroundImage:
										'url(/assets/education.png)',
								}}
							></div>
							<h1 className="text-3xl font-semibold">
								Education
							</h1>
						</div>
						<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
							<div className="border-2 border-cyan-700 py-4 px-8 rounded-2xl shadow-xl shadow-black">
								<h3 className="text-[#99B080] text-lg mb-1 mt-1">
									2022-2024
								</h3>
								<h1 className="text-xl font-semibold mb-1">
									Master&#39;s in Information & Technology
								</h1>
								<h2 className="text-[#F8BDEB] text-xl mb-1">
									Lovely Professionla University, Punjab
								</h2>
							</div>
							<div className="border-2 border-cyan-700 py-4 px-8 rounded-2xl shadow-xl shadow-black">
								<h3 className="text-[#99B080] text-lg mb-1 mt-1">
									2018-2021
								</h3>
								<h1 className="text-xl font-semibold mb-1">
									Bachelor&#39;s in History
								</h1>
								<h2 className="text-[#F8BDEB] text-xl mb-1">
									Anugrah Narayan College, Patna
								</h2>
							</div>
							<div className="border-2 border-cyan-700 py-4 px-8 rounded-2xl shadow-xl shadow-black">
								<h3 className="text-[#99B080] text-lg mb-1 mt-1">
									2016-2018
								</h3>
								<h1 className="text-xl font-semibold mb-1">
									Higher Secondary
								</h1>
								<h2 className="text-[#F8BDEB] text-xl mb-1">
									Xavier&#39;s English School, WB
								</h2>
							</div>
						</div>
					</div>
					<div>
						<div className="flex mt-12 place-items-center gap-2 mb-6">
							<div
								className="h-12 w-12 bg-cover"
								style={{
									backgroundImage:
										'url(/assets/certification.png)',
								}}
							></div>
							<h1 className="text-3xl font-semibold">
								Certification
							</h1>
						</div>
						<div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
							{certification.map((item,i)=>{
								return <div className="border-2 border-cyan-700 py-4 px-8 rounded-2xl shadow-xl shadow-black" key={i}>
											<h1 className="text-xl font-semibold mb-1">
												{item.course}
											</h1>
											<h2 className="text-[#F8BDEB] text-xl mb-1">
												From {item.institution}
											</h2>
											<h3 className="text-[#99B080] text-lg mb-1 mt-1">
												{"0"+item.time} Months
											</h3>
										</div>;
							})}
						</div>
					</div>
					<div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-10 gap-4">
						<div className="">
							<h1 className="text-3xl font-semibold">
								Working Skills
							</h1>
							{skills.map((skill,i)=>{
								return <div className="grid place-items-center w-[90%] ml-[5%] mt-8" key={i}>
											<div className="flex w-full mb-2">
												<h1 className="text-xl font-semibold ">
													{skill.skill} 
												</h1>
												<h1 className="ml-auto text-xl font-semibold">
													{skill.expertise}%
												</h1>
											</div>
											<div className="h-2 w-full bg-[#D6C7AE] rounded-2xl">
												<div
													className="h-2 bg-[#4F4A45] rounded-2xl"
													style={{ width: `${skill.expertise}%` }}
												></div>
											</div>
										</div>
							})}
							
						</div>
						<div className="">
							<h1 className="text-3xl font-semibold">
								Knowledges
							</h1>
							<div className="flex flex-wrap gap-2 mt-10 mb-6">
								{knowledges.map((item,i)=>{
									return <h3 className="text-lg shadow-lg shadow-black text-[#B3A492] px-4 py-2 border-2 border-cyan-700 rounded-xl font-semibold " key={i}>
												{item}
											</h3>;
								})}
								
							</div>
						</div>
					</div>
				</section>
				<span className="h-[2vw]"></span>
			</div>
		</>
	);
}

export default Resume;
