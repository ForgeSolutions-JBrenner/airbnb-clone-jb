import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 sm:w-full xl:w-[1315px] ">
        <Image src={img} layout="fill" objectFit="cover"
		className='rounded-xl' />
      </div>

      <div className='absolute top-32 left-12'>
		  <h3 className='font-bold text-4xl mb-3 w-64'>{title}</h3>
		  <p className='font-semibold'>{description}</p>
		  <button className='text-sm text-white bg-gray-900 px-4 py-2
		  rounded-lg mt-5 hover:scale-105 transform'>{buttonText}</button>
	  </div>
    </section>
  );
}

export default LargeCard;
