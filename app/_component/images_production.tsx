let images = ['/w1.png' , '/w2.png' , '/a1.png' , '/a2.png' , '/a3.png' , '/a4.png',  '/w3.png' , '/w4.png' , '/w5.png', '/w6.png', '/b1.png',
 '/b2.png', '/b3.png', '/b4.png', '/b6.png', '/b7.png', '/b8.png', '/b9.png', '/b10.png'];
 let img = 1;
export let bg = ['bg-white' , 'bg-gray-500' ,  'bg-gray-950' , 'bg-red-500' , 'bg-red-950' , 'bg-blue-500' , 'bg-blue-950' , 'bg-stone-500' , 'bg-stone-950' , 
 'bg-yellow-500' ,'bg-yellow-950' , 'bg-amber-500' , 'bg-amber-950' , 'bg-lime-500' , 'bg-lime-950' , 'bg-green-500' , 'bg-green-950'];
let imgClass = 'cursor-pointer rounded-md lg:w-[176px] lg:h-[176px] md:w-[156px] md:h-[156px] h-[128px] w-[128px] m-[3px] bg-cover z-100';
import Image from "next/image";
import { setValue } from "./setValue";

//custom function for image production with random bg colour && src to reduce duplication
export function ProduceImageRandom(){
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
//custom function for image production with random bg colour to reduce duplication
export function ProduceImageWithBG(bg_color:string){
  let arr = [];
  for(var i = 0; i<30; i++){
    let _index:number = Math.floor(Math.random() * images.length);
    let img_id = 'grid_' + img;
    img += 1;
    arr.push(<Image src={images[_index]} key={img_id} id={img_id} alt="pic" width={200} height={200}  onClick={()=>{setValue( img_id , images[_index], bg_color ); }}  className={`${imgClass} ${bg_color}`} priority={true} />)
  }
  return arr;
}
//custom function for image production with SRC && random bg colour to reduce duplication
export function ProduceImageWithSrc(src: string){
  let arr = [];
  for(var i = 0; i<30; i++){
    let _index:number = Math.floor(Math.random() * images.length);
    let img_id = 'grid_' + img;
    img += 1;
    arr.push(<Image src={src} key={img_id} id={img_id} alt="pic" width={200} height={200}  onClick={()=>{setValue( img_id , src, bg[_index] ); }}  className={`${imgClass} ${bg[_index]}`} priority={true} />)
  }
  return arr;
}
//custom function for image production with direction to reduce duplication
export function ProduceImageWithDirection(images_: string[]){
  let arr = [];
  for(var i = 0; i<30; i++){
    let _index:number = Math.floor(Math.random() * bg.length);
    let _indexImg:number = Math.floor(Math.random() * images_.length);
    let img_id = 'grid_' + img;
    img += 1;
    arr.push(
      <Image src={images_[_indexImg]} key={img_id} id={img_id} alt="pic" width={200} height={200}  onClick={()=>{setValue( img_id , images_[_indexImg], bg[_index] ); }}  className={`${imgClass} ${bg[_index]}`} priority={true} />
    )
  }
  return arr;
}


