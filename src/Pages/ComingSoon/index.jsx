import { pages } from "data/db.json";
import Countdown from "./components/Countdown";
import Description from "./components/Description";
import Gear from "./components/Gear";
import Subscribe from "./components/Subscribe";
import Title from "./components/Title";
import gearImage from "./images/gear.svg";
import { Main } from "./view";

export default function ComingSoon() {
  const { countdown, gear, title, description, subscribe } = pages.comingSoon.sections;

  return (
    <Main>
      <Countdown futureDate={countdown.futureDate} />
      <Gear src={gearImage} alt={gear.alt} />
      <Title text={title.text} />
      <Description description={description.text} />
      <Subscribe placeholder={subscribe.placeholder} buttonText={subscribe.buttonText} />
    </Main>
  );
}
