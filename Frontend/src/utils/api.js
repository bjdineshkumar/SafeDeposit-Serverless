//All the apis and axios configuration
 //Author: Divyashree Bangalore Subbaraya (B00875916)
const axios = require("axios");

const port = process.env.PORT || 8080;

const backEndUrl =
  process.env.REACT_APP_BACKEND_HOSTNAME || "http://localhost:8080";

export const awsCredentials = {
  "accessKeyId": process.env.REACT_APP_ACCESS_KEY_ID,
  "secretAccessKey": process.env.REACT_APP_SECRET_ACCESS_KEY,
  "sessionToken": process.env.REACT_APP_SESSION_TOKEN,
   "region": "us-east-1"
}

const domain = `${backEndUrl}`;

const axiosInstance = axios.create({
  baseURL: domain,
});


// Upload image API
export function saveImage(data, header) {
  return axiosInstance.post(`/gcp/upload`, data, header);
}

// Publish message API
export function publishMessage(data) {
  return axiosInstance.post(`/gcppubsubmessage/message/publishMessage`, data);
}


// Pull Message API
export function pullMessage(data) {
  return axiosInstance.post(`/gcppubsubmessage/message/pullMessage`, data);
}