import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Hello</h1>
      <Link to={"/about"}>
        <p>Go to About</p>
      </Link>
      <Link to={"/clicker"}>
        <p>Go to Clicker</p>
      </Link>
    </>
  );
}
