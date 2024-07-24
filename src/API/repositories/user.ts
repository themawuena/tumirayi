/* eslint-disable import/no-anonymous-default-export */
import http from "../api/http";
import Base from "./base";
import axios from "axios";
import { API_ENDPOINT } from "../api/endpoints";
import { Interface } from "readline";

// User Repository
class User extends Base {
  me = async (url: string) => {
    return this.http(url, "get");
  };

  getUser = async (url: string) => {
    return this.find(url);
  };

  login = async (variables: LoginProps) => {
    return axios.post(API_ENDPOINT.LOGIN_URL, variables);
  };

  logout = async (url: string) => {
    return http.post(url);
  };
}

export default new User();
