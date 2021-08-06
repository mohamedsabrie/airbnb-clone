import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import {useRouter} from 'next/router'

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router  = useRouter();
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  const resetSearchInput = () =>{
    setSearchInput("")
  };
  const handleSearch = () =>{
    router.push({
      pathname : "/search",
      query : {
        location : searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,

      }
    });
    resetSearchInput();
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 items-center p-5 shadow-md bg-white">
      {/* left side  */}
      <div className="relative h-10" onClick={() => router.push("/")}>
        <Image
          className="cursor-pointer"
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle side  */}
      <div className="w-full flex items-center rounded-full pl-5 py-2 md:border-2 shadow-sm">
        <input
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          className="outline-none flex-grow text-gray-600 placeholder-gray-400 text-sm"
          type="text"
          placeholder={ placeholder || "Start your Search"}
        />
        <SearchIcon className="hidden md:inline-flex h-8 w-8  p-2 md:mx-2 bg-red-500 text-white rounded-full cursor-pointer" />
      </div>
      {/* right side  */}
      <div className="flex items-center justify-end text-gray-500 space-x-4 ">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="mx-auto col-span-3 mt-5 flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-2">
            <h2 className="flex-grow text-2xl font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={numberOfGuests}
              min={1}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              className="w-12 outline-none text-red-500 pl-2 text-lg"
              type="number"
            />
          </div>
          <div className="flex">
            <button onClick ={resetSearchInput} className="text-gray-500 flex-grow"> Cancel</button>
            <button onClick = {handleSearch} className='text-red-500 flex-grow'> Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
