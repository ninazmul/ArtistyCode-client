import AboutCom from "../../Components/AboutCom";
import Plans from "../Plans";
import Team from "../Team";
import AutoScrollReviews from "./AutoScrollReviews";
import Header from "./Header";
import Projects from "./Projects";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Plans></Plans>
      <Projects></Projects>
      <AutoScrollReviews></AutoScrollReviews>
      <Team></Team>
      <AboutCom></AboutCom>
    </div>
  );
};

export default Home;
