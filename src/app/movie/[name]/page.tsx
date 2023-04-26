"use client";
import Head from "next/head";
import Movies from "@/components/Movies";
import { SyntheticEvent, useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector } from "@/Redux/hooks";
import CommentBox from "@/components/CommentBox";

const Details = ({ params }: any) => {
  const auth = useAppSelector((state) => state.auth);
  const [results, setResults] = useState();
  const [trailer, setTrailer] = useState();

  const [update, setUpdate] = useState({
    isEdit: false,
    comment: "",
    id: "",
  });

  const movie_id = params.name;
  const getData = async () => {
    const API_KEY: any = "8b6df62253b4f02d186eaf35b0f43ea2";
    const video_url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`;
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
    const request = await fetch(`${url}`);
    const data = await request.json();
    setResults(data);
    const video_data = await fetch(`${video_url}`);
    const video_trailer = await video_data.json();
    video_trailer.results.filter((value: any) => {
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
        {trailer && <Movies result={results} trailer={trailer}></Movies>}
        <div className="lg:max-w-6xl mx-auto">
          <CommentBox movie_id={movie_id} auth={auth} />
        </div>
      </div>
    </>
  );
};

export default Details;
