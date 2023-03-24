'use client'
import requests from '../utils/requests'
import Results from "@/components/Results";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch,useAppSelector } from "@/Redux/hooks";
import { getMovie } from "@/Redux/Slices/MovieSlice/MovieSlice";


export default function Home({results}:any) {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    // getData()
    dispatch(getMovie())
    
  },[])
  const {isLoading,isSuccess,isError,movieList} = useAppSelector(state=>state.movie)
  console.log(movieList)

  const [movieData,setMovieData] = useState<any>([])
  const API_KEY = '8b6df62253b4f02d186eaf35b0f43ea2'
  return (
    <main >
      {movieList.length>0 ?(<Results results={movieList}></Results>):(<div></div>)}      
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
