import axios from "axios";

export const actionRegister =async (value) =>{
  return await axios.post('http://localhost:8000/auth/register', value);
};

export const actionLogin =async (value) =>{
  return await axios.post('http://localhost:8000/auth/login', value);
};

// export const actionRegister2 = async (value) =>
// await axios.post("http://localhost:8000/auth/register",value);