import React from "react";
import { Link } from "react-router-dom";
import list from "../../public/list.json"
import Card from "../component/Card";
export default function Courses() {

  const lists = list;
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-25">
        <div className="text-center items-center justify-center">
          <h1 className="text-2xl font-[500] md:text-3xl">Courses Designed for <span className="text-secondary">Dreamers & Doers :)</span> </h1>
       <p className="text-center text-gray-600 max-w-3xl mx-auto mt-12 mb-10">
  Step into a world of endless learning opportunities! Our courses are carefully crafted by industry experts to help you gain practical knowledge and real-world skills. <br/><br/>
  Whether you are a beginner exploring new horizons or a professional looking to upskill, you'll find courses that inspire, challenge, and prepare you for the next big step in your career. <br/><br/>
  Dive in, explore, and start your journey to becoming the best version of yourself today!
</p>
    <Link to="/" className="btn btn-secondary shadow-none px-8 hover:bg-pink-700 hover:duration-300">Back</Link>
        </div>

        <div className="mt-10">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10">
            {lists.map((item, key) => (
              <Card key={key} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
