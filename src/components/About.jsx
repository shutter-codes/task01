import React, { useState, useEffect } from "react";
import axios from "axios";

function About() {
  const [aboutContent, setAboutContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/about");
        console.log(response.data);
        setAboutContent(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1 className="text-3xl text-white my-6 py-3 font-bold flex justify-center items-center">
        About US
      </h1>
      <p className="text-lg my-6 py-3 flex items-center justify-center text-center">
        {aboutContent || "Loading..."}
      </p>
    </div>
  );
}

export default About;
