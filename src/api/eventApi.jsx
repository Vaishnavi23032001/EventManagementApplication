import axios from "axios";

const apiurl = process.env.REACT_APP_API_URL;

export const getAllEvent = async () => {
  try {
    const response = await axios.get(apiurl + "/api/events", {
      headers: {
        "ngrok-skip-browser-warning": "111",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addEvent = async (eventsData) => {
  try {
    const response = await axios.post(apiurl + "/api/events", eventsData);
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
      eventData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const response = await axios.delete(apiurl + "/api/events/" + eventId);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const eventstatus = async() => {

};

export const adminprofile = async() => {

};
