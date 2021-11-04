import { useState } from "react";

export default function Subscribe({ placeholder, buttonText }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setEmail(event.target.value.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder={placeholder} value={email} onChange={handleChange} />
      <button type="submit">{buttonText}</button>
    </form>
  );
}
