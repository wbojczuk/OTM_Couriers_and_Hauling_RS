import ContactInfo from "@/app/(mainsite)/components/contactpage/ContactInfo/ContactInfo"
import FormAndMap from "@/app/(mainsite)/components/contactpage/FormAndMap/FormAndMap"
import FAQ from "@/app/(mainsite)/components/homepage/FAQ/FAQ"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Contact | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Contact | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function ContactPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="Contact" />
			<div style={{position: "relative"}}>
				<ContactInfo />
				<FormAndMap />
				<FAQ />
			
				<img src='/img/contact.webp' alt='Image of boxes' className='bg-img' />
				<div style={{backgroundColor: "rgba(0,0,0, 0.53)"}} className='shader'></div>
			</div>
	 	 </>
	 )
}