'use client'
import anime from 'animejs';
import AllDogs from '../_component/Main';
import {useEffect} from 'react';
import NavBar from '../_component/navbar';
import ImageBox from '../_component/setValue';
export default function Gallery(){
    //BiSolidDog PiDogDuotone GiSittingDog SiDatadog FaCat FaShieldCat
    useEffect(()=>{
        anime({
            targets: ['#first_circle' , '#second_circle'],
            scale: 0,
            loop:false,
            duration: 1000,
            delay: 200,
            easing: 'linear',
            complete: ()=>{
              document.getElementById('blue')!.style.display = 'none';
              document.getElementById('top')!.style.opacity = '1';
              document.getElementById('text')!.style.opacity = '1';
              document.getElementById('items')!.style.opacity = '1';
            }
        });
          document.getElementById('flex_14')?.scrollIntoView({behavior:'smooth' , block: 'center'});
    })
    return(
        <div id='gallery' className='gallery h-[100vh] scrollbar-none'>
            
            <div id="top" className="z-20 fixed md:right-[6rem] right-[4rem] top-20 opacity-0 border-white border-2 rounded-full cursor-pointer hover:border-gray-300 duration-300 md:px-8 px-6 py-2" onClick={animate}>Top</div>
            <AllDogs />
            <div id="blue" className="z-100 fixed right-0 bottom-0 cursor-pointer">
                <div id="first_circle" className="two_circles  bg-black absolute opacity-1 -bottom-5 -right-3 w-32 h-32 rotate-[40deg]" style={{borderRadius:'4rem 4rem 0 0',transform:'scale(35)'}}></div>
                <div id="second_circle" className="two_circles bg-black absolute opacity-1 -bottom-7 right-20 w-24 h-24 rotate-3" style={{borderRadius:'5rem 4rem 0 5rem',transform:'scale(35)'}}></div>
            </div>
            <ImageBox />
            <NavBar />
      <div id="black_overlay"></div>
      <div id="text" className='fixed top-16 md:left-[4.5rem] opacity-0 left-[3rem] font-extrabold text-white z-40 md:text-7xl text-5xl'> Fluffy Hugs</div>
        </div>
    )
}
//outro left right animation
let flex_array = ['#flex_1', '#flex_3', '#flex_5' , '#flex_7' , '#flex_9' , '#flex_11' , '#flex_13', '#flex_15' ,' #flex_17' , '#flex_19'
  ,'#flex_21', '#flex_23', '#flex_25' , '#flex_27' , '#flex_29', '#flex_31', '#flex_33', '#flex_35' , '#flex_37 ', '#flex_39',
  '#flex_41', '#flex_43', '#flex_45' ,' #flex_47' , '#flex_49']
  let flex_array2 = ['#flex_2', '#flex_4', '#flex_6' , '#flex_8' , '#flex_10' , '#flex_12' , '#flex_14', '#flex_16' ,' #flex_18' , '#flex_20'
    ,'#flex_22', '#flex_24', '#flex_26' , '#flex_28' , '#flex_30', '#flex_32', '#flex_34', '#flex_36' , '#flex_38', '#flex_40',
    '#flex_42', '#flex_44', '#flex_46' ,' #flex_48' , '#flex_50']
//two circle to show after clicking top
function animate(){
    anime({
        targets: ['#first_circle' , '#second_circle'],
        scale: 35,
        loop:false,
        duration: 700,
        easing: 'linear',
        opacity: 1,
        begin: ()=>{
            document.getElementById('blue')!.style.display = 'block'
        },
        changeBegin: ()=>{
            document.getElementById('first_circle')!.style.backgroundColor = 'black'
            document.getElementById('second_circle')!.style.backgroundColor = 'black'
        }
    });
    setTimeout(()=>{
        window.location.assign('/')
    }, 400)
  
    anime({
      targets: flex_array,
      translateX: '-170rem'
    })
  
    anime({
      targets: flex_array2,
      translateX: '170rem'
    })
  }