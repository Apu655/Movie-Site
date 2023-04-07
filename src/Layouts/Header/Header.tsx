import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  ChevronDownIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useContext } from "react";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { logout, reset } from "@/Redux/Slices/AuthSlice";
import { useRouter } from "next/navigation";
const Header = () => {
  const {user} = useAppSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const handleLogout = () => {
    dispatch(reset());
    dispatch(logout());
    router.push("/login");
  };
  console.log("auth from header", user);
  const userTitle = user ? user.name : "";
  console.log(userTitle)
  return (
    <header className="flex flex-col sm:flex-row justify-between m-5 items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Link href="/">
          <HeaderItem title="Home" Icon={HomeIcon}></HeaderItem>
        </Link>
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon}></HeaderItem>
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}></HeaderItem>
        <a href="/products">
          <HeaderItem title="PRODUCTS" Icon={CollectionIcon}></HeaderItem>
        </a>
        <HeaderItem title="SEARCH" Icon={SearchIcon}></HeaderItem>

        {/* <a href="/dashboard">
          <HeaderItem title={"Apu Islam"} Icon={UserIcon}></HeaderItem>
        </a> */}
        {user && user.name && (
          <div className="relative select-none">
            <div
              onClick={() => {
                setToggleDropDown(!toggleDropDown);
              }}
              className="flex items-center rounded-full max-h-fit px-2 py-2 bg-slate-800  hover:bg-slate-600 cursor-pointer "
            >
              {/* <UserIcon className="h-8 mb-1 cursor-pointer"/> */}
              <p className="text-base font-bold ">{userTitle}</p>
              <ChevronDownIcon className="h-5 flex items-center" />
            </div>
            {toggleDropDown && (
              <ul className="absolute top-12 w-36 bg-slate-800 bg-opacity-75 px-2 py-1 rounded">
                <li className="hover:bg-slate-600 cursor-pointer px-2 rounded">
                  Profile
                </li>
                <li className="hover:bg-slate-600 cursor-pointer px-2 rounded">
                  Dashboard
                </li>
                <li
                  onClick={() => handleLogout()}
                  className="hover:bg-slate-600 cursor-pointer px-2 rounded"
                >
                  Logout
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
      <div className="hover:scale-110  transform origin-x transition duration-300 ease-out">
        <Link href="/">
          <p className="text-5xl font-black bg-clip-text bg-gradient-to-t from-[#810c0c] to-[#270202] text-transparent">
            JAMBO
          </p>
        </Link>
      </div>
      {/* <Image className='object-contain' src='https://links.papareact.com/ua6' width={200} height={100}></Image> */}
    </header>
  );
};
export default Header;
