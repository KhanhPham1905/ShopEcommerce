// import { CredentialsProvider } from 'next-auth/providers';

import axios from "axios";
import { getCookie } from 'cookies-next'

const urlGiaoViec = process.env.NEXT_PUBLIC_URL_GV
const urlQLC = process.env.NEXT_PUBLIC_URL_QLC

export const getCurrentToken = () => {
  let token = ''
  const currentAccessToken = getCookie('inForUser')
  if (currentAccessToken) {
    token = currentAccessToken?.access_token || JSON.parse(currentAccessToken)?.access_token
    
  }
  return token
}

export default async (req, res) => {
  const { username } = req.body;

  // Thực hiện xác thực tài khoản công ty
  if (username === 'company' ) {
    res.status(200).json({ id: 1, name: 'Công Ty', role: 'company' });
  }
  // Thực hiện xác thực tài khoản nhân viên
  else if (username === 'employee' ) {
    res.status(200).json({ id: 2, name: 'Nhân Viên', role: 'employee' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};
export const LOGIN = async (url,body) => {
  //const currentToken = getCurrentToken()
  // console.log(currentToken)
  try {
    const res = await axios.post(`${url}`, body)
    if (res?.status === 200) {
      return res?.data?.data
    } else {
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
export const POST = async (url,body) => {
  const currentToken = getCurrentToken()
  const config = {
    headers: { Authorization: `Bearer ${currentToken}` },
  }
  try {
    const res = await axios.post(`${urlGiaoViec}/${url}`, body, config)
    if (res?.status === 200) {
      return res?.data?.data
    } else {
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

export const GET = async (url) => {
  const currentToken = getCurrentToken()
  const config = {
    headers: { Authorization: `Bearer ${currentToken}` },
  }
  try {
    const res = await axios.get(`${urlGiaoViec}/${url}`, config)
    if (res?.status === 200) {
      return res?.data?.data
    } else {
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
export const POST_PARAM = async (url,body,params) => {
  const currentToken = getCurrentToken()
  const config = {
    headers: { Authorization: `Bearer ${currentToken}` }
  }

  try {
    const res = await axios.post(`${urlGiaoViec}/${url}/${params}`, body, config)
    if (res?.status === 200) {
      return res?.data?.data
    } else {
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
export const POST_QLC = async (url,body) => {
  const currentToken = getCurrentToken()
  const config = {
    headers: { Authorization: `Bearer ${currentToken}` },
  }
  try {
    const res = await axios.post(`${urlQLC}/${url}`, body, config)
    if (res?.status === 200) {
      return res?.data?.data
    } else {
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

