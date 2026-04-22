const userBack = import.meta.env.VITE_BACKEND_API_USUARIOS;

// 1. Iniciar Sesión
export const login = async (usuario) => {
  try {
    const response = await fetch(`${userBack}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
      credentials: "include",
    });
    const result = await response.json();

    if (result.ok && result.token) {
      localStorage.setItem("token", result.token);
    };

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
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(userBack, {
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

// 4. Eliminar Usuario
export const eliminarUsuario = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${userBack}/${id}`, {
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

// 5. Actualizar Usuario
export const actualizarUsuario = async (id, datosActualizados) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${userBack}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
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
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${userBack}/${id}`, {
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

// 7. Cerrar Sesión
export const Logout = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${userBack}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      credentials: "include",
    });
    const result = await response.json();
    
    // Al cerrar sesión, también limpiamos el token local
    localStorage.removeItem("token");
    
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
