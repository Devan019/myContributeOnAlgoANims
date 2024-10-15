import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function isLogin() {
    const navigate = useNavigate();
    useEffect(() => {

        if (!localStorage.getItem("UserName")) {
            navigate("/home");
        }
    }, [navigate]);

    return null;
}