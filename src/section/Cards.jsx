import React from "react";
import Card from "../Elements/card";

export default function Cards() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl mb-3 font-extrabold dark:text-white">
          Our Members
        </h1>
        <div className="flex gap-3 flex-wrap justify-center">
          <Card link='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' />
          <Card link='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' />
          <Card link='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' />
          
        </div>

        <a
          href="/members"
          class="mt-3 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="w-full">More members</span>
          <svg
            class="w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </>
  );
}
