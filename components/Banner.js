import Image from "next/image"

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[676px]">
            <Image src="https://links.papareact.com/0fm" 
            layout="fill"
            objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center text-sm sm:text-lg">
             <p className="font-semiboldet text-2xl"> Not sure where to go? Perfect.</p>
             <button className="bg-[rgba(0,0,0,0.8)] text-white px-8 py-4 font-bold rounded-lg mt-5 shadow-md hover:shadow-xl active:scale-90 transition-all">
                 I'm flexible
            </button> 
            </div>
            
        </div>
    )
}
 
export default Banner
