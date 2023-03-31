"use client";
import Head from "next/head";
import Movies from "@/components/Movies";
import { SyntheticEvent, useEffect, useState } from "react";
import axios from "axios";

const Details = ({ params }: any) => {
  const [results, setResults] = useState();
  const [trailer, setTrailer] = useState();
  const [comments, setComments] = useState<any>([{ comment: "Good Coment" }]);

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
  const getComments = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/comment/get?movie_id=${movie_id}`
    );
    setComments(data.data);
  };
  useEffect(() => {
    getData();
    getComments();
  }, []);

  const [formData, setFormData] = useState("");
  const handleChange = (e: SyntheticEvent) => {};

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("");
  };

  return (
    <>
      <div>
        <div>
          {trailer && <Movies result={results} trailer={trailer}></Movies>}
          <div className="lg:max-w-6xl mx-auto">
            <form onSubmit={handleSubmit} className="relative">
              <input
                className="w-full rounded py-1 px-2 text-black"
                placeholder="Write a comment ..."
                onChange={(e: any) => {
                  setFormData(e.target.value);
                }}
                value={formData}
              />
              <button
                type="submit"
                className="absolute px-2 py-1 bg-slate-500 right-0"
              >
                Submit
              </button>
            </form>
            <div className="flex flex-col mt-4 space-y-4 bg-white">
              {comments.length >= 0 &&
                comments.map((data: any) => (
                  <div className="text-black  flex">
                    <p className="font-bold text-center">Author name</p>
                    <p className=" border rounded-full bg-gray-300 py-3 px-4 w-full font-semibold">
                      {data.comment}
                    </p>
                  </div>
                ))}
              <p>comments testing</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
