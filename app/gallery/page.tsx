'use client'
import NavBar from '../_component/navbar';
import AllDogs from '../_component/Main';
export default function Gallery(){
    //BiSolidDog PiDogDuotone GiSittingDog SiDatadog FaCat FaShieldCat
    return(
        <div id='gallery' className='gallery h-[100vh]'>
            <div className='fixed top-16 left-[4.5rem] font-extrabold text-white z-40 text-7xl'>
            <div id='loading'></div>
            Fluffy Hugs
            </div>
            <NavBar />
            <AllDogs />
            
        </div>
    )
}