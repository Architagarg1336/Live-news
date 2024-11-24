import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "next/link"
import NavLinks from "./NavLinks"
import SearchBox from "./SearchBox"
import DarkModeButton from "./DarkModeButton"


function Header() {
  return  <header>

  <div className = "grid grid-cols-3 p-10 items-center">
    <Bars3Icon className="w-8 h-8 cursor-pointer"/>
    <Link className="flex flex-row items-end gap-3" href="/" prefetch ={false}>
          <h1 className=" font-serif text-4xl text-center">
           <span className="underline decoration-6 decoration-orange-900">Live{" "}</span> 
             News</h1>
             <p className="font-serif text-sm">By Archita</p>
    </Link>
  

  
 


  <div className="flex items-center justify-end space-x-2">
    {/*Dark mode button*/}
  <DarkModeButton/>
  <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-6 py-2 lg:py-2 rounded-full dark:bg-slate-800">
    subscribe now
  </button>
  </div>

  </div>

  {/* Navigation links*/ }
    <NavLinks />


  {/* Search Box*/ }
 
<SearchBox />
  </header>
    
  
}

export default Header
