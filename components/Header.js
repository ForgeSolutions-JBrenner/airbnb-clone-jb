import Image from 'next/image'
import {useState} from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/solid'
import {useRouter} from 'next/dist/client/router'

function Header({placeholder}) {

	const [searchInput, setsearchInput] = useState("");
	const [startDate, setstartDate] = useState(new Date());
	const [endDate, setendDate] = useState(new Date());
	const [noGuests, setnoGuests] = useState(1);
	const router = useRouter();

	const handleSelect = (ranges) => {
		setstartDate(ranges.selection.startDate);
		setendDate(ranges.selection.endDate);
	};

	const resetInput = () => {
		setsearchInput("");
		setstartDate(new Date());
		setendDate(new Date());
		setnoGuests(1);
	};

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection"
	};

	const search = () => {
		router.push({
			pathname: '/search',
			query: {
				location:  searchInput,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
				noGuests: noGuests
			}
		}
		);
	}

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white
	shadow-md py-5 px-5 md:px-10'>
      {/*start by containerizing things*/}
      {/*left */}
      <div onClick={() => router.push("/")} className='relative flex items-center h-10 cursor-pointer
	  my-auto'>
		<Image
			src="https://links.papareact.com/qd3"
			layout="fill"
			objectFit="contain"
			objectPosition="left"
		/>
	  </div>
      {/*middle*/}
      <div className='flex items-center md:border-2 rounded-full py-2
	  '>
		<input
		value={searchInput}
		onChange={(e) => setsearchInput(e.target.value)}
		className='flex-grow pl-5 bg-transparent outline-none
		text-sm text-gray-600 placeholder-gray-400'
		type="text"
		placeholder={placeholder || "Start your search"}
		/>
		<SearchIcon onClick={search} className='mx-auto hidden md:inline-flex h-8
		bg-red-500 text-white rounded-full p-2 cursor-pointer
		md:mx-2' />
	  </div>
      {/*right*/}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
		  <p className='hidden md:inline cursor-pointer button'>Become a host</p>
		  <GlobeAltIcon
		  className='hover:shadow h-6 cursor-pointer' //animate-spin bounce pulse looks cool
		  />
		  <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
			  <MenuIcon className='h-6 cursor-pointer' />
			  <UserCircleIcon className='h-6' />
		  </div>
	  </div>
	{/* Calendar */}
	{searchInput &&
		<div className='flex flex-col col-span-3 mx-auto mt-2'>
			<DateRangePicker
				ranges={[selectionRange]}
				minDate={new Date()}
				rangeColors={['#fd5b61']}
				onChange={handleSelect}
			/>
			<div className='flex items-center border-b mb-4'>
				<h2 className='text-2xl flex-grow font-semibold'>How many Guests? </h2>
				<UsersIcon className='h-5' />
				<input
					value={noGuests}
					onChange={(e) => setnoGuests(e.target.value)}
					min={1}
					max={16}
					type="number"
					className='w-12 pl-2 text-lg outline-none text-red-400'/>
			</div>
			<div className='flex'>
				<button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
				<button onClick={search} className='flex-grow text-red-500 hover:text-gray-500 hover:bg-red-500 hover:rounded-full h-10'> Search</button>
			</div>
		</div>
	}
    </header>
  );
}

export default Header;
