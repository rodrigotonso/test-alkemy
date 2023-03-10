import React, { useEffect, useState } from "react";
import { authLogin } from "../../services/auth";
import { useForm } from "react-hook-form";

const FormLogin = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const emailWatch = watch('email') === 'hola';
    
    useEffect(()=>{
        console.log('PASAS DE UNA')
    },[emailWatch])
    
    const onSubmit = async (data) => {
        const accessToken = await authLogin(data);
        localStorage.setItem("token", accessToken);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="email" {...register("email", { required: true })} />
            {errors?.email && <p>SOY REQUERIDO</p>}
            <input
                type="password"
                name={"password"}
                {...register("password")}
            />
            <button type="submit">Envíar</button>
        </form>
    );
};

export default FormLogin;
