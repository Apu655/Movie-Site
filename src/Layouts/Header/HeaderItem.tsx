import { getMovie, getMovieBySearch } from "@/Redux/Slices/MovieSlice/MovieSlice";
import { useAppDispatch } from "@/Redux/hooks";
import { useState, useContext } from "react";

interface HeaderProps {
  Icon: any;
  title: string;
}

const HeaderItem = ({ Icon, title }: HeaderProps) => {
  const [openSearch, setOpenSearch] = useState(false);
  const dispatch = useAppDispatch()

  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };
  const handleChange = (e:any) => {
    const {value} = e.target
    if (value){
      dispatch(getMovieBySearch(e.target.value))
    }
    else{
      dispatch(getMovie())
    }
    
  };

  if (title == "SEARCH") {
    return (
      <div
        className={`group flex flex-col items-center cursor-pointer w-12 ${
          openSearch ? "sm:w-56" : ""
        }  hover:text transition-all`}
      >
        <div className="flex space-x-2">
          <Icon
            onClick={handleSearch}
            className="h-8 mb-1 group-hover:animate-bounce"
          ></Icon>
          {openSearch && (
            <input
              onChange={handleChange}
              className="font-semibold px-4 w-40 rounded-lg text-black"
            />
          )}
        </div>
        <p className="tracking-widest opacity-0 group-hover:opacity-100">
          {title}
        </p>
      </div>
    );
  } else {
    return (
      <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text">
        <Icon className="h-8 mb-1 group-hover:animate-bounce"></Icon>
        <p className="tracking-widest opacity-0 group-hover:opacity-100">
          {title}
        </p>
      </div>
    );
  }
};
export default HeaderItem;
