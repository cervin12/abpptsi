import React from "react";

export default function HorizontalCard(props) {
  
  return (
    <>
      <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={props.link}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
          <p>Position : Precident</p>
          <blockquote class="italic mt-2 text-gray-900 dark:text-white">
            <p>{props.address}</p>
          </blockquote>
        </div>
      </a>
    </>
  );
}
