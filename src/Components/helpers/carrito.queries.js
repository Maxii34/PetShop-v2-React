const cartBack = import.meta.env.VITE_BACKEND_API_CARRITO;


export const crearCarrito = async (carrito) => {
    const token = localStorage.getItem("token");
    try {
        const response = await fetch(cartBack, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(carrito),
            credentials: "include",
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const listarCarrito = async () => {
    // 1. Extraemos el token del localStorage
    const token = localStorage.getItem("token");

    try {
        const response = await fetch(cartBack, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // 2. Lo enviamos en el header Authorization
                "Authorization": `Bearer ${token}` 
            },
            // Si usas tokens en localStorage, "credentials: include" 
            // no es estrictamente necesario a menos que uses cookies.
            credentials: "include", 
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.log("Error al listar carrito:", error);
        return null;
    }
};

export const obtenerCarrito = async () => {
    const token = localStorage.getItem("token");
    try {
        const response = await fetch(cartBack, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            credentials: "include",
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const eliminarCarrito = async (id) => {
    const token = localStorage.getItem("token");
    try {
        const response = await fetch(`${cartBack}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            credentials: "include",
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};