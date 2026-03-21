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
    // Crear un FormData para enviar archivos e información
    const formData = new FormData();
    
    // Agregar campos de texto
    formData.append("nombre", producto.nombre);
    formData.append("descripcion", producto.descripcion);
    formData.append("precio", producto.precio);
    formData.append("categoria", producto.categoria);
    formData.append("stock", producto.stock);
    formData.append("marca", producto.marca);
    formData.append("tipoAnimal", producto.tipoAnimal);
    
    // Enviar detalles como objeto (no como string JSON)
if (producto.detalles) {
  // Enviar cada propiedad de detalles por separado
  Object.keys(producto.detalles).forEach((key) => {
    formData.append(`detalles[${key}]`, producto.detalles[key]);
  });
}
    
    // Agregar imágenes (archivos)
    // Importante: usar "imagenes" porque así lo espera multer en tu ruta
    if (producto.imagenes && producto.imagenes.length > 0) {
      producto.imagenes.forEach((imagen) => {
        formData.append("imagenes", imagen); // imagen es un File object
      });
    }

    const response = await fetch(productBack, {
      method: "POST",
      // NO incluyas "Content-Type": "application/json"
      // FormData lo maneja automáticamente con multipart/form-data
      body: formData,
      credentials: "include",
    });
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};