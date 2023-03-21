import Search from "@/components/Search";
import requests from '../utils/requests'


export default function Home() {
  return (
    <main >
      <p className=""></p>

      
    </main>
  )
}

export async function getServerSideProps(context:any){
  const genre:string = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
    )
    const data = await request.json()

  return{
    props:{
      results:data.results,
    }
  }
}
