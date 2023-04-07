import Thumbnail from "./Thumbnail"
import Link from "next/link"

const Results= ({results}:any)=>{

    return(
      <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 transition-all duration-200">
          {results && results.map((result:any)=>(
            <Thumbnail key={result.id} result={result} className=''></Thumbnail>
            
          ))}
      </div>
      )
}


export default Results