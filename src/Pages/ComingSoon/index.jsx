import Countdown from "./components/Countdown";
import Gear from "./components/Gear";
import { Main } from "./view";

export default function ComingSoon() {
  return (
    <Main>
      <Countdown />
      <Gear />
    </Main>
  );
}
