import { useEffect, useState } from "react"
import Image from "next/image";
import ImageBox, { setValue } from "./setValue";
import NavBar from "./navbar";
import anime from "animejs";

const items: React.ReactNode[] = [];
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
let flex = 1, flex_w = 1, flex_g = 1 , flex_g2 = 1, flex_r = 1, flex_r2 = 1 , flex_b = 1, flex_b2 = 1, flex_s = 1, flex_s2 = 1,
    flex_y = 1, flex_y2 = 1, flex_a = 1, flex_a2 = 1 , flex_l = 1 , flex_l2 = 1 , flex_gr = 1 , flex_gr2 = 1;
let img = 1;

let b1: React.ReactNode[] = [];
let b2: React.ReactNode[] = [];
let b3: React.ReactNode[] = [];
let b4: React.ReactNode[] = [];
let b6: React.ReactNode[] = [];
let b7: React.ReactNode[] = [];
let b8: React.ReactNode[] = [];
let b9: React.ReactNode[] = [];
let b10: React.ReactNode[] = [];
let w1: React.ReactNode[] = [];
let w2: React.ReactNode[] = [];
let w3: React.ReactNode[] = [];
let w4: React.ReactNode[] = [];
let w5: React.ReactNode[] = [];
let w6: React.ReactNode[] = [];
let a1: React.ReactNode[] = [];
let a2: React.ReactNode[] = [];
let a3: React.ReactNode[] = [];
let a4: React.ReactNode[] = [];
let flexB1 = 1, flexB2 = 1, flexB3 = 1, flexB4 = 1 , flexB6 = 1 , flexB7 = 1 , flexB8 = 1 , flexB9 = 1, flexB10 = 1,
flexW1 = 1 , flexW2 = 1 , flexW3 = 1, flexW4 = 1 , flexW5 = 1 , flexW6 = 1 , flexA1 = 1 , flexA2 = 1 , flexA3 = 1 , flexA4 = 1;

let left: React.ReactNode[] = [];
let right: React.ReactNode[] = [];
let center: React.ReactNode[] = [];
let flexLeft = 1 , flexRight = 1, flexCenter = 1;
let images = ['/w1.png' , '/w2.png' , '/a1.png' , '/a2.png' , '/a3.png' , '/a4.png',  '/w3.png' , '/w4.png' , '/w5.png', '/w6.png', '/b1.png',
 '/b2.png', '/b3.png', '/b4.png', '/b6.png', '/b7.png', '/b8.png', '/b9.png', '/b10.png'];

 let bg = ['bg-white' , 'bg-gray-500' ,  'bg-gray-950' , 'bg-red-500' , 'bg-red-950' , 'bg-blue-500' , 'bg-blue-950' , 'bg-stone-500' , 'bg-stone-950' , 
 'bg-yellow-500' ,'bg-yellow-950' , 'bg-amber-500' , 'bg-amber-950' , 'bg-lime-500' , 'bg-lime-950' , 'bg-green-500' , 'bg-green-950'];
let imgClass = 'cursor-pointer rounded-md lg:w-[176px] lg:h-[176px] md:w-[156px] md:h-[156px] h-[128px] w-[128px] m-[3px] bg-cover z-100';

function ProduceImageRandom(){
  let arr = [];
  for(var i = 0; i<30; i++){
    let _index:number = Math.floor(Math.random() * images.length);
    let img_id = 'grid_' + img;
    img += 1;
    arr.push(<Image src={images[_index]} key={img_id} id={img_id} alt="pic" width={200} height={200}  onClick={()=>{setValue( img_id , images[_index] , bg[_index] ); }}  className={`${imgClass} ${bg[_index]}`} priority={true}/>
    )
  }
  return arr;
}
function ProduceImageWithBG(bg_color:string){
  let arr = [];
  for(var i = 0; i<30; i++){
    let _index:number = Math.floor(Math.random() * images.length);
    let img_id = 'grid_' + img;
    img += 1;
    arr.push(<Image src={images[_index]} key={img_id} id={img_id} alt="pic" width={200} height={200}  onClick={()=>{setValue( img_id , images[_index], bg_color ); }}  className={`${imgClass} ${bg_color}`} priority={true} />)
  }
  return arr;
}
function ProduceImageWithSrc(src: string){
  let arr = [];
  for(var i = 0; i<30; i++){
    let _index:number = Math.floor(Math.random() * images.length);
    let img_id = 'grid_' + img;
    img += 1;
    arr.push(<Image src={src} key={img_id} id={img_id} alt="pic" width={200} height={200}  onClick={()=>{setValue( img_id , src, bg[_index] ); }}  className={`${imgClass} ${bg[_index]}`} priority={true} />)
  }
  return arr;
}
function ProduceImageWithDirection(images_: string[]){
  let arr = [];
  for(var i = 0; i<30; i++){
    let _index:number = Math.floor(Math.random() * bg.length);
    let _indexImg:number = Math.floor(Math.random() * images_.length);
    let img_id = 'grid_' + img;
    img += 1;
    arr.push(
      <Image src={images_[_indexImg]} key={img_id} id={img_id} alt="pic" width={20} height={200}  onClick={()=>{setValue( img_id , images_[_indexImg], bg[_index] ); }}  className={`${imgClass} ${bg[_index]}`} priority={true} />
    )
  }
  return arr;
}
export default function AllDogs(){
  let [loading , setLoading] = useState(true);
    useEffect(()=>{
      document.getElementById('loading')!.style.display = 'block'
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
      //white
      flex_w = 0;
      let promise = new Promise((resolve, reject)=>{

       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_w}`;
        flex_w+= 1;
        let background_colour = bg[0];
        let Items = ProduceImageWithBG(background_colour);
        white.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      //gray
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
      
      //green
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_g}`;
        flex_g += 1;
        let background_colour = bg[15];
        let Items = ProduceImageWithBG(background_colour);
        green.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      
      //green950
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flex_g2}`;
        flex_g2 += 1;
        let background_colour = bg[16];
        let Items = ProduceImageWithBG(background_colour);
        green2.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //b1 png
       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexB1}`;
        flexB1 += 1;
        let src = '/b1.png';
        let Items = ProduceImageWithSrc(src);
        b1.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //b2 png
       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexB2}`;
        flexB2 += 1;
        let src = '/b2.png';
        let Items = ProduceImageWithSrc(src);
        b2.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //b3 png
       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexB3}`;
        flexB3 += 1;
        let src = '/b3.png';
        let Items = ProduceImageWithSrc(src);
        b3.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //b4 png
       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexB4}`;
        flexB4 += 1;
        let src = '/b4.png';
        let Items = ProduceImageWithSrc(src);
        b4.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //b6 png
       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexB6}`;
        flexB6 += 1;
        let src = '/b6.png';
        let Items = ProduceImageWithSrc(src);
        b6.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //b7 png
       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexB7}`;
        flexB7 += 1;
        let src = '/b7.png';
        let Items = ProduceImageWithSrc(src);
        b7.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //b8 png
       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexB8}`;
        flexB8 += 1;
        let src = '/b8.png';
        let Items = ProduceImageWithSrc(src);
        b8.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //b9 png
       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexB9}`;
        flexB9 += 1;
        let src = '/b9.png';
        let Items = ProduceImageWithSrc(src);
        b9.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //b10 png
       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexB10}`;
        flexB10 += 1;
        let src = '/b10.png';
        let Items = ProduceImageWithSrc(src);
        b10.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //w1 png
       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexW1}`;
        flexW1 += 1;
        let src = '/w1.png';
        let Items = ProduceImageWithSrc(src);
        w1.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //w2 png
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexW2}`;
        flexW2 += 1;
        let src = '/w2.png';
        let Items = ProduceImageWithSrc(src);
        w2.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
        

      //w3 png
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexW3}`;
        flexW3 += 1;
        let src = '/w3.png';
        let Items = ProduceImageWithSrc(src);
        w3.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //w4 png
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexW4}`;
        flexW4 += 1;
        let src = '/w4.png';
        let Items = ProduceImageWithSrc(src);
        w4.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //w5 png
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexW5}`;
        flexW5 += 1;
        let src = '/w5.png';
        let Items = ProduceImageWithSrc(src);
        w5.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //w6 png
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexW6}`;
        flexW6 += 1;
        let src = '/w6.png';
        let Items = ProduceImageWithSrc(src);
        w6.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //a1 png
      for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexA1}`;
        flexA1 += 1;
        let src = '/a1.png';
        let Items = ProduceImageWithSrc(src);
        a1.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //a2 png
       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexA2}`;
        flexA2 += 1;
        let src = '/a2.png';
        let Items = ProduceImageWithSrc(src);
        a2.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //a3 png
       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexA3}`;
        flexA3 += 1;
        let src = '/a3.png';
        let Items = ProduceImageWithSrc(src);
        a3.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //a4 png
       for(var i = 0; i<20; i++){
        let flex_id =  `flex_${flexA4}`;
        flexA4 += 1;
        let src = '/a4.png';
        let Items = ProduceImageWithSrc(src);
        a4.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }

      //right direction
      let rightImg = ['/a2.png' , '/a3.png' , '/b1.png' , '/w2.png']
      for(var i = 0; i<40; i++){
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
      for(var i = 0; i<40; i++){
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
      for(var i = 0; i<40; i++){
        let flex_id =  `flex_${flexCenter}`;
        flexCenter += 1;
        let Items = ProduceImageWithDirection(centerImg);
        center.push(
          <div id={flex_id} key={flex_id} className="flex flex-row w-fit">
            {Items}
          </div>
        )
      }
      resolve("DONE");
    })
    promise.then(()=>{
      document.getElementById('loading')!.style.display = 'none';
      setLoading(false);
    })

    }, [])

    useEffect(()=>{
      anime({
        targets: ['#first_circle' , '#second_circle'],
        scale: 1,
        loop:false,
        duration: 1500,
        delay: 100,
        easing: 'easeInOutQuad',
        opacity: 1,
        autoplay: true,
        changeBegin: ()=>{
          document.getElementById('first_circle')!.style.backgroundColor = 'black'
          document.getElementById('second_circle')!.style.backgroundColor = 'black'
        },
        complete: ()=>{
          document.getElementById('blue')!.style.display = 'none';
          document.getElementById('top')!.style.opacity = '1';
          document.getElementById('text')!.style.opacity = '1';
          document.getElementById('navbar')!.style.opacity = '1';
        }
    });
    document.getElementById('flex_14')?.scrollIntoView({behavior:'smooth' , block: 'center'});

    }, [])
    return (
    <div id="container" className="bg-black w-full h-fit max-w-full overflow-x-hidden" style={{width:'100%'}}>
      
      <div id="loading" className="w-[80vh] md:w-[160vh] lg:w-[200vh] h-[100vh] "></div>
      {loading? '' : 
      <>
        <div id="items" className="">
          <div id="all_items" className="">{items} </div>
          <div id="bg-white" className="hidden">{white}</div>
          <div id="bg-gray-500" className="hidden">{gray}</div>
          <div id="bg-gray-950" className="hidden">{gray2}</div>
          <div id="bg-red-500" className="hidden">{red}</div>
          <div id="bg-red-950" className="hidden">{red2}</div>
          <div id="bg-blue-500" className="hidden">{blue}</div>
          <div id="bg-blue-950" className="hidden">{blue2}</div>
          <div id="bg-stone-500" className="hidden">{stone}</div>
          <div id="bg-stone-950" className="hidden">{stone2}</div>
          <div id="bg-yellow-500" className="hidden">{yellow}</div>
          <div id="bg-yellow-950" className="hidden">{yellow2}</div>
          <div id="bg-amber-500" className="hidden">{amber}</div>
          <div id="bg-amber-950" className="hidden">{amber2}</div>
          <div id="bg-lime-500" className="hidden">{lime}</div>
          <div id="bg-lime-950" className="hidden">{lime2}</div>
          <div id="bg-green-500"className="hidden">{green}</div>
          <div id="bg-green-950"className="hidden">{green2}</div>


          <div id="a1.png" className="hidden">{a1}</div>
          <div id="a2.png" className="hidden">{a2}</div>
          <div id="a3.png" className="hidden">{a3}</div>
          <div id="a4.png" className="hidden">{a4}</div>
          <div id="b1.png" className="hidden">{b1}</div>
          <div id="b2.png" className="hidden">{b2}</div>
          <div id="b3.png" className="hidden">{b3}</div>
          <div id="b4.png" className="hidden">{b4}</div>
          <div id="b6.png" className="hidden">{b6}</div>
          <div id="b7.png" className="hidden">{b7}</div>
          <div id="b8.png" className="hidden">{b8}</div>
          <div id="b9.png" className="hidden">{b9}</div>
          <div id="w1.png" className="hidden">{w1}</div>
          <div id="w2.png" className="hidden">{w2}</div>
          <div id="w3.png" className="hidden">{w3}</div>
          <div id="w4.png" className="hidden">{w4}</div>
          <div id="w5.png" className="hidden">{w5}</div>
          <div id="w6.png" className="hidden">{w6}</div>
          <div id="b10.png" className="hidden">{b10}</div>

          
          <div id="left" className="hidden">{left}</div>
          <div id="right" className="hidden">{right}</div>
          <div id="center" className="hidden">{center}</div>
        </div>
      </>
      }
      <ImageBox />
      <NavBar />
      <div id="text" className='fixed top-16 md:left-[4.5rem] opacity-0 left-[4rem] font-extrabold text-white z-40 md:text-7xl text-4xl'> Fluffy Hugs</div>
      <div id="top" className="z-30 fixed right-[6rem] top-28 opacity-0 border-white border-2 rounded-full cursor-pointer hover:bg-black/95 px-8 py-2" onClick={animate}>Top</div>
      <div id="blue" className="z-100 fixed right-0 bottom-0 cursor-pointer">
          <div id="first_circle" className="two_circles  absolute opacity-1 -bottom-5 -right-3 w-32 h-32 rotate-[40deg]" style={{borderRadius:'4rem 4rem 0 0',transform:'scale(35)'}}></div>
          <div id="second_circle" className="two_circles absolute opacity-1 -bottom-7 right-20 w-24 h-24 rotate-3" style={{borderRadius:'5rem 4rem 0 5rem',transform:'scale(35)'}}></div>
      </div>
    </div>
    )
}

let flex_array = ['#flex_1', '#flex_3', '#flex_5' , '#flex_7' , '#flex_9' , '#flex_11' , '#flex_13', '#flex_15' ,' #flex_17' , '#flex_19'
  ,'#flex_21', '#flex_23', '#flex_25' , '#flex_27' , '#flex_29', '#flex_31', '#flex_33', '#flex_35' , '#flex_37 ', '#flex_39',
  '#flex_41', '#flex_43', '#flex_45' ,' #flex_47' , '#flex_49']
function animate(){
  anime({
      targets: ['#first_circle' , '#second_circle'],
      scale: 35,
      loop:false,
      duration: 700,
      easing: 'easeInOutQuad',
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
}