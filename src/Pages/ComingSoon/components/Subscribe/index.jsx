import axios from "axios";
import { useState } from "react";
import checkMarkIcon from "./images/checkMark.svg";
import exclamationMarkIcon from "./images/exclamationMark.svg";
import xMarkIcon from "./images/xMark.svg";
import { Button, Form, Input } from "./view";

export default function Subscribe({ placeholder, buttonText, showNotification }) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email) {
      try {
        const { data } = await axios.get(`https://amir-personal-api.herokuapp.com/api/memberAdd?email=${email}`);

        if (data.status === "subscribed") showNotification("success", checkMarkIcon);
        else if (data.title === "Member Exists") showNotification("warning", exclamationMarkIcon);
        else showNotification("error", xMarkIcon);
      } catch (error) {
        console.error(error);
      } finally {
        setEmail("");
      }
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value.trim());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="email" name="email" placeholder={placeholder} value={email} onChange={handleChange} />
      <Button type="submit">{buttonText}</Button>
    </Form>
  );
}
