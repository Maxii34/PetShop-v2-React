const cartBack = import.meta.env.VITE_BACKEND_API_CARRITO;


export const crearCarrito = async (carrito) => {
    try {
        const response = await fetch(cartBack, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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
    try {
        const response = await fetch(cartBack, {
            method: "GET",
            credentials: "include",
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const obtenerCarrito = async () => {
    try {
        const response = await fetch(cartBack, {
            method: "GET",
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
    try {
        const response = await fetch(`${cartBack}/${id}`, {
            method: "DELETE",
            credentials: "include",
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};