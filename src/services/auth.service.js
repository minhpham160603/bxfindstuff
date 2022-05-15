import axios from "axios";
const API_URL = "https://ancient-hamlet-39428.herokuapp.com/api/auth/";
const register = (username, email, password, name, appartment, promotion) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
    name,
    appartment,
    promotion,
  });
};
const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default AuthService;
