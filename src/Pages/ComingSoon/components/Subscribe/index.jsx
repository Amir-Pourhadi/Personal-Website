import { useState } from "react";
import { Button, Form, Input } from "./view";

export default function Subscribe({ placeholder, buttonText }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
