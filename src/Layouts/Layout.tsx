import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";

type Props = {};

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <Navbar />
      <Header />
      {children}
    </>
  );
};

export default Layout;
