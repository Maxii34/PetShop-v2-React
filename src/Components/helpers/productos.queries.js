const productBack = import.meta.env.VITE_BACKEND_API_PRODUCTOS;

export const listarProductos = async () => {
  try {
    const response = await fetch(productBack, {
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

export const eliminarProducto = async (id) => {
  try {
    const response = await fetch(`${productBack}/${id}`, {
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

export const crearProducto = async (producto) => {
  try {
    const response = await fetch(productBack, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
      credentials: "include",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};