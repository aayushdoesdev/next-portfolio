"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ link }) => {
  const pathName = usePathname();
//   console.log(pathName);

  return (
    <Link
      href={link.url}
      className={`rounded-lg p-1 ${
        pathName === link.url && "bg-white text-black"
      }`}
    >
      {link.title}
    </Link>
  );
};

export default Navlink;
