import {
  footerCompanyList,
  footerInfoList,
  footerProductList,
  footerSocialLogos,
} from "@/lib/db";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-[#0b3b3c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-b border-gray-200">
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Link href="/" className="inline-block" aria-label="manual-logo">
                <Logo />
              </Link>
            </div>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="font-medium mb-2">PRODUCT</h6>
            <ul className="text-sm">
              {footerProductList.map((item) => (
                <li className="mb-2" key={item.label}>
                  <Link href="#">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="font-medium mb-2">COMPANY</h6>
            <ul className="text-sm">
              {footerCompanyList.map((item) => (
                <li className="mb-2" key={item.label}>
                  <Link href="#">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="font-medium mb-2">INFO</h6>
            <ul className="text-sm">
              {footerInfoList.map((item) => (
                <li className="mb-2" key={item.label}>
                  <Link href="#">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="font-medium mb-2">Follow Us</h6>
            <div className="md:flex md:items-center md:justify-between  ">
              <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                {footerSocialLogos.map((logo) => (
                  <li key={logo.label}>
                    <Link href="#">
                      <Image
                        className="p-2"
                        src={logo.path}
                        alt={logo.label}
                        width={40}
                        height={40}
                        sizes="100vh"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-5">
        {new Date().getFullYear()} Manual. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
