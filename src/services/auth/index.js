import http from "../axios-config";

export const loginUser = async (data) => http.post('/auth/signin', data)