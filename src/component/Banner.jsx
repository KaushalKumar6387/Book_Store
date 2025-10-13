import React from "react";

export default function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className=" order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-32">
          <div className="space-y-12">
            <h1 className="md:text-4xl font-bold text-xl">
              Hello, welcome here to learn something new{" "}
              <span className="md:text-4xl font-bold text-xl text-[#c2106f]">
                {" "}
                everyday!!!
              </span>{" "}
            </h1>
            <p>
              Discover a world of knowledge, stories, and imagination. Whether
              you love fiction, non-fiction, or academic books — we’ve got
              something for everyone. Explore our handpicked collections,
              exclusive offers, and new arrivals — all in one place.
            </p>
            <div className="">
              <label className="input validator w-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>

                <input
                  type="email"
                  placeholder="mail@site.com"
                  required
                  className="w-full  border-none !outline-none !ring-0 focus:!outline-none focus:!ring-0 focus:shadow-none focus:border-transparent"
                />
              </label>
            </div>

            {/* <button className=" bg-[#ff4dac] text-white px-10 py-2 rounded-[10px] cursor-pointer">
              Subscribe
            </button> */}
          </div>
          <button className="btn btn-secondary shadow-secondary mt-3 md:mt-5">Subscribe</button>
        </div>

        <div className="order-1 md:order-2 w-full md:w-1/2 mt-12 md:flex md:flex-row-reverse">
        <img src="src/assets/bookandcode.png" alt="" className="w-[90%]" />
        </div>
      </div>
    </>
  );
}
