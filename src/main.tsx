import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PointerFollow from "./portfolio/component/pointerFollow.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <App /> <PointerFollow />
  </>
);
