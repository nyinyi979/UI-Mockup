import {useEffect,useState} from 'react';
import { ProduceImageWithBG, bg } from "./images_production";

const white: React.ReactNode[] = [];
const gray: React.ReactNode[] = [];
const gray2: React.ReactNode[] = [];
const red: React.ReactNode[] = [];
const red2: React.ReactNode[] = [];
const blue: React.ReactNode[] = [];
const blue2: React.ReactNode[] = [];
const stone: React.ReactNode[] = [];
const stone2: React.ReactNode[] = [];
const yellow: React.ReactNode[] = [];
const yellow2: React.ReactNode[] = [];
const amber: React.ReactNode[] = [];
const amber2: React.ReactNode[] = [];
const lime: React.ReactNode[] = [];
const lime2: React.ReactNode[] = [];
const green: React.ReactNode[] = [];
const green2: React.ReactNode[] = [];
let flex_w = 1, flex_g = 1 , flex_g2 = 1, flex_r = 1, flex_r2 = 1 , flex_b = 1, flex_b2 = 1, flex_s = 1, flex_s2 = 1,
    flex_y = 1, flex_y2 = 1, flex_a = 1, flex_a2 = 1 , flex_l = 1 , flex_l2 = 1 , flex_gr = 1 , flex_gr2 = 1;
    
//ALL OF THE ELEMENTS HAVE A LOADING STATE AND 
//USEEFFECT has setTimeOut for asynchronous purposes
export function White(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //white
       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_w}`;
        flex_w+= 1;
        console.log(i);
        let background_colour = bg[0];
        let Items = ProduceImageWithBG(background_colour);
        white.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      setLoading(false);
      }
    }, 1)
  }, [])
  return (
    <div id="bg-white" className="hidden">{loading? '': white}</div>
  )
}
export function Gray(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //b4 png
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_g}`;
        flex_g+= 1;
        let background_colour = bg[1];
        let Items = ProduceImageWithBG(background_colour);
        gray.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="bg-gray-500" className="hidden">{loading? '' : gray}</div>
  )
}
export function Gray2(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //gray950
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_g2}`;
        flex_g2+= 1;
        let background_colour = bg[2];
        let Items = ProduceImageWithBG(background_colour);
        gray2.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="bg-gray-950" className="hidden">{loading? '' : gray2}</div>
  )
}
export function Red(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //red
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_r}`;
        flex_r+= 1;
        let background_colour = bg[3];
        let Items = ProduceImageWithBG(background_colour);
        red.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="bg-red-500" className="hidden">{loading? '' : red}</div>
  )
}
export function Red2(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //red950
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_r2}`;
        flex_r2+= 1;
        let background_colour = bg[4];
        let Items = ProduceImageWithBG(background_colour);
        red2.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="bg-red-950" className="hidden">{loading? '' : red2}</div>
  )
}
export function Blue(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //blue
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_b}`;
        flex_b+= 1;
        let background_colour = bg[5];
        let Items = ProduceImageWithBG(background_colour);
        blue.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="bg-blue-500" className="hidden">{loading? '' : blue}</div>
  )
}
export function Blue2(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //blue950
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_b2}`;
        flex_b2+= 1;
        let background_colour = bg[6];
        let Items = ProduceImageWithBG(background_colour);
        blue2.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="bg-blue-950" className="hidden">{loading? '' : blue2}</div>
  )
}
export function Stone(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //stone
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_s}`;
        flex_s+= 1;
        let background_colour = bg[7];
        let Items = ProduceImageWithBG(background_colour);
        stone.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="bg-stone-500" className="hidden">{loading? '' : stone}</div>
  )
}
export function Stone2(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //stone950
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_s2}`;
        flex_s2+= 1;
        let background_colour = bg[8];
        let Items = ProduceImageWithBG(background_colour);
        stone2.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="bg-stone-950" className="hidden">{loading? '' : stone2}</div>
  )
}
export function Yellow(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //yellow
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_y}`;
        flex_y+= 1;
        let background_colour = bg[9];
        let Items = ProduceImageWithBG(background_colour);
        yellow.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="bg-yellow-500" className="hidden">{loading? '' : yellow}</div>
  )
}
export function Yellow2(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //yellow950
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_y2}`;
        flex_y2+= 1;
        let background_colour = bg[10];
        let Items = ProduceImageWithBG(background_colour);
        yellow2.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="bg-yellow-950" className="hidden">{loading? '' : yellow2}</div>
  )
}
export function Amber(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //amber
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_a}`;
        flex_a += 1;
        let background_colour = bg[11];
        let Items = ProduceImageWithBG(background_colour);
        amber.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="bg-amber-500" className="hidden">{loading? '' : amber}</div>
  )
}
export function Amber2(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //amber950
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_a2}`;
        flex_a2 += 1;
        let background_colour = bg[12];
        let Items = ProduceImageWithBG(background_colour);
        amber2.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false)
    }, 1)
  }, [])
  return (
    <div id="bg-amber-950" className="hidden">{loading? "" : amber2}</div>
  )
}
export function Lime(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //lime
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_l}`;
        flex_l += 1;
        let background_colour = bg[13];
        let Items = ProduceImageWithBG(background_colour);
        lime.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false)
    }, 1)
  }, [])
  return (
    <div id="bg-lime-500" className="hidden">{loading? "" : lime}</div>
  )
}
export function Lime2(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //lime950
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_l2}`;
        flex_l2 += 1;
        let background_colour = bg[14];
        let Items = ProduceImageWithBG(background_colour);
        lime2.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false)
    }, 1)
  }, [])
  return (
    <div id="bg-lime-950" className="hidden">{loading? "" : lime2}</div>
  )
}
export function Green(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //green
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_gr}`;
        flex_gr += 1;
        let background_colour = bg[15];
        let Items = ProduceImageWithBG(background_colour);
        green.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false)
    }, 1)
  }, [])
  return (
    <div id="bg-green-500"className="hidden">{loading? "" : green}</div>
  )
}
export function Green2(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //green950
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_gr2}`;
        flex_gr2 += 1;
        let background_colour = bg[16];
        let Items = ProduceImageWithBG(background_colour);
        green2.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false)
    }, 1)
  }, [])
  return (
    <div id="bg-green-950"className="hidden">{loading? "" : green2}</div>
    
  )
}
