import Footer from "../components/Footer"
import Header from "../components/Header"
import {useRouter} from 'next/router'
import {format} from 'date-fns'
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";


function Search({searchResults}) {
    const router = useRouter();
    const {location, startDate, endDate, numberOfGuests} = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate} `

    const button = (buttonText)=>(
        <p className="px-4 py-2 border rounded-full  cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-all ease-in-out">{buttonText}</p>

    )
    return (
        <div>
               <Header placeholder = {`${location} | ${range} | ${numberOfGuests} guests`} />
               <main className="flex flex-col xl:flex-row">
                   <section className="flex-grow pt-14 px-6">
                       <p className="text-sm">300+ stays - {range} - for {numberOfGuests}  guests</p>
                       <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                       <div className="hidden md:flex items-center mb-5 text-gray-700 whitespace-nowrap space-x-4 ">
                           {button("CancelationFlexibility")}
                           {button("Type of Place")}
                           {button("Price")}
                           {button("Rooms and Beds")}
                           {button("More Filters")}
                       </div>

                       <div>
                           {searchResults.map(({img, location, title, description, star, price, total, long, alt }) => (
                               <InfoCard
                               key={img}
                               img = {img}
                               location = {location}
                               title = {title}
                               description = {description}
                               star = {star}
                               price = {price}
                               total = {total}
                               long = {long}
                               alt = {alt}
                               />
                           ))}

                       </div>

                   </section>
                   <section className=" min-w-[600px] h-screen xl:h-auto border">
                       <Map searchResults = {searchResults} />
                   </section>
               </main>
               <Footer />
        </div>
    )
}

export default Search;

export async function getServerSideProps(){
const searchResults = await fetch("https://links.papareact.com/isz")
.then(res => res.json());

return {
    props:{
        searchResults
    }
}
}
