
import ReviewsScroll from "../Portfolio/Review/ReviewsScroll";

const AutoScrollReviews = () => {

  return (
    <div className="py-4 md:py-10">
      <div className="flex justify-center">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg gradient-text uppercase px-4 border-purple-700"
        >
          Client's Reviews
        </h1>
      </div>
      <ReviewsScroll></ReviewsScroll>
    </div>
  );
};

export default AutoScrollReviews;
