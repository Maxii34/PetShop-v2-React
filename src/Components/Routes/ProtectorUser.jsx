import { Navigate, Outlet } from "react-router";

const ProtectorUser = ({usuarioLogueado}) => {
    // si no estoy logueado?
    if(!usuarioLogueado || usuarioLogueado.rol !== "usuario"){
        return <Navigate to={"/"} />
    }
    return <Outlet />
};

export default ProtectorUser;
