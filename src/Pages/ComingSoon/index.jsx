import { pages } from "data/db.json";
import { Countdown, Description, Gear, Subscribe, Title } from "./components";
import gearImage from "./images/gear.svg";
import { Main } from "./view";

export default function ComingSoon() {
  const { countdown, gear, title, description, subscribe } = pages.comingSoon.sections;

  return (
    <Main>
      <Countdown futureDate={countdown.futureDate} />
      <Gear src={gearImage} alt={gear.alt} />
      <Title text={title.text} />
      <Description text={description.text} />
      <Subscribe placeholder={subscribe.placeholder} buttonText={subscribe.buttonText} />
    </Main>
  );
}
