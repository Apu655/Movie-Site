"use client";
import Head from "next/head";
import Movies from "@/components/Movies";
import { SyntheticEvent, useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector } from "@/Redux/hooks";

const Details = ({ params }: any) => {
  const [results, setResults] = useState();
  const [trailer, setTrailer] = useState();
  const [comments, setComments] = useState<any>([]);
  const {user} = useAppSelector((state) => state.auth);

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

  const [formData, setFormData] = useState({
    movie_id: movie_id,
    likes: 0,
    author: user?.name,
    comment: "",
  });
  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setFormData((prev: any) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const { data } = await axios.post(
      `http://localhost:5000/comment/post`,
      formData
    );

    getComments();
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
                onChange={handleChange}
                value={formData.comment}
                name="comment"
              />
              <button
                type="submit"
                className="absolute px-2 py-1 bg-slate-500 right-0"
              >
                Submit
              </button>
            </form>
            <div className="flex flex-col mt-4 space-y-4  text-white">
              {comments.length >= 0 &&
                comments.map((data: any) => (
                  <div className="text-black flex space-x-4">
                    <p className="font-bold bg-gray-100 text-center items-center flex text-sm rounded-full">
                      Picture
                    </p>
                    <div className="flex flex-col py-3 px-4 space-y-2 rounded-md bg-gray-100">
                      <p className="text-xs font-bold">{data.author}</p>
                      <p className="font-semibold">{data.comment}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
