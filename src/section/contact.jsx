import React from "react";
import {AiFillInstagram,AiFillYoutube} from "react-icons/ai"
import {FaTiktok} from "react-icons/fa"

export default function Contact() {
  return (
    <>
      <div className="text-center" >
        <h1 className="text-4xl mt-10 mb-3 font-extrabold dark:text-white">
          Get in touch
        </h1>
        <p>We're here to answer your questions and explore opportunities for collaboration. Feel free to reach out to us through any of the following channels:</p>
        <div className="flex gap-5 justify-center mt-10 mb-20">
          <a
            href="#"
            class="inline-flex items-center justify-center p-3 gap-2 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <AiFillInstagram size={32} />
            <span class="w-full">ABP PTSI SUMUT</span>
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
          <a
            href="#"
            class="inline-flex items-center justify-center p-3 gap-2 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <AiFillYoutube size={32} />
            <span class="w-full">ABP PTSI SUMUT</span>
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
          <a
            href="#"
            class="inline-flex items-center justify-center p-3 gap-2 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaTiktok size={32} />
            <span class="w-full">ABP PTSI SUMUT</span>
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
      </div>
    </>
  );
}
