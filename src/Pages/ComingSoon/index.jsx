import Countdown from "./components/Countdown";
import Description from "./components/Description";
import Gear from "./components/Gear";
import Subscribe from "./components/Subscribe";
import Title from "./components/Title";
import gearImage from "./images/gear.svg";
import { Main } from "./view";

export default function ComingSoon() {
  return (
    <Main>
      <Countdown />
      <Gear src={gearImage} alt="Spinning Gear" />
      <Title />
      <Description />
      <Subscribe placeholder="Enter Email Address" buttonText="Submit" />
    </Main>
  );
}
