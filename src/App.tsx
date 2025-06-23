import "./App.css";
import { AppbarComponent } from "./portfolio/appbar/appbar";
import { MainComponent } from "./portfolio/main/mainComponent";
import { SidebarComponent } from "./portfolio/sidebar/sidebar";

function App() {
  return (
    <div className="layout">
      <div className="appbar">
        <AppbarComponent />
      </div>
      <div className="sidebar">
        <SidebarComponent />
      </div>
      <div className="main">
        <MainComponent />
      </div>
    </div>
  );
}
export default App;
