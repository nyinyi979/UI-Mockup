'use client'
import anime from "animejs";
import Image from "next/image";
import { useEffect } from "react";

export default function LandingPage(){
    useEffect(()=>{
        anime({
            targets: ['#first_circle' , '#second_circle'],
            scale: 1,
            loop:false,
            duration: 700,
            easing: 'easeInOutQuad',
            opacity: 1,
            autoplay: true,
            begin: ()=>{
                document.getElementById('texts')!.style.display = 'block'
            },
            changeBegin: ()=>{
                document.getElementById('first_circle')!.style.backgroundColor = '#4133ff'
                document.getElementById('second_circle')!.style.backgroundColor = '#4133ff'
            }
        });
        document.getElementById('loading')!.style.display = 'none';
    }, [])
    return(
        <div className="relative bg-amber-200 w-[100%] h-[100vh] overflow-hidden">
            
        <div id="loading"></div>
            <div className='fixed top-16 left-28 font-extrabold text-blue-700 z-40 text-7xl'>
                Fluffy Hugs
            </div>
            <Image src={'/1.png'} alt="w2" width={600} height={500} className="rounded-md bounceUp bg-cover absolute top-[-200px] left-[-100px]"/>
            <Image src={'/2.png'} alt="w2" width={600} height={500} className="rounded-md bounceUp300 bg-cover absolute top-[-300px] left-[15%]"/>
            <Image src={'/3.png'} alt="w2" width={600} height={500} className="rounded-md bounceUp bg-cover absolute top-[-300px] left-[35%]"/>
            <Image src={'/4.png'} alt="w2" width={600} height={500} className="rounded-md bounceUp300 bg-cover absolute top-[-300px] left-[55%]"/>
            <Image src={'/1.png'} alt="w2" width={600} height={500} className="rounded-md bounceUp bg-cover absolute top-[-200px] left-[65%]"/>
            <Image src={'/2.png'} alt="w2" width={600} height={500} className="rounded-md bounceUp300 bg-cover absolute top-[-300px] left-[85%]"/>
            <Image src={'/3.png'} alt="w2" width={600} height={500} className="rounded-md bounceUp bg-cover absolute top-[-300px] left-[95%]"/>
            <Image src={'/4.png'} alt="w2" width={600} height={500} className="rounded-md bounceUp300 bg-cover absolute top-[-300px] left-[100%]"/>
            <Image src={'/4.png'} alt="w2" width={600} height={500} className="rounded-md z-20 bounceUp bg-cover absolute top-[0px] left-[-100px]"/>
            <Image src={'/3.png'} alt="w2" width={600} height={500} className="rounded-md z-20 bounceUp300 bg-cover absolute top-[200px] left-[-10%]"/>
            <Image src={'/3.png'} alt="w2" width={600} height={600} className="rounded-md z-20 bounceUp300 bg-cover absolute top-[-200px] left-[-20%]"/>
            <Image src={'/2.png'} alt="w2" width={600} height={600} className="rounded-md z-20 bounceUp bg-cover absolute top-[200px] left-[20%]"/>
            <Image src={'/1.png'} alt="w2" width={600} height={600} className="rounded-md z-20 bounceUp300 bg-cover absolute top-[200px] left-[50%]"/>
            <Image src={'/4.png'} alt="w2" width={600} height={600} className="rounded-md z-20 bounceUp bg-cover absolute top-[200px] left-[60%]"/>
            <Image src={'/3.png'} alt="w2" width={600} height={600} className="rounded-md z-20 bounceUp300 bg-cover absolute top-[200px] left-[75%]"/>
            <Image src={'/2.png'} alt="w2" width={600} height={600} className="rounded-md z-20 bounceUp bg-cover absolute top-[200px] left-[90%]"/>
            <Image src={'/1.png'} alt="w2" width={600} height={600} className="rounded-md z-20 bounceUp300 bg-cover absolute top-[200px] left-[100%]"/>
            <Image src={'/4.png'} alt="w2" width={600} height={600} className="rounded-md bounceUp bg-cover absolute top-[0px] left-[15%]"/>
            <Image src={'/3.png'} alt="w2" width={600} height={600} className="rounded-md bounceUp300 bg-cover absolute top-[0px] left-[-10%]"/>
            <Image src={'/2.png'} alt="w2" width={600} height={600} className="rounded-md bounceUp bg-cover absolute top-[0px] left-[35%]"/>
            <Image src={'/4.png'} alt="w2" width={600} height={600} className="rounded-md bounceUp300 bg-cover absolute top-[0px] left-[95%]"/>
            <Image src={'/2.png'} alt="w2" width={600} height={600} className="rounded-md bounceUp bg-cover absolute top-[0px] left-[55%]"/>
            <Image src={'/4.png'} alt="w2" width={600} height={600} className="rounded-md bounceUp300 bg-cover absolute top-[0px] left-[70%]"/>
            <Image src={'/3.png'} alt="w2" width={600} height={600} className="rounded-md bounceUp bg-cover absolute top-[0px] left-[30%]"/>
            <Image src={'/2.png'} alt="w2" width={600} height={600} className="rounded-md bounceUp300 bg-cover absolute top-[0px] left-[10%]"/>
            <div className="blue z-50 fixed right-0 bottom-0 cursor-pointer" onClick={animate}>
                <div id="texts" className="absolute right-5 bottom-5 text-white z-50">View Collection</div>
                
                <div id="first_circle" className="two_circles  absolute opacity-0 -bottom-5 -right-3 w-32 h-32 rotate-[40deg]" style={{borderRadius:'4rem 4rem 0 0', backgroundColor: '#4133ff',transform:'scale(35)'}}></div>
                <div id="second_circle" className="two_circles absolute opacity-0 -bottom-7 right-20 w-24 h-24 rotate-3" style={{borderRadius:'5rem 4rem 0 5rem', backgroundColor: '#4133ff',transform:'scale(35)'}}></div>
            </div>
            
            <div className="absolute bottom-5 left-12 flex z-50 gap-4">
                <div key={1} className="cursor-pointer w-10 h-10 rounded-full bg-white hover:scale-110 duration-300"></div>
                <div key={2} className="cursor-pointer w-10 h-10 rounded-full bg-white hover:scale-110 duration-300"> </div>
                <div key={3} className="cursor-pointer w-10 h-10 rounded-full bg-white hover:scale-110 duration-300"> </div>
            </div>
        </div>
        
    )
}
function animate(){
    anime({
        targets: ['#first_circle' , '#second_circle'],
        scale: 35,
        loop:false,
        duration: 700,
        easing: 'easeInOutQuad',
        opacity: 1,
        begin: ()=>{
            document.getElementById('texts')!.style.display = 'none'
        },
        changeBegin: ()=>{
            document.getElementById('first_circle')!.style.backgroundColor = 'black'
            document.getElementById('second_circle')!.style.backgroundColor = 'black'
        }
    });
    setTimeout(()=>{
        window.location.assign('/gallery')
    }, 400)
}