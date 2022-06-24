import Image from "next/image";

const SpecOffer = () => {
  return (
    <>
      <div className="bg-orange-100 p-10 flex flex-col md:flex-row justify-center items-center">
        <Image
          className="object-contain"
          src="/images/Pizza2.jpg"
          height={300}
          width={440}
        />

        <div className="m-10">
          <p className="bg-yellow-400 text-white p-1 text-sm font-semibold w-12">
            -50%
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-serif mt-3">
            Pizza Special Offer
          </h1>
          <p className="text-gray-400 my-5 text-lg md:text-xl font-sans">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </p>
          <button className="bg-red-700 h-10 w-36 text-white rounded-md hover:shadow hover:shadow-black">
            See All Menu{" "}
            <span className="bg-white text-black px-1 rounded-md">&gt;</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SpecOffer;
