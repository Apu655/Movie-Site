'use client'
import Search from "@/components/Search";
import requests from '../utils/requests'
import Results from "@/components/Results";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home({results}:any) {
  const [movieData,setMovieData] = useState<any>([])
  const API_KEY = '8b6df62253b4f02d186eaf35b0f43ea2'
  const getData = async ()=>{
    const {data:result} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=&page=1&include_adult=false`)
    console.log(result)
    setMovieData(result)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <main >
      <Results results={movieData}></Results>

      
    </main>
  )
}

// export async function getServerSideProps(context:any){
//   const genre:string = context.query.genre;
//   const request = await fetch(
//     `https://api.themoviedb.org/3${
//       requests[genre]?.url || requests.fetchTrending.url
//     }`
//     )
//     const data = await request.json()
//     console.log(data)

//   return{
//     props:{
//       results:data.results,
//     }
//   }
// }
