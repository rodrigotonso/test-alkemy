import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

const Shop = () => {
    const navigate  = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem("token");
        navigate('/login')
    };
    return (
        <>
            <div>Shop</div>
            <Button text={"Logout"} onClickAction={handleLogOut} />
        </>
    );
};

export default Shop;
