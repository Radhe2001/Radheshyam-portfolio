'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { setDark, darkSelector } from '../provider/redux/dark';
function Navbar({ setBgColor }) {
	const [mobileMenu, setMobileMenu] = useState(false);
	const [activeLink, setActiveLink] = useState('home');
	const dark = useSelector((state: any) => state.changeDark.value);
	const dispatch = useDispatch();
	const handleClick = (link: any) => {
		setActiveLink(link);
	};

	const changeBackground = (e: any) => {
		e.preventDefault();
		dispatch(setDark(!dark));

		if (dark) {
			setBgColor('#C7C8CC');
		} else {
			setBgColor('#191919');
		}
	};

	const showMenu = (e: any) => {
		e.preventDefault();
		setMobileMenu(!mobileMenu);
	};
	return (
		<section className="w-full flex place-content-center">
			{/* sm , md nav */}
			<nav className="xl:hidden lg:hidden 2xl:hidden w-[100vw] mt-6 px-4 ">
				<div className="flex place-content-center">
					<h1 className=" text-4xl pb-2  font-bold bg-gradient-to-br from-yellow-300 via-red-500 to-purple-600 text-transparent bg-clip-text">
						Radheshyam Jha
					</h1>
					<div className="ml-auto flex gap-4 place-items-center">
						<button
							onClick={changeBackground}
							className="btn-toggle-background bg-cover bg-[#FFF3CF] hover:bg-[#E0CCBE] rounded-full p-2 h-[6vw] w-[6vw]"
							style={{
								backgroundImage: dark
									? 'url(/assets/light.png)'
									: 'url(/assets/dark.png)',
							}}
						></button>
						<button
							onClick={showMenu}
							className="btn-ham bg-cover bg-[#FFF3CF] hover:bg-[#E0CCBE] rounded-full p-2 h-[6vw] w-[6vw]"
							style={{
								backgroundImage: mobileMenu
									? 'url(/assets/cross.png)'
									: 'url(/assets/hamburger.png)',
							}}
						></button>
					</div>
				</div>
				<section
					className="mobile-menu-bar mt-4"
					style={{ display: mobileMenu ? 'block' : 'none' }}
				>
					<div className="flex place-content-between">
						<Link
							className={`py-2 px-2 flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br ${
								activeLink === 'home'
									? 'bg-gradient-to-br'
									: 'bg-[#323031]'
							} from-slate-600 via-red-500 to-cyan-600`}
							href="/"
							onClick={() => handleClick('home')}
						>
							<div
								style={{
									backgroundImage: 'url(/assets/home.png)',
								}}
								className="h-3 w-3 bg-cover"
							/>
							<h1 className="font-semibold text-sm">Home</h1>
						</Link>
						<Link
							className={`py-2 px-2 flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br ${
								activeLink === 'about'
									? 'bg-gradient-to-br'
									: 'bg-[#323031]'
							} from-slate-600 via-red-500 to-cyan-600`}
							href="/about"
							onClick={() => handleClick('about')}
						>
							<div
								style={{
									backgroundImage: 'url(/assets/about.png)',
								}}
								className="h-3 w-3 bg-cover"
							/>
							<h1 className="font-semibold text-sm">About</h1>
						</Link>
						<Link
							className={`py-2 px-2 flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br ${
								activeLink === 'resume'
									? 'bg-gradient-to-br'
									: 'bg-[#323031]'
							} from-slate-600 via-red-500 to-cyan-600`}
							href="/resume"
							onClick={() => handleClick('resume')}
						>
							<div
								style={{
									backgroundImage: 'url(/assets/resume.png)',
								}}
								className="h-3 w-3 bg-cover"
							/>
							<h1 className="font-semibold text-sm">Resume</h1>
						</Link>
						<Link
							className={`py-2 px-2 flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br ${
								activeLink === 'works'
									? 'bg-gradient-to-br'
									: 'bg-[#323031]'
							} from-slate-600 via-red-500 to-cyan-600`}
							href="/works"
							onClick={() => handleClick('works')}
						>
							<div
								style={{
									backgroundImage: 'url(/assets/works.png)',
								}}
								className="h-3 w-3 bg-cover"
							/>
							<h1 className="font-semibold text-sm">Works</h1>
						</Link>
						<Link
							className={`py-2 px-2 flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br ${
								activeLink === 'contact'
									? 'bg-gradient-to-br'
									: 'bg-[#323031]'
							} from-slate-600 via-red-500 to-cyan-600`}
							href="/contact"
							onClick={() => handleClick('contact')}
						>
							<div
								style={{
									backgroundImage: 'url(/assets/contact.png)',
								}}
								className="h-3 w-3 bg-cover"
							/>
							<h1 className="font-semibold text-sm">Contact</h1>
						</Link>
					</div>
				</section>
			</nav>
			{/* lg , xl , 2xl nav */}
			<nav className="py-2 mt-6 lg:flex w-[90vw] lg:place-items-center hidden md:hidden">
				<h1 className=" text-4xl py-2 font-bold bg-gradient-to-br from-yellow-300 via-red-500 to-purple-600 text-transparent bg-clip-text">
					Radheshyam Jha
				</h1>
				<div className="ml-auto flex gap-4">
					<Link
						className={`py-2 px-3 flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br ${
							activeLink === 'home'
								? 'bg-gradient-to-br'
								: 'bg-[#323031]'
						} from-slate-600 via-red-500 to-cyan-600`}
						href="/"
						onClick={() => handleClick('home')}
					>
						<div
							style={{
								backgroundImage: 'url(/assets/home.png)',
							}}
							className="h-5 w-5 bg-cover"
						/>
						<h1 className="font-semibold text-md">Home</h1>
					</Link>
					<Link
						className={`py-2 px-3 flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br ${
							activeLink === 'about'
								? 'bg-gradient-to-br'
								: 'bg-[#323031]'
						} from-slate-600 via-red-500 to-cyan-600`}
						href="/about"
						onClick={() => handleClick('about')}
					>
						<div
							style={{
								backgroundImage: 'url(/assets/about.png)',
							}}
							className="h-5 w-5 bg-cover"
						/>
						<h1 className="font-semibold text-md">About</h1>
					</Link>
					<Link
						className={`py-2 px-3 flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br ${
							activeLink === 'resume'
								? 'bg-gradient-to-br'
								: 'bg-[#323031]'
						} from-slate-600 via-red-500 to-cyan-600`}
						href="/resume"
						onClick={() => handleClick('resume')}
					>
						<div
							style={{
								backgroundImage: 'url(/assets/resume.png)',
							}}
							className="h-5 w-5 bg-cover"
						/>
						<h1 className="font-semibold text-md">Resume</h1>
					</Link>
					<Link
						className={`py-2 px-3 flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br  ${
							activeLink === 'works'
								? 'bg-gradient-to-br'
								: 'bg-[#323031]'
						} from-slate-600 via-red-500 to-cyan-600`}
						href="/works"
						onClick={() => handleClick('works')}
					>
						<div
							style={{
								backgroundImage: 'url(/assets/works.png)',
							}}
							className="h-5 w-5 bg-cover"
						/>
						<h1 className="font-semibold text-md">Works</h1>
					</Link>
					<Link
						className={`py-2 px-3 flex place-items-center gap-1 rounded-lg bg-[#323031] hover:bg-gradient-to-br ${
							activeLink === 'contact'
								? 'bg-gradient-to-br'
								: 'bg-[#323031]'
						} from-slate-600 via-red-500 to-cyan-600`}
						href="/contact"
						onClick={() => handleClick('contact')}
					>
						<div
							style={{
								backgroundImage: 'url(/assets/contact.png)',
							}}
							className="h-5 w-5 bg-cover"
						/>
						<h1 className="font-semibold text-md">Contact</h1>
					</Link>
					<button
						onClick={changeBackground}
						className="btn-toggle-background bg-cover bg-[#FFF3CF] hover:bg-[#E0CCBE] rounded-full p-4 mt-1 ml-4 h-[2vw] w-[2vw]"
						style={{
							backgroundImage: dark
								? 'url(/assets/light.png)'
								: 'url(/assets/dark.png)',
						}}
					></button>
				</div>
			</nav>
		</section>
	);
}

export default Navbar;
