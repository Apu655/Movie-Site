"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Head from "next/head";
import Movies from "@/components/Movies";
import { useEffect, useState } from "react";

const Details = ({ params, searchParams }: any) => {
  const [results, setResults] = useState();
  const [trailer, setTrailer] = useState();
  console.log("params : ", params);
  const movie_id = params.name;
  const router = useRouter();
  // const searchParams = useSearchParams()
  console.log("Search params: ", searchParams);

  const pathname = usePathname();
  console.log(router);

  const getData = async () => {
    const API_KEY: any = "8b6df62253b4f02d186eaf35b0f43ea2";
    const video_url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`;
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
    const request = await fetch(`${url}`);
    const data = await request.json();
    setResults(data);
    console.log("Single Movie Data: ", data);

    const video_data = await fetch(`${video_url}`);
    const video_trailer = await video_data.json();
    const trailer = video_trailer.results.filter((value: any) => {
      if (value.type === "Trailer") {
        console.log("Trailer value : ", value);
        setTrailer(value);
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <div>
          {trailer && <Movies result={results} trailer={trailer}></Movies>}
        </div>
      </div>
    </>
  );
};

export default Details;
