import Countdown from "./components/Countdown";
import Gear from "./components/Gear";
import gearImage from "./images/gear.svg";
import { Main } from "./view";

export default function ComingSoon() {
  return (
    <Main>
      <Countdown />
      <Gear src={gearImage} alt="Spinning Gear" />
    </Main>
  );
}
