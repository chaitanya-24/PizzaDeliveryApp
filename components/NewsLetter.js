import React from "react";

const NewsLetter = () => {
  return (
    <>
      <main className="bg-orange-100 w-100 p-14 md:flex justify-center items-center">
        <section className="pr-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-serif">
            Subscribe Our Newsletter
          </h1>
          <p className="text-gray-400 mt-2 text-md md:text-lg font-sans">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </p>
        </section>
        <section className="p-5 flex justify-center items-center relative right-5">
          <input
            className="h-14 w-60 md:w-72 border-2 border-red-700 rounded-l-lg px-2 focus:outline-none"
            type="text"
            placeholder="Your email address..."
          />
          <button className="text-white bg-red-700 h-14 w-28 rounded-r-lg font-semibold">
            Subscribe &nbsp;&gt;
          </button>
        </section>
      </main>
    </>
  );
};

export default NewsLetter;
