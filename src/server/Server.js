import axios from "axios";

export class Server {
  static getAllUsers = async (url) => {
    try {
      let res = await axios({
        method: "get",
        url,
      });

      if (res.status !== 200) {
        throw new Error(JSON.stringify(res.data));
      }
      return res.data;
    } catch (e) {
      return e.message;
    }
  };

  static signUp = async (url, data) => {
    try {
      let res = await axios({
        method: "post",
        url,
        data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status !== 201) {
        throw new Error(JSON.stringify(res.data));
      }
      return { id: res?.data?.id, login: res?.data?.login };
    } catch (e) {
      return e.message;
    }
  };

  static signIn = async (url, data) => {
    try {
      let res = await axios({
        method: "post",
        url,
        data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status !== 201) {
        throw new Error(JSON.stringify(res.data));
      }
      return { id: res?.data?.id, login: res?.data?.login };
    } catch (e) {
      return e.message;
    }
  };
}
