import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BiSolidDirectionRight, BiSolidDog } from "react-icons/bi";
import { SlPicture } from "react-icons/sl";
import { TfiDirectionAlt } from "react-icons/tfi";
import { BiSolidDirectionLeft } from "react-icons/bi";
import { GiMultiDirections } from "react-icons/gi";
let icon_class = "cursor-pointer text-black ml-3 text-4xl hover:scale-110 scale-100 duration-300 h-12"

let ids = ['w1.png' , 'w2.png' , 'a1.png' , 'a2.png' , 'a3.png' , 'a4.png',  'w3.png' , 'w4.png' , 'w5.png', 'w6.png'
, 'b1.png', 'b2.png', 'b3.png', 'b4.png', 'b6.png', 'b7.png', 'b8.png', 'b9.png', 'b10.png','bg-white' , 'bg-gray-500' , 
'bg-gray-950' , 'bg-red-500' , 'bg-red-950' , 'bg-blue-500' , 'bg-blue-950' , 'bg-stone-500' , 'bg-stone-950' , 
'bg-yellow-500' ,'bg-yellow-950' , 'bg-amber-500' , 'bg-amber-950' , 'bg-lime-500' , 'bg-green-500' , 'bg-lime-950' , 'bg-green-950'
,'left' , 'right' , 'center','all_items']

//for the dogs menu from the nav bar
//checked with the ids for other dogs menu elements to disappear 
export function Dogs(){
  let images = ['/w1.png' , '/w2.png' , '/a1.png' , '/a2.png' , '/a3.png' , '/a4.png',  '/w3.png' , '/w4.png' , '/w5.png', '/w6.png', '/b1.png',
   '/b2.png', '/b3.png', '/b4.png', '/b6.png', '/b7.png', '/b8.png', '/b9.png', '/b10.png'];
    let [ chosen , setChosen ] = useState('');
    function choosenCheck(value:string){
        if(chosen === value) setChosen('');
        else setChosen(value);
    }
    useEffect(()=>{
      let all_items = document.getElementById('all_items');
      let count = 0;

      //checking if there is any overlay , the ids is an array that contain id of actual flexboxes 
      ids.map((id)=>{
        if(id === chosen) {
          console.log(chosen , id);
          document.getElementById(id)!.style.display = 'block';
        }
        else {
          if(document.getElementById(id)) document.getElementById(id)!.style.display = 'none';
          count += 1;
        }
      })
      console.log(count , ids.length)
      if(count === ids.length) {
        if(all_items !== null) all_items.style.display = 'block'
      }
      else {
        //hide other chosen things 
        if(all_items !== null) all_items.style.display = 'none';
      }
    }, [chosen])
    return(
        <>
        <div className="dropdown dropdown-right relative m-0" onClick={()=>{}}>
          <label tabIndex={0} className="border-none outline-none px-2 -my-2">
            <BiSolidDog className={icon_class}/> 
            {chosen === '' ? '' : <img id="chosen_dog" src={chosen} alt="img" width={60} height={60} className="absolute block left-1 top-6 z-30  bg-white w-12 h-12 rounded-md cursor-pointer"/>}
          </label>
          <ul id="d1" tabIndex={0} className="dropdown-content right-0 z-[1] grid grid-cols-5 gap-5 p-7 shadow bg-black rounded-box w-[25rem]">
                <h2 className="col-span-5 text-center">Images</h2>
                {images.map((value)=>(
                    <Image key={value} src={value} width={100} height={100} alt="pic" className={`cursor-pointer w-12 h-12 rounded-md bg-cover ${chosen === value.split('/')[1] ? 'border-yellow-200 border-2' : 'hover:scale-110 duration-500'}`} onClick={()=>{choosenCheck(value.split('/')[1])}}/>
                ))}
            
          </ul>
        </div>
        </>
    )
}

export function Bg(){
    let bg = ['bg-white' , 'bg-gray-500' , 'bg-gray-950' , 'bg-red-500' , 'bg-red-950' , 'bg-blue-500' , 'bg-blue-950' , 'bg-stone-500' , 'bg-stone-950' , 
  'bg-yellow-500' ,'bg-yellow-950' , 'bg-amber-500' , 'bg-amber-950' , 'bg-lime-500' , 'bg-green-500' , 'bg-lime-950' , 'bg-green-950'];
    let [ chosen , setChosen ] = useState('');
    function choosenCheck(value:string){
        if(chosen === value) {
          setChosen('')
        }
        else setChosen(value);
    }
    useEffect(()=>{
      let all_items = document.getElementById('all_items');
      let count = 0;
      ids.map((id)=>{
        if(id === chosen) {
          console.log(chosen)
          document.getElementById(id)!.style.display = 'block';
        }
        else {
          if(document.getElementById(id)) document.getElementById(id)!.style.display = 'none';
          count += 1;
        }
      })
      if(count === ids.length) {
        if(all_items !== null) all_items.style.display = 'block'
      }
      else {
        if(all_items !== null) all_items.style.display = 'none';
      }
    }, [chosen])
    return(
        <>
        <div className="dropdown dropdown-right relative" onClick={()=>{}}>
          <label tabIndex={0} className=" border-none outline-none -my-2">
            <SlPicture className={icon_class}/> 
            {chosen === '' ? '' : <div id="chosen_color" className={`absolute block left-2 top-0 ${chosen} z-30 border-black border-2  w-12 h-12 rounded-md cursor-pointer`}/>}
          </label>
          <ul id="d2" tabIndex={0} className="dropdown-content right-0 z-[1] grid grid-cols-5 gap-5 p-7 shadow bg-black rounded-box w-[25rem]">
                <h2 className="col-span-5 text-center">background colors</h2>
                {bg.map((value)=>(
                    <div key={value} onClick={()=>{choosenCheck(value)}} className={`cursor-pointer w-12 h-12 rounded-md ${value} ${chosen === value? 'border-2 border-yellow-500' : 'hover:scale-110 duration-500'}`}></div>
                ))}
          </ul>
        </div>
        </>
    )
}
export function Direction(){
  let directions = ['left' , 'right' , 'center']
  let [ chosen , setChosen ] = useState('');
  function choosenCheck(value:string){
      if(chosen === value) setChosen('');
      else setChosen(value); 
  }
  
  useEffect(()=>{
    let all_items = document.getElementById('all_items');
    let count = 0;
    ids.map((id)=>{
      if(id === chosen) {
        console.log(chosen)
        document.getElementById(id)!.style.display = 'block';
      }
      else {
        if(document.getElementById(id)) document.getElementById(id)!.style.display = 'none';
        count += 1;
      }
    })
    if(count === ids.length) {
      if(all_items !== null) all_items.style.display = 'block'
    }
    else {
      if(all_items !== null) {
        all_items.style.display = 'none'
      }
    }
  }, [chosen])
  return(
      <>
      <div className="dropdown dropdown-right relative mt-5" onClick={()=>{}}>
        <label tabIndex={0} className=" border-none outline-none -py-2">
          <TfiDirectionAlt className={icon_class}/> 
          <div id="chosen_direction" className="absolute block left-2 top-0 z-30 w-12 h-12 rounded-md cursor-pointer">
            {chosen === '' ? '' : chosen === 'left'?  
              <BiSolidDirectionLeft className="bg-black w-full h-full"/> 
            : chosen === 'center'? 
            <GiMultiDirections  className="bg-black w-full h-full"/>
            : <BiSolidDirectionRight className="bg-black h-full w-full"/>
            }
          </div>
        </label>
        <ul id="d3" tabIndex={0} className="dropdown-content right-0 z-[1] grid grid-cols-5 gap-5 p-7 shadow bg-black rounded-box w-[25rem]">
            <h2 className="col-span-5 text-center">direction</h2>
            <BiSolidDirectionLeft className={`cursor-pointer w-12 h-12 rounded-md ${chosen === 'left'? 'border-2 border-yellow-500' : 'hover:scale-110 duration-500'}`} onClick={()=>{choosenCheck('left')}}/>
            <BiSolidDirectionRight className={`cursor-pointer w-12 h-12 rounded-md ${chosen === 'right'? 'border-2 border-yellow-500' : 'hover:scale-110 duration-500'}`} onClick={()=>{choosenCheck('right')}} />
            <GiMultiDirections className={`cursor-pointer w-12 h-12 rounded-md ${chosen === 'center'? 'border-2 border-yellow-500' : 'hover:scale-110 duration-500'}`} onClick={()=>{choosenCheck('center')}} />
        </ul>
      </div>
      </>
  )
}