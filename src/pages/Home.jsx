import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    console.log(location);
    return <div>Home</div>;
};

export default Home;
