import { redirect } from "next/navigation"
import axios from "axios"

import { apiBase } from "./apiBase"

const axiosInstance = axios.create({
  baseURL: `${apiBase()}`,
  timeout: 10000,
  headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before the request is sent
    const token = "authToken" // TODO Retrieve auth token from cookies
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    // Handle the error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Do something with the response data
    console.log("Response Data:", response.data)
    return response
  },
  function (error) {
    // Handle the response error
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error
      console.error("Unauthorized, logging out...")
      redirect("/login")
      // Perform any logout actions or redirect to login page
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
