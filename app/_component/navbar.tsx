import {SiDatadog} from 'react-icons/si'
import { SlPicture } from 'react-icons/sl'

import {AiOutlineReload} from 'react-icons/ai';
import {FaCat} from 'react-icons/fa'
import {FaShieldCat} from 'react-icons/fa6'
import {PiDogDuotone} from 'react-icons/pi'
import {CiCircleQuestion} from 'react-icons/ci'
import { Dogs, Bg, Direction } from './pop_up';
export default function NavBar(){
    //BiSolidDog PiDogDuotone GiSittingDog SiDatadog FaCat FaShieldCat
    return(
        <div className=" fixed w-fit h-fit left-0 top-20 rounded-md items-center align-middle z-20">
            {/* first portion */}
            <div className='flex flex-col gap-1 w-24 pl-4 -translate-x-4 bg-white' style={{borderRadius: '20px'}}>
                <Dogs />
                <Bg />
                <Direction />
                <PiDogDuotone className="cursor-pointer text-black ml-3 mt-5 hover:scale-110 scale-100 duration-300" style={{fontSize:'2.5rem'}}/>
                <SiDatadog className="cursor-pointer text-black ml-3 mt-5 hover:scale-110 scale-100 duration-300" style={{fontSize:'2.5rem'}}/>
                <FaCat className="cursor-pointer text-black ml-3 mt-5 hover:scale-110 scale-100 duration-300" style={{fontSize:'2.5rem'}}/>
                <FaShieldCat className="cursor-pointer text-black ml-3 mt-6 hover:scale-110 scale-100 duration-300" style={{fontSize:'2.5rem'}}/>
               
                <div className="flex-1 w-20 p-4 bg-black text-white text-4xl cursor-pointer rounded-br-md">
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