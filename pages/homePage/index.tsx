import About from "../../components/home/about";
import Banner from "../../components/home/banner";
import Collaboration from "../../components/home/collaboration";
import Portfolio from "../../components/home/portfolio";
import Service from "../../components/home/service";
import Testimonial from "../../components/home/testimonial";
const HomePage = () => {
  return (
    <>
      <Banner />
      <About />
      <Service />
      <Portfolio />
      <Testimonial />
      <Collaboration />
    </>
  );
};
export default HomePage;
