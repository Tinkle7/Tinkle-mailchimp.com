import React from "react";
import FirstGrid from "../Components/HomeComponents/FirstGrid";
import Heading from "../Components/HomeComponents/Heading";
import Video from "../Components/HomeComponents/Video";
import Navbar from "../Components/Navbar";
import Plans from "../Components/HomeComponents/Plans";
import SecondGrid from "../Components/HomeComponents/SecondGrid";
import Brands from "../Components/HomeComponents/Brands";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Heading />
      <FirstGrid />
      <Video />
      <Plans />
      <SecondGrid />
      <Brands />
    </div>
  );
}
