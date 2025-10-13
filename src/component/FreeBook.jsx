import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
export default function FreeBook() {
  const lists = list.filter((data) => data.category == "free");
  console.log(lists);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  my-10">
        <div className="space-y-1.5">
          <h2 className="font-semibold text-2xl">Free Offered Courses</h2>
          <p className="">
            Learn new skills for free with our offered courses. Gain knowledge,
            improve yourself, and grow without any cost.
          </p>

            
        </div>
        <div className="mt-10">
          <Slider {...settings}>
            {lists.map((data, key)=>(
            <div index={key} className="md:space-x-1">
              <div className="card bg-base-100 w-full md:w-100 shadow-sm">
                <figure>
                  <img
                    src={`src/assets/${data.image}`}
                    alt={data.name}
                    // style={{maxHeight:"200px"}}
                    className="h-50"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {data.name}
                    <div className="badge badge-secondary">{data.category}</div>
                  </h2>
                  <p>
                   {data.title}
                  </p>

                  <div className="card-actions justify-between">
                    <div className="badge badge-outline">&#8377;{data.price}</div>
                    <div className="badge badge-outline cursor-pointer hover:text-secondary px-3 py-3"><a href="">
                        Buy Now
                        </a></div>
                </div>
                 
                </div>
              </div>
            </div>
            ))}

          </Slider>
        </div>
      </div>
    </>
  );
}
