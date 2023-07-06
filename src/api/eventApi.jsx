import axios from "axios";

const apiurl = process.env.REACT_APP_API_URL;
const token = localStorage.getItem("token");
export const getAllEvent = async () => {
  try {
    const response = await axios.get(apiurl + "/api/events", {
      headers: {
        "ngrok-skip-browser-warning": "111",
        "Authorization": token,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addEvent = async (eventsData) => {
  try {
    const response = await axios.post(apiurl + "/api/events", eventsData,{
      headers: {
        'ngrok-skip-browser-warning': '111', 
        "Authorization": token,
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEvent = async (eventId) => {
  try {
    const response = await axios.get(apiurl + "/api/events/" + eventId, {
      headers: {
        "ngrok-skip-browser-warning": "111",
        "Authorization": token,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEvent = async (eventId, eventData) => {
  try {
    const response = await axios.put(
      apiurl + "/api/events/" + eventId,
      eventData,{
        headers: {
          'ngrok-skip-browser-warning': '111', 
          "Authorization": token,
        }
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const response = await axios.delete(apiurl + "/api/events/" + eventId,{
      headers: {
        'ngrok-skip-browser-warning': '111', 
        "Authorization": token,
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const adminprofile = async(userId) => {
  try {
    const response =await axios.get(apiurl + "/api/users/" + userId, {
      headers: {
        'ngrok-skip-browser-warning': '111', 
        "Authorization": token,
      }
     });
    return response.data;
  } catch (error) {
    throw error;
  }
};
