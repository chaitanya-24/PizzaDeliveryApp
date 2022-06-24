import Image from "next/image";

const MenuThumbnail = ({ result }) => {
  return (
    <>
      <div className="group m-5 border-2 transform hover:scale-105 duration-300 cursor-pointer drop-shadow-lg md:hover:drop-shadow-2xl">
        <div className="flex justify-between items-center p-3 border-b-2">
          <h6 className="text-white bg-green-700 rounded-3xl p-3">New</h6>
          <i className="bg-yellow-400 text-white p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </i>
        </div>
        <Image
          className="border-y-4 border-indigo-500"
          layout="responsive"
          src={result.image}
          height={200}
          width={300}
        />
        <div className="p-2 border-t-2">
          <h3 className="text-2xl text-black font-semibold font-serif">
            {result.name}
          </h3>
          {/* <p className="">{`${result.vegetarian}`}</p> */}
          {/* <p className="text-lg text-justify">{`${result.ingredients}, `}</p> */}
          <h4 className="text-xl font-mono font-bold text-red-700">{`$${result.price}`}</h4>
        </div>
      </div>
    </>
  );
};

export default MenuThumbnail;
