import Countdown from "./components/Countdown";
import Description from "./components/Description";
import Gear from "./components/Gear";
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
    </Main>
  );
}
