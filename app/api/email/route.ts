import { NextRequest, NextResponse } from 'next/server';
const nodemailer = require('nodemailer');
require('dotenv').config();

export function POST(req: NextRequest, res: NextResponse) {
	req.json()
		.then((data) => {
			let transporter = nodemailer.createTransport({
				service: 'Gmail',
				auth: {
					user: process.env.EMAIL,
					pass: process.env.PASSWORD,
				},
			});

			let mailOptions = {
				from: process.env.EMAIL,
				to: process.env.RECEIVER,
				subject: 'Mail from portfolio',
				text: `Hii Radheshyam Jha , I want to connect with you \n \n Name : ${data.name} \n Email : ${data.email} \n \n Message : ${data.message} \n`,
			};

			transporter.sendMail(mailOptions, (error: any, info: any) => {
				if (error) {
					console.error('Error occurred while sending email:', error);
				} else {
					console.log('Email sent successfully:', info.response);
				}
			});
		})
		.catch((err) => console.error(err));

	return NextResponse.json({ success: true });
}
