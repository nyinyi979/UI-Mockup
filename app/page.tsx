'use client'
import anime from "animejs";
import Image from "next/image";
import { useEffect } from "react";
import { FaTwitter , FaDiscord } from "react-icons/fa";
import { SiOpensea } from "react-icons/si";
export default function LandingPage(){
    useEffect(()=>{
        //circle animation
        anime({
            targets: ['#first_circle' , '#second_circle'],
            scale: 1,
            loop:false,
            duration: 1000,
            easing: 'linear',
            opacity: 1,
            autoplay: true,
            changeComplete: ()=>{
                document.getElementById('first_circle')!.style.backgroundColor = '#4133ff'
                document.getElementById('second_circle')!.style.backgroundColor = '#4133ff'
            },
            complete: ()=>{
                document.getElementById('imgs')!.style.opacity = '1'
                document.getElementById('texts')!.style.display = 'block'
            }
        });
        document.getElementById('loading')!.style.display = 'none';
        document.getElementById('loading_small')!.style.display = 'none';
    }, [])
    return(
        <div className="relative bg-amber-200 w-[100%] h-[100vh]  overflow-hidden">
            
        <div id="loading" className="md:block md:w-[160vh] lg:w-[200vh] h-[100%] hidden"></div>
        <div id="loading_small" className="w-[100vh] md:w-[160vh] lg:w-[200vh] h-[100%] md:hidden block"></div>
        <div className='fixed top-16 left-20 font-extrabold text-blue-700 z-40 lg:text-7xl text-3xl'>
            Fluffy Dogs
        </div>
        <div id="imgs">
            <Image src={'/a1.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp bg-cover absolute top-[-300px] left-[-100px]"/>
            <Image src={'/a2.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp300 bg-cover absolute top-[-300px] left-[15%]"/>
            <Image src={'/a3.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp bg-cover absolute top-[-300px] left-[35%]"/>
            <Image src={'/a4.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp300 bg-cover absolute top-[-300px] left-[55%]"/>
            <Image src={'/a1.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp bg-cover absolute top-[-300px] left-[65%]"/>
            <Image src={'/a2.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp300 bg-cover absolute top-[-300px] left-[85%]"/>
            <Image src={'/a3.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp bg-cover absolute top-[-300px] left-[95%]"/>
            <Image src={'/a4.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp300 bg-cover absolute top-[-200px] left-[100%]"/>
            <Image src={'/a4.png'} alt="w2" width={700} height={700} className="rounded-md z-20 bounceUp bg-cover absolute top-[0px] left-[-100px]"/>
            <Image src={'/a3.png'} alt="w2" width={700} height={700} className="rounded-md z-20 bounceUp300 bg-cover absolute top-[200px] left-[-10%]"/>
            <Image src={'/a3.png'} alt="w2" width={700} height={700} className="rounded-md z-20 bounceUp300 bg-cover absolute top-[-200px] left-[-20%]"/>
            <Image src={'/a2.png'} alt="w2" width={700} height={700} className="rounded-md z-20 bounceUp bg-cover absolute top-[200px] left-[20%]"/>
            <Image src={'/a1.png'} alt="w2" width={700} height={700} className="rounded-md z-20 bounceUp300 bg-cover absolute top-[200px] left-[50%]"/>
            <Image src={'/a4.png'} alt="w2" width={700} height={700} className="rounded-md z-20 bounceUp bg-cover absolute top-[200px] left-[60%]"/>
            <Image src={'/a3.png'} alt="w2" width={700} height={700} className="rounded-md z-20 bounceUp300 bg-cover absolute top-[200px] left-[75%]"/>
            <Image src={'/a2.png'} alt="w2" width={700} height={700} className="rounded-md z-20 bounceUp bg-cover absolute top-[200px] left-[90%]"/>
            <Image src={'/a1.png'} alt="w2" width={700} height={700} className="rounded-md z-20 bounceUp300 bg-cover absolute top-[200px] left-[100%]"/>
            <Image src={'/a4.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp bg-cover absolute top-[0px] left-[15%]"/>
            <Image src={'/a3.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp300 bg-cover absolute top-[0px] left-[-10%]"/>
            <Image src={'/a2.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp bg-cover absolute top-[0px] left-[35%]"/>
            <Image src={'/a4.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp300 bg-cover absolute top-[0px] left-[95%]"/>
            <Image src={'/a2.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp bg-cover absolute top-[0px] left-[55%]"/>
            <Image src={'/a4.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp300 bg-cover absolute top-[0px] left-[70%]"/>
            <Image src={'/a3.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp bg-cover absolute top-[0px] left-[30%]"/>
            <Image src={'/a2.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp300 bg-cover absolute top-[200px] left-[-10%]"/>
            
            <Image src={'/a3.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp bg-cover absolute top-[300px] left-[-20%]"/>
            <Image src={'/a4.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp300 bg-cover absolute top-[450px] left-[-10%]"/>
            <Image src={'/a1.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp bg-cover absolute top-[400px] left-[-20%]"/>
            <Image src={'/a2.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp300 bg-cover absolute top-[450px] left-[0%]"/>
            <Image src={'/a2.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp bg-cover absolute top-[400px] left-[30%]"/>
            <Image src={'/a4.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp300 bg-cover absolute top-[450px] left-[44%]"/>
            <Image src={'/a3.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp bg-cover absolute top-[350px] left-[80%]"/>
            <Image src={'/a2.png'} alt="w2" width={700} height={700} className="rounded-md bounceUp300 bg-cover absolute top-[300px] left-[100%]"/>
        </div>
            

            <div id="blue" className="z-50 fixed right-0 bottom-0 cursor-pointer" onClick={animate}>
                <div id="texts" className="absolute right-5 bottom-5 text-white z-50">View Collection</div>
                
                <div id="first_circle" className="two_circles  absolute opacity-50 -bottom-5 -right-3 w-32 h-32 rotate-[40deg]" style={{borderRadius:'4rem 4rem 0 0', backgroundColor: 'black',transform:'scale(35)'}}></div>
                <div id="second_circle" className="two_circles absolute opacity-50 -bottom-7 right-20 w-24 h-24 rotate-3" style={{borderRadius:'5rem 4rem 0 5rem', backgroundColor: 'black',transform:'scale(35)'}}></div>
            </div>
            
            <div className="absolute bottom-5 left-12 flex z-30 gap-4">
                <FaTwitter key={1} className="cursor-pointer w-10 h-10 rounded-full text-white bg-blue-500 p-1 hover:scale-110 duration-300"/>
                <FaDiscord key={1} className="cursor-pointer w-10 h-10 rounded-full text-white bg-blue-500 p-1 hover:scale-110 duration-300"/>
                <SiOpensea key={3} className="cursor-pointer w-10 h-10 rounded-full text-blue-500 bg-white hover:scale-110 duration-300" />
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
        easing: 'linear',
        opacity: 1,
        begin: ()=>{
            document.getElementById('texts')!.style.display = 'none'
            document.getElementById('blue')!.style.display = 'block'
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