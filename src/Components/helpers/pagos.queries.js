const pagosBack = import.meta.env.VITE_BACKEND_API_PAGOS;

export const crearOrdenCarrito = async (user, productosCarrito) => {
  try {
    const response = await fetch(`${pagosBack}/crear-orden-carrito`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, productosCarrito }),
      credentials: "include",
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.mensaje || "Error al procesar la orden de pago");
    }
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error en crearOrdenCarrito:", error);
    throw error;
  }
};
