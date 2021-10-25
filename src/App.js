import './App.css';

import Navbar from "./Lab1-layout/navbar.js";
import Header from "./Lab1-layout/header.js";
import Services_Section from "./Lab1-layout/services-section.js";
import Work_Section from "./Lab1-layout/work-section.js";

function App() {
  return (
    <div className="App container-fluid p-0">
      <Navbar />
      <Header />
      <Services_Section />
      <Work_Section />
    </div>
  );
}

export default App;
