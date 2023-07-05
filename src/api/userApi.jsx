import axios from "axios";

const apiurl = process.env.REACT_APP_API_URL;

export const login = async (userdata) => {
  try {
    const response = await axios.post(apiurl + "/api/login", userdata);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (data) => {
  try {
    const response = await axios.post(apiurl + "/api/users", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const userprofile = async(userId) => {
  try {
    const response =await axios.get(apiurl + "/api/users/" + userId, {
      headers: {
        'ngrok-skip-browser-warning': '111'
      }
     });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updategetprofile = async(userId) => {
  try {
    const response =await axios.get(apiurl + "/api/users/" + userId, {
      headers: {
        'ngrok-skip-browser-warning': '111'
      }
     });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateprofile = async(userId,data) => {
  try {
    const response = await axios.patch(apiurl + "/api/users/" + userId, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const logout = async() => {

};

export const userlist = async() => {
  try {
    const response =await axios.get(apiurl + "/api/users" , {
      headers: {
        'ngrok-skip-browser-warning': '111'
      }
     });
    return response.data;
  } catch (error) {
    throw error;
  }
};

