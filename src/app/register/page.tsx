"use client";
import React, { useState, useEffect } from "react";
import Router from "next/router";
import { axios } from "@/config";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { register } from "@/Redux/Slices/AuthSlice";
import { useRouter } from "next/navigation";
type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  console.log(auth);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    // isVerified: false,
    // isAdmin: false,
  });
  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setFormData((prev: any) => {
      return { ...prev, [name]: value };
    });
    console.log(formData)
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    dispatch(register(formData));
    router.push("/login")

    
  };

//   useEffect(() => {
//     if (auth.user) {
//       router.push("/");
//     }
//   }, [auth.user]);

  return (
    <div className="flex justify-center flex-col">
      <div className="text-center text-5xl font-bold my-4 flex flex-col">
        JAMBO
        <p className="text-sm font-light ">
          Join the biggest online streaming site today
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center justify-center space-y-4"
      >
        <div className="w-96 flex flex-col space-y-5">
          <div>
            <input
              onChange={handleChange}
              className="rounded p-2 bg-transparent border-b focus:outline-none w-full"
              type="text"
              name="name"
              placeholder="name"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              className="rounded p-2 bg-transparent border-b focus:outline-none w-full"
              type="text"
              name="email"
              placeholder="email"
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              className="rounded p-2 bg-transparent border-b focus:outline-none w-full"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <input
              
              className="rounded p-2 bg-transparent border-b focus:outline-none w-full"
              type="password"
              name="cPassword"
              placeholder="Confirm password"
            />
          </div>
          {auth.message && <p className="text-red-500">{auth.message}</p>}
          <button
            className="bg-red-600 w-full py-2 hover:bg-red-700 font-semibold"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
