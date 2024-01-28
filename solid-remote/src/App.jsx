import { render } from "solid-js/web";
import Footer from "./components/Footer";
import "./index.scss";

const App = () => (
  <div class="mt-10 text-3xl mx-auto">
    <Footer />
  </div>
);
render(App, document.getElementById("app"));