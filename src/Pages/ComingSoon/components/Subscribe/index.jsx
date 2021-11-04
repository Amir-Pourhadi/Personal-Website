export default function Subscribe({ placeholder, buttonText }) {
  return (
    <form>
      <input type="email" name="email" placeholder={placeholder} />
      <button type="submit">{buttonText}</button>
    </form>
  );
}
