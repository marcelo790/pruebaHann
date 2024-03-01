import axios from "axios";

const clientAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/`
});

clientAxios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); // Suponiendo que el token JWT se almacena en el almacenamiento local
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Agregar el token al encabezado de autorización
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default clientAxios;