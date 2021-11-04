import { useState } from "react";
import { Button, Form, Input } from "./view";

export default function Subscribe({ placeholder, buttonText }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email) {
      fetch(`https://amir-personal-api.herokuapp.com/api/memberAdd?email=${email}`)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
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
