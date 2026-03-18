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
