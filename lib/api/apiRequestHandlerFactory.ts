import { getSession } from "@/auth"
import { type AxiosRequestConfig, type AxiosResponse } from "axios"

import axiosInstance from "@/lib/api/axiosInstance"

export default function apiRequestHandlerFactory<D>({
  requestConfig,
}: {
  requestConfig: AxiosRequestConfig<D>
}) {
  return async function apiRequestHandler() {
    let response: AxiosResponse

    try {
      const session = await getSession()
      // console.log("Session:", session)
      const idToken = "asd"
      const accessToken = "asdasd"
      // console.log("ID Token:", idToken)
      // console.log("Access Token in factory :", accessToken)
      const email = session?.user?.email

      // Add token and userId to headers
      requestConfig.headers = {
        ...requestConfig.headers,
        Authorization: `Bearer ${accessToken}`,
        "X-ID-Token": idToken,
        "X-User-Email": email,
      }

      // log request headers
      // console.log("Request headers:", requestConfig.headers)

      response = await axiosInstance(requestConfig)
    } catch (e) {
      const error = e as Error
      console.error("API request failed:", error)
      return
    }

    return response.data
  }
}
