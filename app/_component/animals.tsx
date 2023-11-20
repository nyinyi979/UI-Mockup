import {useEffect,useState} from 'react';
import { ProduceImageWithSrc } from "./images_production";

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

//ALL OF THE ELEMENTS HAVE A LOADING STATE AND 
//USEEFFECT has setTimeOut for asynchronous purposes
export function B1(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="b1.png" className="hidden">{loading? '': b1}</div>
  )
}
export function B2(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="b2.png" className="hidden">{loading? '': b2}</div>
  )
}
export function B3(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="b3.png" className="hidden">{loading? '': b3}</div>
  )
}
export function B4(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="b4.png" className="hidden">{loading? '' : b4}</div>
  )
}
export function B6(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      //b5 png
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
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="b6.png" className="hidden">{loading? '' : b6}</div>
  )
}
export function B7(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="b7.png" className="hidden">{loading? '' : b7}</div>
  )
}
export function B8(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      
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
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="b8.png" className="hidden">{loading? '' : b8}</div>
  )
}
export function B9(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="b9.png" className="hidden">{loading? '' : b9}</div>
  )
}
export function B10(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="b10.png" className="hidden">{loading? '' : b10}</div>
  )
}
export function W1(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="w1.png" className="hidden">{loading? '' : w1}</div>
  )
}
export function W2(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="w2.png" className="hidden">{loading? '' : w2}</div>
  )
}
export function W3(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="w3.png" className="hidden">{loading? '' : w3}</div>
  )
}
export function W4(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="w4.png" className="hidden">{loading? '' : w4}</div>
  )
}
export function W5(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false);
    }, 1)
  }, [])
  return (
    <div id="w5.png" className="hidden">{loading? '' : w5}</div>
  )
}
export function W6(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false)
    }, 1)
  }, [])
  return (
    <div id="w6.png" className="hidden">{loading? "" : w6}</div>
  )
}
export function A1(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false)
    }, 1)
  }, [])
  return (
    <div id="a1.png" className="hidden">{loading? "" : a1}</div>
  )
}
export function A2(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false)
    }, 1)
  }, [])
  return (
    <div id="a2.png" className="hidden">{loading? "" : a2}</div>
  )
}
export function A3(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false)
    }, 1)
  }, [])
  return (
    <div id="a3.png" className="hidden">{loading? "" : a3}</div>
  )
}
export function A4(){
  let [ loading , setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
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
      setLoading(false)
    }, 1)
  }, [])
  return (
    <div id="a4.png" className="hidden">{loading? "" : a4}</div>
    
  )
}