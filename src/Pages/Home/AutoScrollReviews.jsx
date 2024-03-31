import Marquee from "react-fast-marquee";
import ReviewsScroll from "../Portfolio/Review/ReviewsScroll";
import { Link } from "react-router-dom";

const AutoScrollReviews = () => {
  return (
    <div className="py-4 md:py-10" data-aos="fade-right">
      <div className="flex justify-center">
        <h1
          data-aos="fade-right"
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg text-white uppercase px-4 border-purple-700"
        >
          Client's Reviews
        </h1>
      </div>
      <ReviewsScroll></ReviewsScroll>
    </div>
  );
};

export default AutoScrollReviews;
