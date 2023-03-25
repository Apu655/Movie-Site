// import Image from "next/image"
import {ThumbUpIcon} from '@heroicons/react/outline'

function Movie({result,trailer}:any){
    console.log("Trailer from component: ",trailer)
    const BASE_URL:string = 'https://image.tmdb.org./t/p/original/'
    const movie_key:string =trailer.key
    const URL_Youtube:string = `https://www.youtube.com/watch?v=${movie_key}`
    

    return(
        <div className='flex flex-col mx-12 lg:max-w-6xl lg:mx-auto my-14 md:grid md:grid-cols-2 gap-x-[100px] text-white'>
            <img className='object-cover'
            
            src={`${BASE_URL}${result.path || result.poster_path||'None'}`}
            

            />
            
            <div className=''>
                
                <h2 className='font-black text-white text-6xl group-hover:font-bold'>
                    {result.title}
                </h2>
                <h2 className='text-3xl pt-5'>Overview</h2>
                <hr></hr>
                <p className='text-xl'>{result.overview}</p>
                <div className='mt-10 border px-4 py-5'>
                <p className='text-xl my-1'>Category : <span className='capitalize'>{`${result.genres.map((genre:any)=>(genre.name))}`}</span></p>
                <p className='text-xl my-1'>Release  : <span className='capitalize'>{result.release_date||'N/A'}</span></p>
                <p className='text-xl my-1'>Popularity : <span className='capitalize'>{result.popularity||'N/A'}</span></p>
                <p className='text-xl my-1'>Vote Average : <span className='capitalize'>{result.vote_average||'N/A'}</span></p>
                <p className='text-xl my-1'>Vote Count : <span className='capitalize'>{result.vote_count||'N/A'}</span></p>
                <p className='text-xl my-1'>Language : <span className='capitalize'>{result.original_language||'N/A'}</span></p>
                <p className='text-xl my-1'>Budget : <span className='capitalize'>{`${result.budget===0?'N/A':result.budget.toString().slice(0,3)+'Million US$'} `||'N/A'}</span></p>
                
                </div>
                <p className='flex items-center opacity-100 '>
                    <span className="uppercase">{`${result.genres[0].name} | `}{" "}</span>
                    {result.release_date || result.first_air_date||'N/A'} |{" "}
                    <ThumbUpIcon className='h-5 mx-2'></ThumbUpIcon>{result.vote_count||'N/A'}
                </p>
            </div>
            <div className='md:col-span-2 mt-10'>

                <h2 className='text-5xl font-semibold border-b-2 py-3'>{trailer.name}</h2>
            <div className='mt-10'>
            <iframe className='mx-auto h-[500px] w-full'  src={`https://www.youtube.com/embed/${movie_key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            </div>
        </div>
        )
}

export default Movie