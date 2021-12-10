import axios from "axios";
import { useState } from "react";
import { Button, Form, Input } from "./view";

export default function Subscribe({ placeholder, buttonText }) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email) {
      try {
        const { data } = await axios.get(`https://amir-personal-api.herokuapp.com/api/memberAdd?email=${email}`);
        console.log(data);
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
