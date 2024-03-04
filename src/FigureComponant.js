import React from 'react'

export default function FigureComponant({mycantact}) {
    // console.log(key);
  return (
    <>
    <figure
           className=" h-80 bg-white shadow-md pt-7 rounded-md" >
          <img alt="user" className="w-32 h-32 rounded-full mx-auto" src={mycantact.picture.large} />
          <figcaption className=" text-center mt-5">
            <p className=" text-xl text-gray-700 font-semibold mb-2">
              {mycantact.name.first} {mycantact.name.last}
            </p>
            <p className=" text-gray-500">
              <span className=" font-medium"> Email</span>:{mycantact.email}
            </p>
            <p className=" text-gray-500">
              <span className=" font-medium">Phone</span>: {mycantact.phone}
            </p>
            <p className=" text-gray-500">
              <span className=" font-medium">City</span>:{" "}
              {mycantact.location.city}
            </p>
          </figcaption>
        </figure>
        </>
  )
}
