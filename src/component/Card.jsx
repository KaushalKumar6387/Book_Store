import React from 'react'
import { motion } from "framer-motion";
export default function Card({data}) {
  return (
    <>
      <motion.div className="card bg-base-100 shadow-xl hover:scale-105 hover:duration-200 "
      initial={{opacity:0,y:-20, x:-20}}
      animate={{opacity:1,y:0,x:0}}
      transition={{duration:1}}
      >
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
              </motion.div>
    </>
  )
}
