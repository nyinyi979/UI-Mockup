import anime, { AnimeInstance } from "animejs";
import { useEffect, useState } from "react";

let reappear: AnimeInstance;              //animation for pop up
let disappear: AnimeInstance;             //animation for pop up
let scale_up: AnimeInstance;              //main scale up in pop up
let scale_up_disappear: AnimeInstance;    //for the clicked one
let move_left_f: AnimeInstance;             //to move left
let move_right_f: AnimeInstance;            //to move right
let move_left_s: AnimeInstance;             //to move left
let move_right_s: AnimeInstance;            //to move right
let scroll_top_left: AnimeInstance;
let main_id:string;
let bg_color:string;
let first_array_l:string[];
let second_array_l:string[];
let first_array_r:string[];
let second_array_r:string[];

let scrollPoint: number;
//Image pop up box which data will be set before displaying
export default function ImageBox(){
  let animated = false;
  useEffect(()=>{
    reappear = anime({
      targets: '#overlay',
      opacity: 1,
      duration: 100,
      complete: ()=>{
        document.getElementById('overlay')!.style.display = 'block';
      },
      autoplay: false
    });
    disappear = anime({
      targets: '#overlay',
      opacity: 0,
      duration: 100,
      complete: ()=>{
        document.getElementById('overlay')!.style.display = 'none';
        document.body!.style.scrollBehavior = 'auto';
      },
      autoplay: false
    });
  }, [])
  
  function exitImageView(){
    let custom_image = document.getElementById('custom_img')!;
    document.getElementById(main_id)!.style.opacity = '1';
    custom_image!.style.opacity = '0';

    disappear.restart();
    move_right_f.reverse();
    move_left_f.reverse();
    move_right_s.reverse();
    move_left_s.reverse();

    scale_up_disappear.reverse();
    scale_up_disappear.restart();

    move_left_f.restart();
    move_left_s.restart();
    move_right_f.restart();
    move_right_s.restart();
    setTimeout(()=>{
      custom_image.classList.remove(bg_color);
      document.getElementById('items')!.style.top = `${scrollPoint}`;
      document.getElementById('items')!.style.position = 'relative';
      window!.scrollTo({top:scrollPoint,behavior:'smooth'})
    }, 250)
  }

  return(
    <>
    <div id="overlay" className=" fixed bg-black/50 cursor-pointer w-[100%] h-[100%] top-0 left-0 lg:py-20 py-0 px-10 z-30" onClick={exitImageView} onSelect={(e)=>{e.preventDefault()}}>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-10">
        <img src='/w1.png' id="custom_img" className="col-span-2 block cursor-pointer rounded-lg lg:w-[176px] lg:h-[176px] md:w-[156px] md:h-[156px] h-[128px] w-[128px] mx-auto ml-[70px] mt-[22px]"/>

        <div className="w-full col-span-2 z-40">
          <h1 id="name" className="text-left w-full text-3xl p-2 lg:mt-0 mt-44">FluffyHugs #ID</h1>
          <div id="scroll" className="grid grid-cols-2 md:gap-2 gap-0 lg:h-full h-72 overflow-y-scroll overscroll-contain scrollbar scrollbar-w-1 scrollbar-thumb-rounded-sm scrollbar-thumb-sky-200 md:scrollbar-track-transparent pb-10">
            
            <div className="flex flex-col">
              <div className="w-11/12 lg:h-24 h-20 px-7 py-3 md:m-5 m-2 rounded-lg bg-[#a3a3a385] leading-8 text-center">
                <h2 id="d1" className="text-sm text-gray-300 py-1">Hello</h2>
                <h2 id="d1_val" className="lg:text-lg text-sm  py-1">Lorem Ipusm</h2>
              </div>
              <div className="w-11/12 lg:h-24 h-20 px-7 py-3 md:m-5 m-2 rounded-lg bg-[#a3a3a385] leading-8 text-center">
                <h2 id="d2" className="text-sm text-gray-300 py-1">Hello</h2>
                <h2 id="d2_val" className="lg:text-lg text-sm  py-1">Lorem Ipusm</h2>
              </div>
              <div className="w-11/12 lg:h-24 h-20 px-7 py-3 md:m-5 m-2 rounded-lg bg-[#a3a3a385] leading-8 text-center">
                <h2 id="d3" className="text-sm text-gray-300 py-1">Hello</h2>
                <h2 id="d3_val" className="lg:text-lg text-sm  py-1">Lorem Ipusm</h2>
              </div>
              <div className="w-11/12 lg:h-24 h-20 px-7 py-3 md:m-5 m-2 rounded-lg bg-[#a3a3a385] leading-8 text-center">
                <h2 id="d8" className="text-sm text-gray-300 py-1">Hello</h2>
                <h2 id="d8_val" className="lg:text-lg text-sm  py-1">Lorem Ipusm</h2>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="w-11/12 lg:h-24 h-20 px-7 py-3 md:m-5 m-2 rounded-lg bg-[#a3a3a385] leading-8 text-center">
                <h2 id="d4" className="text-sm text-gray-300 py-1">Hello</h2>
                <h2 id="d4_val" className="lg:text-lg text-sm py-1">Lorem Ipusm</h2>
              </div>
              <div className="w-11/12 lg:h-24 h-20 px-7 py-3 md:m-5 m-2 rounded-lg bg-[#a3a3a385] leading-8 text-center">
                <h2 id="d5" className="text-sm text-gray-300 py-1">Hello</h2>
                <h2 id="d5_val" className="lg:text-lg text-sm  py-1">Lorem Ipusm</h2>
              </div>
              <div className="w-11/12 lg:h-24 h-20 px-7 py-3 md:m-5 m-2 rounded-lg bg-[#a3a3a385] leading-8 text-center">
                <h2 id="d6" className="text-sm text-gray-300 py-1">Hello</h2>
                <h2 id="d6_val" className="lg:text-lg text-sm  py-1">Lorem Ipusm</h2>
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

  document.getElementById(gridID)!.scrollIntoView({behavior: 'smooth', block: 'center'});
  bg_color = bg;
  let custom_image = document.getElementById('custom_img')!;
  custom_image.setAttribute('src', imgPath);
  custom_image.classList.add(bg_color);
  console.log(window.innerWidth);
  setTimeout(()=>{
    if(window.innerWidth >= 1024) AddAnimation(gridID);
    else if(window.innerWidth >= 720 && window.innerWidth < 1024) AddAnimationMiddleScreen(gridID)
    else AddAnimationSmallScreen(gridID);
  }, 1)
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
  first_array_r = [`#grid_${ids-30}` ,`#grid_${ids-29}`,`#grid_${ids-28}`,`#grid_${ids-27}`,`#grid_${ids-26}`,`#grid_${ids-25}`]
  second_array_r = [`#grid_${ids+1}`,`#grid_${ids+2}`,`#grid_${ids+3}`,`#grid_${ids+4}`,`#grid_${ids+5}`,
  `#grid_${ids+31}`,`#grid_${ids+32}`,`#grid_${ids+33}`,`#grid_${ids+34}`,`#grid_${ids+35}`]
  first_array_l = [`#grid_${ids+30}`, `#grid_${ids+29}`, `#grid_${ids+28}`];
  second_array_l = [`#grid_${ids-1}`,`#grid_${ids-2}`,`#grid_${ids-3}`,`#grid_${ids-31}`,`#grid_${ids-32}`,`#grid_${ids-33}`]

  main_id = id;

  setTimeout(()=>{
    reappear.restart()
  }, 600)

  let { offsetLeft , parentElement } = document.getElementById(id)!
  let offsetTop = parentElement!.offsetTop
  document.getElementById(`grid_${ids+30}`)!.scrollIntoView({behavior: 'smooth', block: 'center'});
  document.getElementById('items')!.style.position = 'fixed';
  scrollPoint = offsetTop - (offsetTop * 2) + 260;

  //scrolling top and left
  scroll_top_left = anime({
    targets: `#items`,
    left: offsetLeft - (offsetLeft * 2) + 250,
    top: scrollPoint,
    delay: anime.stagger(100),
    duration: 400,
    easing: 'easeInOutQuad',
  })
  scale_up_disappear = anime({
    targets: `#${main_id}`,
    scale: 2,
    rotate: -15,
    delay: 150,
    duration: 500,
    autoplay: true,
    easing: 'linear'
  })

  move_right_f = anime({
    targets: first_array_r,
    translateX: 370,
    duration: 500,
    autoplay: true,
    easing: 'linear'
  })
  move_left_f = anime({
    targets: first_array_l,
    translateX: -365,
    duration: 500,
    autoplay: true,
    easing: 'linear'
  })
  move_right_s = anime({
    targets: second_array_r,
    translateX: 190,
    duration: 500,
    autoplay: true,
    easing: 'linear'
  })
  move_left_s = anime({
    targets: second_array_l,
    translateX: -185,
    duration: 500,
    autoplay: true,
    easing: 'linear'
  })
  scale_up = anime({
    targets: `#custom_img`,
    scale: 2, 
    translateY : 80,
    translateX: 69.6,
    rotate: -15,
    duration: 100,
    delay: 180,
    begin: ()=>{
      document.getElementById('custom_img')!.style.opacity = '1';
    },
    easing: 'linear'
  })
  // 33 |34 |35| 36| 35 34 33
  // 53 |54 |55| 56| 55 54 53
  // 73 |74 |75| 76| 75 74 73
}
function AddAnimationSmallScreen(id: string ){
  let ids = Number(id.split('_')[1]);
  first_array_r = [`#grid_${ids-30}` ,`#grid_${ids-29}`,`#grid_${ids-28}`,`#grid_${ids-27}`,`#grid_${ids-26}`,`#grid_${ids-25}`]
  second_array_r = [`#grid_${ids+1}`,`#grid_${ids+2}`,`#grid_${ids+3}`,`#grid_${ids+4}`,`#grid_${ids+5}`,
  `#grid_${ids+31}`,`#grid_${ids+32}`,`#grid_${ids+33}`,`#grid_${ids+34}`,`#grid_${ids+35}`]
  first_array_l = [`#grid_${ids+30}`, `#grid_${ids+29}`, `#grid_${ids+28}`];
  second_array_l = [`#grid_${ids-1}`,`#grid_${ids-2}`,`#grid_${ids-3}`,`#grid_${ids-31}`,`#grid_${ids-32}`,`#grid_${ids-33}`]

  main_id = id;
  setTimeout(()=>{
    reappear.restart()
  }, 500)

  let { offsetLeft , parentElement } = document.getElementById(id)!
  let offsetTop = parentElement!.offsetTop
  document.getElementById(`grid_${ids+30}`)!.scrollIntoView({behavior: 'smooth', block: 'center'});
  document.getElementById('items')!.style.position = 'fixed';
  scrollPoint = offsetTop - (offsetTop * 2) + 150;
  //scroll top and left
  anime({
    targets: `#items`,
    left: offsetLeft - (offsetLeft * 2) + 180,
    top: scrollPoint,
    delay: anime.stagger(100),
    duration: 400,
    easing: 'easeInOutQuad',
  })
  scale_up_disappear = anime({
    targets: `#${main_id}`,
    scale: 1.8,
    rotate: -15,
    delay: 150,
    duration: 500,
    autoplay: true,
    easing: 'linear'
  })
  move_right_f = anime({
    targets: first_array_r,
    translateX: 250,
    duration: 500,
    autoplay: true,
    easing: 'linear'
  })
  move_right_s = anime({
    targets: second_array_r,
    translateX: 155,
    duration: 500,
    autoplay: true,
    easing: 'linear'
  })
  move_left_f = anime({
    targets: first_array_l,
    translateX: -270,
    duration: 500,
    autoplay: true,
    easing: 'linear'
  })
  move_left_s = anime({
    targets: second_array_l,
    translateX: -135,
    duration: 500,
    autoplay: true,
    easing: 'linear'
  })

  scale_up = anime({
    targets: `#custom_img`,
    scale: 1.8, 
    translateY : 72,
    translateX: 50,
    rotate: -15,
    duration: 650,
    delay: 200,
    begin: ()=>{
      document.getElementById('custom_img')!.style.opacity = '1';
    }
  })
  // 33 |34 |35| 36| 35 34 33
  // 53 |54 |55| 56| 55 54 53
  // 73 |74 |75| 76| 75 74 73
}
function AddAnimationMiddleScreen(id: string ){
  let ids = Number(id.split('_')[1]);
  first_array_r = [`#grid_${ids-30}` ,`#grid_${ids-29}`,`#grid_${ids-28}`,`#grid_${ids-27}`,`#grid_${ids-26}`,`#grid_${ids-25}`]
  second_array_r = [`#grid_${ids+1}`,`#grid_${ids+2}`,`#grid_${ids+3}`,`#grid_${ids+4}`,`#grid_${ids+5}`,
  `#grid_${ids+31}`,`#grid_${ids+32}`,`#grid_${ids+33}`,`#grid_${ids+34}`,`#grid_${ids+35}`]
  first_array_l = [`#grid_${ids+30}`, `#grid_${ids+29}`, `#grid_${ids+28}`];
  second_array_l = [`#grid_${ids-1}`,`#grid_${ids-2}`,`#grid_${ids-3}`,`#grid_${ids-31}`,`#grid_${ids-32}`,`#grid_${ids-33}`]

  
  main_id = id;
  setTimeout(()=>{
    reappear.restart()
  }, 500)

  let { offsetLeft , parentElement } = document.getElementById(id)!
  let offsetTop = parentElement!.offsetTop
  document.getElementById(`grid_${ids+31}`)!.scrollIntoView({behavior: 'smooth', block: 'center'});
  document.getElementById('items')!.style.position = 'fixed';
  scrollPoint = offsetTop - (offsetTop * 2) + 150;
  //scroll top and left
  anime({
    targets: `#items`,
    left: offsetLeft - (offsetLeft * 2) + 280,
    top:scrollPoint,
    delay: anime.stagger(100),
    duration: 400,
    easing: 'easeInOutQuad',
  })
  anime({
    targets: '#text',
    opacity: 0.8,
    duration: 600
  })
  scale_up_disappear = anime({
    targets: `#${main_id}`,
    scale: 1.8,
    rotate: -15,
    delay: 150,
    duration: 500,
    autoplay: true,
    easing: 'linear'
  })
  move_right_f = anime({
    targets: first_array_r,
    translateX: 303,
    duration: 500,
    autoplay: true,
    easing: 'linear'
  })
  move_right_s = anime({
    targets: second_array_r,
    translateX: 140,
    duration: 500,
    autoplay: true,
    easing: 'linear'
  })
  move_left_f = anime({
    targets: first_array_l,
    translateX: -323,
    duration: 500,
    autoplay: true,
    easing: 'linear'
  })
  move_left_s = anime({
    targets: second_array_l,
    translateX: -160,
    duration: 500,
    autoplay: true,
    easing: 'linear'
  })

  scale_up = anime({
    targets: `#custom_img`,
    scale: 1.86, 
    translateY : 70,
    translateX: 105,
    rotate: -15,
    duration: 650,
    delay: 200,
    begin: ()=>{
      document.getElementById('custom_img')!.style.opacity = '1';
    }
  })
  // 33 |34 |35| 36| 35 34 33
  // 53 |54 |55| 56| 55 54 53
  // 73 |74 |75| 76| 75 74 73
}