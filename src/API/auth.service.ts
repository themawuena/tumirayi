import { log } from "console";
import { getSession } from "next-auth/react";

class AuthService {
  token: any;
  isLogin: any;
  tokenName = "eatchat-token";
  r_token = "refresh-eatchat-token";

  signout() {
    return this.removeToken();
  }

  async signoutUser() {}

  loggedIn() {
    const token = this.getToken();
    return !!token;
  }

  async getToken() {
    try {
      let result: any = await getSession();
      return result["apiToken"];
    } catch (e) {
      console.log(e, "Error getting");
      return false;
    }
  }

  async getOrganisationKey() {
    try {
      let result: any = await getSession();
      return result["currentOrganisationKey"] || null;
    } catch (e) {
      console.log(e, "Error getting");
      return false;
    }
  }

  async setToken(token: any) {}

  async getRefreshToken() {}

  async setRefreshToken(token: any) {}

  async removeToken() {}
}

const authService = new AuthService();

export default authService;
