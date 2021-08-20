import Header from "../components/Header";
import Footer from "../components/Footer";
import {useRouter} from "next/dist/client/router";
import {format} from 'date-fns'
import { parseISO } from 'date-fns'
import InfoCard from "../components/InfoCard";

function search({searchResults}) {

	const router = useRouter();
	console.log(searchResults);
	//descructuring
	const {location, startDate, endDate, noGuests} = router.query;
	//const ned = new Date(Date.parse(endDate));
	//const fstartDate = format(new Date(nsd), "dd MMM yy");
	//const fendDate = format(new Date(ned), "dd MMM yy");
	const range = `${startDate} - ${endDate}` //javascript variables for string interpolation
	return (
		<div>
			<Header placeholder={`${location} | ${range} | ${noGuests} guests`}/>
			{/*main*/}
			<main className='flex'>
				<section className='flex-grow pt-14 px-6'>
					<p className='text-xs'> 12 stays • {range} • for {noGuests} guests</p>
					<h1 className='text-xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
					<div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800
					whitespace-nowrap'>
						<p className='button'>Free cancellation</p>
						<p className='button'>Type of place</p>
						<p className='button'>Price</p>
						<p className='button'>Instant Book</p>
						<p className='button'>More filters</p>
					</div>
					{/*create map to return data onto screen*/}
					<div className='flex flex-col'>
					{searchResults.map( ({img, location, title, description,
					star, price, total}) => (
						<InfoCard
						key={img}
						img={img}
						location={location}
						title={title}
						description={description}
						star={star}
						price={price}
						total={total}
						/>
					))}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default search;
export async function getServerSideProps() {
	//can include the context object for real time API data
	const searchResults = await fetch("https://links.papareact.com/isz")
	.then(res => res.json());

	return {
		props: {
			searchResults,
		}
	}
}
