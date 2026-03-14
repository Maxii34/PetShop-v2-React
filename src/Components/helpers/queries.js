const userBack = import.meta.env.BACKEND_API_USUARIOS;

// 1. Iniciar Sesión
export const login = async (usuario) => {
  try {
    const response = await fetch(userBack, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
      credentials: "include",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// 2. Crear Usuario
export const crearUsuario = async (usuarioNuevo) => {
  try {
    const response = await fetch(userBack, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioNuevo),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// 3. Listar Usuarios
export const listarUsuarios = async () => {
  try {
    const response = await fetch(userBack, {
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

// 4. Eliminar Usuario
export const eliminarUsuario = async (id) => {
  try {
    const response = await fetch(`${userBack}/${id}`, {
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

// 5. Actualizar Usuario
export const actualizarUsuario = async (id, datosActualizados) => {
  try {
    const response = await fetch(`${userBack}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
      credentials: "include",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// 6. Obtener un Usuario por ID
export const obtenerUsuario = async (id) => {
  try {
    const response = await fetch(`${userBack}/${id}`, {
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
