// import ImageSlider from "../components/ImageSlider";

// import Header from './components/Header'
import Link from 'next/link'

// import ImageSlider from "./components/ImageSlider";
// import { RiArrowRightSLine } from "react-icons/ri";
// import {
//   RiFacebookCircleFill,
//   RiTwitterFill,
//   RiTiktokFill,
//   RiRedditFill,
//   RiSendPlaneFill,
// } from "react-icons/ri";
// import BackToTopButton from "./components/BackToTopButton";
// import InfiniteScrollMain from "./components/InfiniteScrollMain";

export const metadata = {
	title: 'Home',
	description: 'Home of the blog',
}

const endpoint = '/posts'

const url = `${process.env.WP_URL}${endpoint}`

async function getPosts() {
	const res = await fetch(url)
	let data
	if (!res.ok) {
		console.log({ '----- FETCH ERROR': res })
		return (data = [])
	}

	data = await res.json()
	return data
}

const data = await getPosts()

async function Page() {
	return (
		<>
			{data && (
				<div>
					<h1 className='text-3xl p-30 mx-auto'>{data[0].title.rendered}</h1>
					<p></p>
				</div>
			)}
		</>
	)
}

export default Page
