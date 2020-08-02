import React from "react";
import "./home.css"
import Highlight from "../HomeHighlights/Highlights";
import Footer from "../Footer/footer"

const Home = () => (
  <div>
    <div className="row justify-content-center homecontainer">
      <div className="col-md-12">
        <h1>Laureni's portfolio</h1>
      </div>     
    </div>
    <Highlight />
    <Footer />
  </div>
  
);

export default Home;
