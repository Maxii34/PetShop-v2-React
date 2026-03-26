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
    formData.append("nombre", producto.nombre || "");
    formData.append("descripcion", producto.descripcion || "");
    formData.append("precio", producto.precio || "");
    formData.append("categoria", producto.categoria || "");
    formData.append("stock", producto.stock || "");
    formData.append("marca", producto.marca || "");
    formData.append("tipoAnimal", producto.tipoAnimal || "");
    formData.append("ingrediente", producto.ingrediente || "");
    formData.append("caracteristica", producto.caracteristica || "");
    formData.append("enOferta", producto.enOferta || false);
    formData.append("esNuevo", producto.esNuevo || false);
    formData.append("destacado", producto.destacado || false);

    if (producto.detalles) {
      Object.keys(producto.detalles).forEach((key) => {
        formData.append(`detalles[${key}]`, producto.detalles[key]);
      });
    }

    if (producto.imagenes && producto.imagenes.length > 0) {
      producto.imagenes.forEach((imagen) => {
        formData.append("imagenes", imagen);
      });
    }

    const response = await fetch(productBack, {
      method: "POST",
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

export const obtenerProducto = async (id) => {
  try {
    const response = await fetch(`${productBack}/${id}`, {
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

export const editarProductos = async (id, producto) => {
  try {
    const formData = new FormData();

    formData.append("nombre", producto.nombre || "");
    formData.append("descripcion", producto.descripcion || "");
    formData.append("precio", producto.precio || "");
    formData.append("categoria", producto.categoria || "");
    formData.append("stock", producto.stock || "");
    formData.append("marca", producto.marca || "");
    formData.append("tipoAnimal", producto.tipoAnimal || "");
    formData.append("ingrediente", producto.ingrediente || "");
    formData.append("caracteristica", producto.caracteristica || "");
    formData.append("enOferta", producto.enOferta || false);
    formData.append("esNuevo", producto.esNuevo || false);
    formData.append("destacado", producto.destacado || false);

    if (producto.detalles) {
      Object.keys(producto.detalles).forEach((key) => {
        formData.append(`detalles[${key}]`, producto.detalles[key]);
      });
    }

    if (producto.imagenes && producto.imagenes.length > 0) {
      producto.imagenes.forEach((imagen) => {
        formData.append("imagenes", imagen);
      });
    }

    const response = await fetch(`${productBack}/${id}`, {
      method: "PUT",
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