import { useEffect, useState } from "react"
import { ProduceImageRandom, ProduceImageWithDirection , bg } from "./images_production";
import dynamic from "next/dynamic";

const items: React.ReactNode[] = [];

let flex = 1

let left: React.ReactNode[] = [];
let right: React.ReactNode[] = [];
let center: React.ReactNode[] = [];
let flexLeft = 1 , flexRight = 1, flexCenter = 1;
//all of the elements are code splitted for performance purposes
const A1 = dynamic(() => import("./animals")
  .then((mods)=>mods.A1), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const A2 = dynamic(() => import("./animals")
  .then((mods)=>mods.A2), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const A3 = dynamic(() => import("./animals")
  .then((mods)=>mods.A3), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const A4 = dynamic(() => import("./animals")
  .then((mods)=>mods.A4), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const W1 = dynamic(() => import("./animals")
  .then((mods)=>mods.W1), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const W2 = dynamic(() => import("./animals")
  .then((mods)=>mods.W2), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const W3 = dynamic(() => import("./animals")
  .then((mods)=>mods.W3), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const W4 = dynamic(() => import("./animals")
  .then((mods)=>mods.W4), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const W5 = dynamic(() => import("./animals")
  .then((mods)=>mods.W5), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const W6 = dynamic(() => import("./animals")
  .then((mods)=>mods.W6), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const B1 = dynamic(() => import("./animals")
  .then((mods)=>mods.B1), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const B2 = dynamic(() => import("./animals")
  .then((mods)=>mods.B2), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const B3 = dynamic(() => import("./animals")
  .then((mods)=>mods.B3), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const B4 = dynamic(() => import("./animals")
  .then((mods)=>mods.B4), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const B6 = dynamic(() => import("./animals")
  .then((mods)=>mods.B6), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const B7 = dynamic(() => import("./animals")
  .then((mods)=>mods.B7), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const B8 = dynamic(() => import("./animals")
  .then((mods)=>mods.B8), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const B9 = dynamic(() => import("./animals")
  .then((mods)=>mods.B9), {
    ssr: false,
  loading: () => <p>Loading...</p>
});
const B10 = dynamic(() => import("./animals")
  .then((mods)=>mods.B10), {
    ssr: false,
  loading: () => <p>Loading...</p>
});

const White = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.White),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Amber = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Amber),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Amber2 = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Amber2),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Blue = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Blue),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Blue2 = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Blue2),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Gray = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Gray),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Gray2 = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Gray2),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Green = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Green),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Green2 = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Green2),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Lime = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Lime),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Lime2 = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Lime2),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Red = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Red),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Red2 = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Red2),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Stone = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Stone),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Stone2 = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Stone2),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Yellow = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Yellow),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
const Yellow2 = dynamic(() => import("./bg_colors")
  .then((mods)=>mods.Yellow2),{
    ssr: false,
    loading: () => <p>Loading...</p>
});
export default function AllDogs(){
  let [loading , setLoading] = useState(true);
    useEffect(()=>{
      //only the first thing to be shown here are loaded
       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex}`;
        flex+= 1;
        let Items = ProduceImageRandom();
        items.push(
          <div id={flex_id} key={flex_id} className="flex flex-row ">
              {Items}
          </div>
        )
      }
      setTimeout(()=>{

      //right direction
      let rightImg = ['/a2.png' , '/a3.png' , '/b1.png' , '/w2.png']
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexRight}`;
        flexRight += 1;
        let Items = ProduceImageWithDirection(rightImg);
        right.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //left direction
      let leftImg = ['/b2.png' , '/b3.png' , '/b6.png' , '/b7.png', '/b8.png' , '/b9.png' , '/b10.png' ,'/w1.png' , '/w6.png']
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexLeft}`;
        flexLeft += 1;
        let Items = ProduceImageWithDirection(leftImg);
        left.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //center direction
      let centerImg = ['/a1.png','/b4.png','/w3.png','/w4.png','/w5.png'];
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexCenter}`;
        flexCenter += 1;
        let Items = ProduceImageWithDirection(centerImg);
        center.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      setLoading(false);
      }, 0)
    }, [])

    return (
    <div id="container" className="bg-black w-full h-fit max-w-full overflow-x-hidden" style={{width:'100%'}}>
    
      {loading?
          <div id="loading" className="lg:w-[200vh] md:w-[150vh] w-[70vh] h-[100vh] md:left-0 -left-20 top-0 bg-white" ></div>
        : 
      <>
        <div id="items" className="opacity-50">
          <div id="all_items">{items}</div>
          <White />
          <Amber /> <Amber2 />
          <Lime /> <Lime2 />
          <Green /> <Green2 />
          <Yellow /> <Yellow2 />
          <Stone /> <Stone2 />
          <Red /> <Red2 />
          <Blue /> <Blue2 />
          <Gray /> <Gray2 />
        
          <A1 /><A2 />
          <A3 /><A4 />
          <W1 /><W2 />
          <W3 /><W4 />
          <W5 /><W6 />
          <B1 /><B2 />
          <B3 /><B4 />
          <B6 /><B7 />
          <B8 /><B9 />
          <B10 />
          <div id="left">
            {left}
          </div> 
          <div id="right">
            {right}
          </div>
          <div id="center">
            {center}
          </div>  
        </div>
      </>
      }
      
    </div>
    )
}

