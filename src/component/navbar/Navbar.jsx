import Link from "next/link";
import React from "react";
import Links from "./Links/Links";

function Navbar() {
  return (
    <div>
      <div className="">Logo</div>
      <div className="">
        <Links />
      </div>
    </div>
  );
}

export default Navbar;
