import http from "../api/http";

export default class Base {
  http = async (
    url: string,
    type: string,
    variables?: undefined,
    options?: undefined
  ) => {
    // @ts-ignore
    return http[type](url, variables, options);
  };
  all = async (url: any) => {
    return this.http(url, "get");
  };

  find = async (url: string) => {
    return this.http(url, "get");
  };

  create = async (url: string, variables: any) => {
    return this.http(url, "post", variables);
  };

  update = async (url: any, variables: any) => {
    return this.http(url, "put", variables);
  };

  delete = async (url: any) => {
    return this.http(url, "delete");
  };
}
