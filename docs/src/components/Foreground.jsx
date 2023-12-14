import Card from './Card'
import React, { useRef } from 'react';
const Foreground = () => {


    const ref = useRef(null);
    const data = [{
        desc: "Lorem dolor ipsum sit amet consentor adisipicing",
        filesize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }
    },
    {
        desc: "Lorem dolor ipsum sit amet consentor adisipicing",
        filesize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
    },
    {
        desc: "Lorem dolor ipsum sit amet consentor adisipicing",
        filesize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
    }];
    
    return (
        <>
        <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5 '>

           {data.map((item, index)=>(
           <Card data ={item} reference ={ref}/>
           ))}
        </div>
        </>
    )
}

export default Foreground