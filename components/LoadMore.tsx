'use client'
import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import AnimeCard from "./AnimeCard";

let page = 1; // for new page
export type AnimeCard = JSX.Element;

function LoadMore() {

  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);

useEffect( ()=>{

  if(inView){
    fetchAnime(page)
    .then( (res)=>{
      setData( [...data, ...res] );
      page++; // add page when scrolling
    })
  };
  

}, [inView, data]);

  return (
    <>
    {/* home page */}
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {/* content */}

          {data}

        {/* content */}
      </section>
    {/* home page */}
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
