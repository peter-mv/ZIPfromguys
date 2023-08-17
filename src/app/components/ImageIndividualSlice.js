import Link from "next/link";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

export default function ImageIndividualSlice() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-8">
        <div className="w-full lg:w-1/2 h-[300px] md:min-h-[450px]">
          <Link href="/">
            <img
              src="https://www.imagethread.com/koken/storage/cache/images/000/033/marker-landscape-d10,medium.2x.1475998338.jpg"
              alt=""
              className="rounded-lg w-full h-[300px] md:min-h-[450px] object-cover"
            />
          </Link>
        </div>

        <div className="lg:w-1/2 min-h-[450px] flex flex-col justify-evenly px-4 lg:pr-4">
          <span className="font-bold text-white bg-cyan-900 w-[70px] text-center rounded-xl uppercase text-xs px-2 py-1">
            Terror
          </span>

          <h2 className="text-slate-900 text-2xl md:text-4xl font-semibold">
            Dead Space contará con un spin off de lo más inesperado
          </h2>

          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-2 object-cover"
              src="https://aishlatino.com/wp-content/uploads/2021/11/que-tipo-de-persona-te-gustaria-ser-730x411-SP.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-600 leading-none">
                by <span className="font-bold">Laura Adans</span>
              </p>
              <p className="text-gray-600">Aug 18, 2022</p>
            </div>
          </div>

          <p className="text-gray-400 text-lg font-semibold pb-4 border-b-2 border-gray-300">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <Link
            href="/"
            className="text-gray-400 font-medium hover:text-gray-500 transition-all flex items-center"
          >
            Continue reading <RiArrowRightSLine className="mt-1" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

// Continue reading <RiArrowRightSLine className="mt-1" />{" "}
