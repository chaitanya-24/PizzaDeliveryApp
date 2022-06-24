import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import TestItem from "./TestItem";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Testimonial = ({ testimonial }) => {
  return (
    <>
      <div className="mt-20">
        <h6 className="text-md md:text-2xl font-serif text-center">
          Testimonial
        </h6>
        <h3 className="text-2xl md:text-4xl font-serif font-bold text-center">
          What Our Customers Say
        </h3>
        <div className="border-2 border-dashed md:max-w-2xl lg:max-w-3xl xl:max-w-4xl p-5 mx-10 my-8 md:relative lg:left-44">
          <AutoPlaySwipeableViews>
            {testimonial.map((result) => {
              return <TestItem key={result.id} result={result} />
            })}
          </AutoPlaySwipeableViews>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
