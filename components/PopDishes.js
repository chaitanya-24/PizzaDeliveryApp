import MenuThumbnail from "./MenuThumbnail";

const PopDishes = ({ results }) => {
  return (
    <>
      <div className="my-10">
        <h6 className="text-md md:text-2xl font-serif text-center">Our Menu</h6>
        <h3 className="text-2xl md:text-4xl font-serif font-bold text-center">
          Our Popular Dishes
        </h3>
        <p className="text-gray-400 m-3 text-md md:text-xl font-sans text-center">
          Best cooks and best delivery guys all at your service. Hot tasty food
          will reach you in 60 minutes.
        </p>
        <div className="sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex">
          {results.map((result) => {
            return <MenuThumbnail key={result.id} result={result} />;
          })}
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-red-700 h-12 w-36 text-white rounded-md hover:shadow hover:shadow-black ">
            See All Menu
            <span className="bg-white text-black mx-2 px-1 rounded-md">
              &gt;
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PopDishes;
