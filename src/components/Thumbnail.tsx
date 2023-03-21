import Image from "next/image"
import {ThumbUpIcon} from '@heroicons/react/outline'
import {useRouter} from 'next/router'
import Link from "next/link"
function Thumbnail({result}:any){
    const BASE_URL:string = 'https://image.tmdb.org./t/p/original/'
    const route = useRouter()
    return(
        <Link href={`movies/${result.id}`}>
        <a className=' group transition-all hover:scale-[1.05] hover:shadow-md mx-12 my-14 cursor-pointer hover:text-white transform hover:z-30 ease-in duration-200'>
            <img className='my-6' 
            src={`${BASE_URL}${result.path || result.poster_path}`}
            

            ></img>
            <div className='p-2'>
                <p className='truncate max-w-md'>{result.overview}</p>
                <h2 className='font-semibold text-3xl group-hover:font-bold'>
                    {result.title||result.original_name}
                </h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100 '>
                    <span className="uppercase">{`${result.media_type||'N/A'} |`}{" "}</span>
                    {result.release_date || result.first_air_date} |{" "}
                    <ThumbUpIcon className='h-5 mx-2'></ThumbUpIcon>{result.vote_count}
                </p>
            </div>
        </a>
        </Link>
        )
}

export default Thumbnail