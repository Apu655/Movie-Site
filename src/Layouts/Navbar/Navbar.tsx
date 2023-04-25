import { useDispatch } from "react-redux";
import requests from "../../utils/requests";
import { useRouter } from "next/navigation";
import { getMovie } from "@/Redux/Slices/MovieSlice/MovieSlice";
import { AppDispatch } from "@/Redux/store";
const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>()
  const baseURL = "https://api.themoviedb.org/3"

  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 space-x-10 sm:space-x-20 text-xl whitespace-nowrap overflow-x-scroll scrollbar-hide overflow-y-hidden">
        {Object.entries(requests).map(([key, { title, url }]: any) => (
          <h2
            key={key}
            className="hover:scale-125 hover:text-white active:text-red-500 cursor-pointer transition duration-100 transform"
            onClick={() => {
              router.push(`/?genre=${key}`);
              dispatch(getMovie(baseURL+url))

            }}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 h-10 bg-gradient-to-l from-[#030e13] lg:w-[0%] w-[7%]"></div>
    </nav>
  );
};

export default Navbar;
