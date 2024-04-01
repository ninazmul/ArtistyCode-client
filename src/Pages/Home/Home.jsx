
import Team from "../Team";
import AutoScrollReviews from "./AutoScrollReviews";
import Header from "./Header";
import Projects from "./Projects";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Team></Team>
      <Services></Services>
      <Projects></Projects>
      <AutoScrollReviews></AutoScrollReviews>
    </div>
  );
};

export default Home;
