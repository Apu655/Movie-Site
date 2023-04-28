import { useAppSelector } from "@/Redux/hooks";
import { axios } from "@/config";
import React, { useEffect, useState } from "react";

type Props = {};

const CommentBox = ({ movie_id, auth }) => {
  const [comments, setComments] = useState<any>([]);
  const [edit, setEdit] = useState(false);

  //   const auth = useAppSelector((state) => state.auth);
  const getComments = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/comment/get?movie_id=${movie_id}`
    );
    setComments(data.data);
  };
  useEffect(() => {
    getComments();
  }, []);

  const handleDelete = async (id: string) => {
    const { data } = await axios.delete(
      `http://localhost:5000/comment/delete/${id}`
    );
    getComments();
  };
  const [formData, setFormData] = useState("");
  useEffect(() => {
    setFormData({
      movie_id: movie_id,
      likes: 0,
      author: auth.user.name,
      comment: "",
    });
  }, []);

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    console.log(formData);
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
    console.log("");
    setFormData((prev: any) => {
      return { ...prev, ["comment"]: "" };
    });
    getComments();
  };
  return (
    <>
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
              <p className="font-bold px-3 bg-gray-100 text-center items-center flex text-sm rounded-full">
                Picture
              </p>
              <div className="flex flex-col py-3 px-4 space-y-2 rounded-md bg-gray-100">
                <p className="text-xs font-bold">{data.author}</p>
                {!edit ? (
                  <p className="font-semibold">{data.comment}</p>
                ) : (
                  <input type="text" />
                )}
                <div className="flex space-x-5">
                  <p
                    onClick={() => setEdit(!edit)}
                    className="text-xs p-2 hover:bg-gray-300 rounded text-gray-500 cursor-pointer"
                  >
                    Edit
                  </p>
                  <p
                    onClick={() => {
                      handleDelete(data.id);
                    }}
                    className="text-xs p-2 hover:bg-red-300 rounded text-red-500 cursor-pointer"
                  >
                    Delete
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentBox;
