import anime, { AnimeInstance } from "animejs";
import { useEffect, useState } from "react";

let reappear: AnimeInstance;              //animation for pop up
let disappear: AnimeInstance;             //animation for pop up
let scale_up: AnimeInstance;              //main scale up in pop up
let scale_up_disappear: AnimeInstance;    //for the clicked one
let move_left: AnimeInstance;             //to move left
let move_right: AnimeInstance;            //to move right
let slight_move_left: AnimeInstance;      //for flex_rows
let main_id:string;
let bg_color:string;
let first_array: string[];
let second_array: string[];
//Image pop up box which data will be set before displaying
export default function ImageBox(){
  let animated = false;
  useEffect(()=>{
    reappear = anime({
      targets: '#containment',
      opacity: 1,
      duration: 100,
      complete: ()=>{
        document.getElementById('containment')!.style.display = 'block';
      },
      autoplay: false
    });
    disappear = anime({
      targets: '#containment',
      opacity: 0,
      duration: 100,
      complete: ()=>{
        document.getElementById('containment')!.style.display = 'none';
        document.body!.style.scrollBehavior = 'auto';
      },
      autoplay: false
    });
  }, [])
  
  function exitImageView(){
    let custom_image = document.getElementById('custom_img')!;
    document.getElementById(main_id)!.style.opacity = '1';
    scale_up.reverse();
    scale_up.restart();

    move_left.reverse();
    move_right.reverse();

    scale_up_disappear.reverse();
    scale_up_disappear.restart();


    setTimeout(()=>{
      disappear.restart();
      move_left.restart();
      move_right.restart();
      custom_image.classList.remove(bg_color);
    }, 500)
  }

  return(
    <>
    <div id="containment" className="hidden fixed overflow-y-hidden bg-black/50 cursor-pointer w-[100%] h-[100%] top-0 left-0 md:py-20 py-0 px-10 z-50" onClick={exitImageView} onSelect={(e)=>{e.preventDefault()}}>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
        <img src='/w1.png' id="custom_img" className="col-span-2 block cursor-pointer rounded-lg w-[30vh] h-[30vh] mx-auto mt-[9.5vh] ml-[27vh]"/>

        <div className="w-5/6 h-full col-span-2 md:mt-0 mt-72">
          <h1 id="name" className="text-left text-3xl p-4 mb-10 ">FluffyHugs #ID</h1>
          <div className="grid grid-cols-2 gap-2 overflow-scroll">
            
            <div className="flex flex-col">
              <div className="w-full h-24 px-7 py-3 m-5 rounded-lg bg-[#a3a3a33b] leading-8 text-center">
                <h2 id="d1" className="text-sm text-gray-300 py-1">Hello</h2>
                <h2 id="d1_val" className="text-lg py-1">Lorem Ipusm</h2>
              </div>
              <div className="w-full h-24 px-7 py-3 m-5 rounded-lg bg-[#a3a3a33b] leading-8 text-center">
                <h2 id="d2" className="text-sm text-gray-300 py-1">Hello</h2>
                <h2 id="d2_val" className="text-lg py-1">Lorem Ipusm</h2>
              </div>
              <div className="w-full h-24 px-7 py-3 m-5 rounded-lg bg-[#a3a3a33b] leading-8 text-center">
                <h2 id="d3" className="text-sm text-gray-300 py-1">Hello</h2>
                <h2 id="d3_val" className="text-lg py-1">Lorem Ipusm</h2>
              </div>
              <div className="w-full h-24 px-7 py-3 m-5 rounded-lg bg-[#a3a3a33b] leading-8 text-center">
                <h2 id="d8" className="text-sm text-gray-300 py-1">Hello</h2>
                <h2 id="d8_val" className="text-lg py-1">Lorem Ipusm</h2>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="w-full h-24 px-7 py-3 m-5 rounded-lg bg-[#d8d8d825] leading-8 text-center">
                <h2 id="d4" className="text-sm text-gray-300 py-1">Hello</h2>
                <h2 id="d4_val" className="text-lg py-1">Lorem Ipusm</h2>
              </div>
              <div className="w-full h-24 px-7 py-3 m-5 rounded-lg bg-[#d8d8d825] leading-8 text-center">
                <h2 id="d5" className="text-sm text-gray-300 py-1">Hello</h2>
                <h2 id="d5_val" className="text-lg py-1">Lorem Ipusm</h2>
              </div>
              <div className="w-full h-24 px-7 py-3 m-5 rounded-lg bg-[#d8d8d825] leading-8 text-center">
                <h2 id="d6" className="text-sm text-gray-300 py-1">Hello</h2>
                <h2 id="d6_val" className="text-lg py-1">Lorem Ipusm</h2>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}
//type for input
type props = {d_1:string , d_2:string , d_3:string , d_4: string, d_5: string, d_6: string, d_1_val:string , d_2_val:string , d_3_val:string , d_4_val: string, d_5_val: string, d_6_val: string,}
export function setValue( gridID:string , imgPath:string, bg:string ,data?: props ){

  let {offsetLeft , offsetTop, parentElement } = document.getElementById(gridID)!
  console.log(offsetLeft , gridID);
  document.getElementById(gridID)!.scrollIntoView({behavior: 'smooth', block: 'center'});
  bg_color = bg;
  slight_move_left = anime({
    targets: `#items`,
    translateX: offsetLeft - (offsetLeft * 2) + 250,
    delay: anime.stagger(100),
    duration: 400,
    easing: 'easeInOutQuad',
  })
  let custom_image = document.getElementById('custom_img')!;
  custom_image.setAttribute('src', imgPath);
  custom_image.classList.add(bg_color);
    AddAnimation(gridID );

    if(data){
        //setting DATA, if you wants to:)
      document.getElementById('d_1')!.innerText = data.d_1;
      document.getElementById('d_2')!.innerText = data.d_2;
      document.getElementById('d_3')!.innerText = data.d_3;
      document.getElementById('d_4')!.innerText = data.d_4;
      document.getElementById('d_5')!.innerText = data.d_5;
      document.getElementById('d_6')!.innerText = data.d_6;
      document.getElementById('d_1_val')!.innerText = data.d_1_val;
      document.getElementById('d_2_val')!.innerText = data.d_2_val;
      document.getElementById('d_3_val')!.innerText = data.d_3_val;
      document.getElementById('d_4_val')!.innerText = data.d_4_val;
      document.getElementById('d_5_val')!.innerText = data.d_5_val;
      document.getElementById('d_6_val')!.innerText = data.d_6_val;
    }
  }


function AddAnimation(id: string ){
  let ids = Number(id.split('_')[1]);
  first_array = [`#grid_${ids+1}` ,`#grid_${ids+2}` ,`#grid_${ids+3}` ,`#grid_${ids+4}` ,`#grid_${ids+5}` ,`#grid_${ids+6}`];
  second_array = [`#grid_${ids-1}`,`#grid_${ids+28}`,`#grid_${ids+29}`,`#grid_${ids+30}` ,`#grid_${ids+31}`,`#grid_${ids-29}`,`#grid_${ids-30}`, `#grid_${ids-31}`,  `#grid_${ids-32}` ] 
  console.log(first_array , second_array)
  main_id = id;
  setTimeout(()=>{
    reappear.restart()
  }, 500)
  scale_up_disappear = anime({
    targets: `#${main_id}`,
    scale: 2.3,
    rotate: -15,
    delay: 250,
    duration: 800,
    autoplay: true,
  })
  move_right = anime({
    targets: first_array,
    translateX: '27vh',
    duration: 700,
    delay: 100,
    autoplay: true,
  })
  move_left = anime({
    targets: second_array,
    translateX: '-81vh',
    duration: 700,
    delay: 100,
    autoplay: true,
  });

  scale_up = anime({
    targets: `#custom_img`,
    scale: 2 , 
    translateY : '7.3vh',
    translateX: '.5vh',
    rotate: -15,
    duration: 800,
    delay: 200,
    begin: ()=>{
      document.getElementById('custom_img')!.style.opacity = '1';
    },
    complete: ()=>{
      document.body!.style.scrollBehavior = 'hidden';
    }
  })
  // 33 |34 |35| 36| 35 34 33
  // 53 |54 |55| 56| 55 54 53
  // 73 |74 |75| 76| 75 74 73
}