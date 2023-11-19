import {SiDatadog} from 'react-icons/si'
import { SlPicture } from 'react-icons/sl'

import {AiOutlineReload} from 'react-icons/ai';
import {FaCat} from 'react-icons/fa'
import {FaShieldCat} from 'react-icons/fa6'
import {PiDogDuotone} from 'react-icons/pi'
import {CiCircleQuestion} from 'react-icons/ci'
import { Dogs, Bg, Direction } from './pop_up';
let icon_class = "cursor-pointer text-black ml-3 text-4xl hover:scale-110 scale-100 duration-300 h-12 md:mt-4 mt-3"
export default function NavBar(){
    //BiSolidDog PiDogDuotone GiSittingDog SiDatadog FaCat FaShieldCat
    return(
        <div className="fixed w-fit h-fit left-0 top-20 rounded-md items-center align-middle z-30">
            {/* first portion */}
            <div className='flex flex-col md:w-24 w-20 pl-4 -translate-x-4 bg-white z-10' style={{borderRadius: '20px'}}>
                <Dogs />
                <Bg />
                <Direction />
                <PiDogDuotone className={icon_class}/>
                <SiDatadog className={icon_class}/>
                <FaCat className={icon_class}/>
                <FaShieldCat className={`${icon_class} mt-4`}/>
               
                <div className="flex-1 w-20 py-4 pl-7 md:pl-4 md:-translate-x-0 -translate-x-4 bg-black text-white text-4xl cursor-pointer rounded-br-md mt-2">
                    <AiOutlineReload className="hover:scale-110 scale-100 duration-300"/>
                </div>
            {/* question mark */}
            </div>
            <div className="flex-1 w-20 p-4 text-white text-4xl cursor-pointer rounded-br-md">
                    <CiCircleQuestion className="hover:scale-105 scale-100 duration-300"/>
                </div>
        </div>
        
    )
}