import React from "react";
import { Footer } from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import Navbar2 from "../navbar/navbar2/Navbar2";

import { ContainerProp } from "./container.type";

export const Container = (props: ContainerProp) => {
  const { children } = props;
  return (
      <div>
        
        <Navbar />
        <Navbar2 />
        {children}
        <Footer />
        
      </div>
  );
};
