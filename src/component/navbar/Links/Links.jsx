import Link from "next/link";
import React from "react";

function Links() {
  const links = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "BlogPage",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>{link.title}</Link>
      ))}
    </div>
  );
}

export default Links;
