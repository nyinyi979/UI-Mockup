import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BiSolidDirectionRight, BiSolidDog } from "react-icons/bi";
import { SlPicture } from "react-icons/sl";
import { TfiDirectionAlt } from "react-icons/tfi";
import { BiSolidDirectionLeft } from "react-icons/bi";
import { GiMultiDirections } from "react-icons/gi";
export function Dogs(){
    let images = ['/w1.png' , '/w2.png' , '/w3.png' , '/w4.png' , '/w5.png', '/w6.png', '/b1.png', '/3.png' , '/4.png',
    '/b2.png', '/b3.png', '/b4.png', '/b6.png', '/b7.png', '/b8.png', '/b9.png', '/b10.png' , '/1.png' , '/2.png'];
    let [ chosen , setChosen ] = useState('');
    function choosenCheck(value:string){
        if(chosen === value) setChosen('');
        else setChosen(value);
        images.map((value)=>{
          
        })
    }
    useEffect(()=>{
      let all_items = document.getElementById('all_items');
      let count = 0;
      images.map((value)=>{
        let id = value.split('/')[1];
        if(value === chosen) {
          console.log(chosen)
          document.getElementById(id)!.style.display = 'block';
        }
        else {
          if(document.getElementById(id)) document.getElementById(id)!.style.display = 'none';
          count += 1;
        }
      })
      if(count === images.length) {
        if(all_items !== null) all_items.style.display = 'block'
      }
      else {
        if(all_items !== null) all_items.style.display = 'none';
      }
    }, [chosen])
    return(
        <>
        <div className="dropdown dropdown-right relative m-0" onClick={()=>{}}>
          <label tabIndex={0} className="border-none outline-none px-2 py-2">
            <BiSolidDog className="cursor-pointer text-black ml-3 hover:scale-110 scale-100 duration-300 " style={{fontSize:'2.5rem'}}/> 
            {chosen === '' ? '' : <img src={chosen} alt="img" width={60} height={60} className="absolute block left-1 top-6 z-30  bg-white w-12 h-12 rounded-md cursor-pointer"/>}
          </label>
          <ul id="d1" tabIndex={0} className="dropdown-content right-0 z-[1] grid grid-cols-5 gap-5 p-7 shadow bg-black rounded-box w-[25rem]">
                <h2 className="col-span-5 text-center">Images</h2>
                {images.map((value)=>(
                    <Image key={value} src={value} width={100} height={100} alt="pic" className={`cursor-pointer w-12 h-12 rounded-md bg-cover ${chosen === value ? 'border-yellow-200 border-2' : 'hover:scale-110 duration-500'}`} onClick={()=>{choosenCheck(value)}}/>
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
      bg.map((value)=>{
        if(value === chosen) {
          console.log(chosen)
          document.getElementById(value)!.style.display = 'block';
        }
        else {
          if(document.getElementById(value)) document.getElementById(value)!.style.display = 'none';
          count += 1;
        }
      })
      if(count === bg.length) {
        if(all_items !== null) all_items.style.display = 'block'
      }
      else {
        if(all_items !== null) all_items.style.display = 'none';
      }
    }, [chosen])
    return(
        <>
        <div className="dropdown dropdown-right relative" onClick={()=>{}}>
          <label tabIndex={0} className=" border-none outline-none">
            <SlPicture className="cursor-pointer text-black ml-3 hover:scale-110 scale-100 duration-300" style={{fontSize:'2.5rem'}}/> 
            {chosen === '' ? '' : <div className={`absolute block left-2 top-0 ${chosen} z-30 border-black border-2  w-12 h-12 rounded-md cursor-pointer`}/>}
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
    directions.map((value)=>{
      if(value === chosen) {
        console.log(chosen)
        document.getElementById(value)!.style.display = 'block';
      }
      else {
        if(document.getElementById(value)) document.getElementById(value)!.style.display = 'none';
        count += 1;
      }
    })
    if(count === directions.length) {
      if(all_items !== null) all_items.style.display = 'block'
    }
    else {
      if(all_items !== null) all_items.style.display = 'none';
    }
  }, [chosen])
  return(
      <>
      <div className="dropdown dropdown-right relative mt-5" onClick={()=>{}}>
        <label tabIndex={0} className=" border-none outline-none">
          <TfiDirectionAlt className="cursor-pointer text-black ml-3 hover:scale-110 scale-100 duration-300" style={{fontSize:'2.5rem'}}/> 
          {chosen === '' ? '' : chosen === 'left'?  
            <BiSolidDirectionLeft className={`absolute block left-2 top-0  ${chosen} bg-black  z-30 border-black border-2  w-12 h-12 rounded-md cursor-pointer`}/> 
          : <BiSolidDirectionRight className={`absolute block left-2 top-0 ${chosen} bg-black z-30 border-black border-2  w-12 h-12 rounded-md cursor-pointer`}/>}
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