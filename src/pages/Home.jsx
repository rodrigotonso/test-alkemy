import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    console.log(process.env.REACT_APP_KEYFACEBOOK)
    console.log(process.env.REACT_APP_KEY)
    console.log(location);
    return <div>Home</div>;
};

export default Home;
