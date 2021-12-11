import { pages } from "data/db.json";
import { useState } from "react";
import { Countdown, Description, Gear, Subscribe, Title } from "./components";
import gearImage from "./images/gear.svg";
import { Main } from "./view";

export default function ComingSoon() {
  const [notify, setNotify] = useState({ visible: false, level: "error", icon: null });
  const [loading, setLoading] = useState(false);

  const showNotification = (level, icon) => {
    setNotify({ visible: true, level, icon });
    setTimeout(() => setNotify({ visible: false, level: "error", icon: null }), 5000);
  };

  const { countdown, gear, title, description, subscribe, notification } = pages.comingSoon.sections;

  return (
    <Main>
      <Countdown futureDate={countdown.futureDate} />
      <Gear src={gearImage} alt={gear.alt} loading={loading} />
      <Title text={title.text} />
      <Description
        text={description.text}
        message={notification[notify.level].message}
        icon={notify.icon}
        alt={notification[notify.level].alt}
        visible={notify.visible}
        bgColor={notification[notify.level].bgColor}
      />
      <Subscribe
        placeholder={subscribe.placeholder}
        buttonText={subscribe.buttonText}
        setLoading={setLoading}
        showNotification={showNotification}
      />
    </Main>
  );
}
