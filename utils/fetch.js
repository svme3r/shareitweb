import axios from "axios";

export const postRequest = async (api, body) => {
  const res = await fetch(api, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: token,
    },
    body: JSON.stringify(body),
  });
  return await res;
};

export const getRequest = async (api, type) => {
  const res = await fetch(api, {
    method: type,
    headers: {
      //   Authorization: localStorage.getItem('token'),
      "Content-Type": "application/json",
      //   Accept: "*/*"
    },
  });
  return await res.json();
};
//   "Access-Control-Allow-Origin": "*"

export const putRequest = async (api, body) => {
  const res = await fetch(api, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },

    body: JSON.stringify(body),
  });
  return await res.json();
};

export const deleteRequest = async (api, body) => {
  const res = await fetch(api, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },

    body: JSON.stringify(body),
  });
  return await res.json();
};

export const getDataByBody = async (api, body) => {
  const res = await axios.request({
    method: "POST",
    url: api,
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    data: body,
  });
  return await res.data;
};

export const getDataByBodyParams = async (api, body) => {
  const res = await axios.request({
    method: "GET",
    url: api,
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    params: body,
  });
  return await res.data;
};
