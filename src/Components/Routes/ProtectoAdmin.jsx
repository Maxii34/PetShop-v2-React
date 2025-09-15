import { Navigate, Outlet } from "react-router";

const ProtectorAdmin = ({usuarioLogueado}) => {
    // si no estoy logueado?
    if(!usuarioLogueado){
        return <Navigate to={"/"} />
    }
    return <Outlet />
};

export default ProtectorAdmin;