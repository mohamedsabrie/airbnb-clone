import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"

function InfoCard({img, location,title, description, star, price, total, long, alt}) {
    return (
        <div className="flex  px-2 py-7 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t ">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 overflow-hidden rounded-2xl">
               <Image src = {img} layout="fill" className="rounded-2xl hover:scale-105 transirion duration-200 ease-out " />
            </div>
            <div className=" flex flex-col flex-grow px-5 ">
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">{location}</p>
                    <HeartIcon className="h-7" />
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="border-b w-10 pt-2" />
                <p className="text-sm pt-2 text-gray-500 flex-grow">{description}</p>
                <div className="flex justify-between items-end">
                    <p className="flex items-center">
                    <StarIcon className="h-5  text-red-500" />
                    {star}
                    </p>
                    <div>
                        <p className="pb-2 text-lg lg:text-2xl font-semibold">{price}</p>
                        <p className="font-extralight text-right">{total}</p>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default InfoCard
