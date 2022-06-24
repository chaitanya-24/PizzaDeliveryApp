import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="flex flex-col md:flex-row my-16 mx-10 items-center">
        <div className="w-full mb-8">
          <h1 className="md:text-6xl text-5xl font-semibold md:w-2/4">
            Fastest <br /> <span className="text-red-800">Delivery</span> &
            <br />
            Easy <span className="text-red-800">Pickup</span>
          </h1>
          <p className="text-gray-400 mt-5 text-lg md:text-xl font-sans">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </p>
        </div>
        <Image
          className="object-contain"
          src="/images/HeaderImg.png"
          width={950}
          height={650}
        />
      </header>
    </>
  );
};

export default Header;

