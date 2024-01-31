import { render } from "solid-js/web";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import "./index.scss";

const App = () => (
  <div class="mt-10 flex flex-col justify-start items-center">
    <UserProfile />
    <br />
    <Footer />
  </div>
);
render(App, document.getElementById("app"));
