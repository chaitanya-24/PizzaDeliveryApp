import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/dist/client/image";

const TestItem = ({ result }) => {
  return (
    <div>
      <FontAwesomeIcon
        className="text-yellow-400 w-10 height-10"
        icon={faQuoteRight}
      />
      <main className="flex justify-center text-lg md:xl lg:text-2xl text-justify text-gray-400 font-serif my-5">
        {result.lorem}
      </main>
      <Image src={result.avatar} height={50} width={50} />
      <h1 className="text-2xl md:text-4xl font-bold text-red-700">
        {result.name}{" "}
        <span className="text-black text-xl font-sans flex justify-end relative bottom-9">{result.rating}/5</span>
      </h1>
    </div>
  );
};

export default TestItem;
