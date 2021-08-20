import React from 'react'
import Image from 'next/dist/client/image'
import {HeartIcon} from '@heroicons/react/outline'
import {StarIcon} from '@heroicons/react/solid'

function infoCard({img, location, title, description, star, price, total}) {
	return (
		<div className='flex py-7 px-2 border-b cursor-pointer pr-4 first:border-t
		hover:opacity-80 rounded-xl hover:shadow-lg hover:scale-105 transition duration-200 ease-in hover:pl-3'>
			<div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
				<Image src={img} layout='fill' object-fit='cover' className='rounded-2xl'/>
			</div>

			<div className='flex flex-col flex-grow pl-5'>
				<div className='flex justify-between'>
					<p>{location}</p>
					<HeartIcon className='h-7 cursor-pointer'/>
				</div>
				<h4 className='text-xl'>{title}</h4>
				<div className='border-b w-10 pt-2'/>
				<p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>

				<div className='flex justify-between items-end pt-5 pr-1'>
					<p className='flex items-center'>
						<StarIcon className='h-5 text-red-400 cursor-pointer'/>
						<span className='pl-1'>{star}</span>
					</p>
					<div>
						<p className='text-lg font-semibold lg:text-2xl pb-2'>{price}</p>
						<p className='text-right font-extralight'>{total}</p>
					</div>
				</div>
			</div>

		</div>
	)


}

export default infoCard
