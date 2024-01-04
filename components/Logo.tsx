import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="h-12 w-10">
      <Image
        src="/assets/img/logo.svg"
        alt="Some-img"
        width={100}
        height={100}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default Logo;
