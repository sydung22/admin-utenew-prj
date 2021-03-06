import axios from "axios";
const AuthService = {
  initAuthHeader() {
    const token = localStorage.getItem("token");
    if (token && token !== "") {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      axios.defaults.headers.common.Authorization = ``;
    }
  },

  resetHeader() {
    localStorage.setItem("token", "");
    this.initAuthHeader();
  },

  async register(user) {
    const res = await axios.post("http://127.0.0.1:8080/api/auth/register", user);
    if (res.status === 200) {
      // localStorage.setItem('token', res.data.access_token)
      // localStorage.setItem('user', JSON.stringify(res.data.user))
      // this.initAuthHeader()

      return res.data;
    } else {
      window.console.log("ko thành công");
    }
    return res.data;
  },
  async login(user) {
    const res = await axios.post("http://127.0.0.1:8080/api/auth/login", user);

    if (res && res.status === 200) {
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      this.initAuthHeader();
      return res.data;
    } else {
      window.console.log("ko thành công");
    }
    // return res.data
  },
  async changePassword(data) {
    const res = await axios.post("http://127.0.0.1:8080/api/auth/change-pass", data);
    if (res.status === 200) {
      this.initAuthHeader();
      return res.data;
    } else {
      window.console.log("ko thành công");
    }
    return res.data;
  },
  async updateProfile(data) {
    const res = await axios.post(
      "http://127.0.0.1:8080/api/auth/update-profile",
      data
    );

    if (res.status === 201) {
      this.initAuthHeader();
      return res.data;
    } else {
      window.console.log("ko thành công");
    }

    return res.data;
  },
  async deleteHashtag(id) {
    const res = await axios.delete(`http://127.0.0.1:8080/api/hashtag/${id}`);

    if (res.status === 200) {
      this.initAuthHeader();
      return res.data;
    } else {
      window.console.log("ko thành công");
    }

    return res.data;
  },
  async comment(data) {
    try {
      this.initAuthHeader();
      const res = await axios.post("http://127.0.0.1:8080/api/comment", data);
      if (res.status === 201) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async reply(data) {
    try {
      this.initAuthHeader();
      const res = await axios.post("http://127.0.0.1:8080/api/reply", data);
      if (res.status === 201) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async chooseVideo(data, config) {
    try {
      this.initAuthHeader();
      const res = await axios.post(
        "http://127.0.0.1:8080/api/video/store-url",
        data,
        config
      );
      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async uploadVideo(data) {
    try {
      this.initAuthHeader();
      const res = await axios.post(
        "http://127.0.0.1:8080/api/video/save-video",
        data
      );
      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async updateVideo(data, id) {
    try {
      this.initAuthHeader();
      const res = await axios.put(`http://127.0.0.1:8080/api/video/${id}`, data);
      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async deleteVideo(id) {
    try {
      this.initAuthHeader();
      const res = await axios.delete(`http://127.0.0.1:8080/api/video/${id}`);
      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async deleteComment(id) {
    try {
      this.initAuthHeader();
      const res = await axios.delete(`http://127.0.0.1:8080/api/comment/${id}`);
      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async createHashtag(data) {
    try {
      this.initAuthHeader();
      const res = await axios.post("http://127.0.0.1:8080/api/hashtag", data);
      if (res.status === 201) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async sendReport(data) {
    try {
      this.initAuthHeader();
      const res = await axios.post("http://127.0.0.1:8080/api/report", data);
      if (res.status === 201) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async follow(data) {
    try {
      this.initAuthHeader();
      const res = await axios.post("http://127.0.0.1:8080/api/follow", data);
      if (res.status === 201) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async like(data) {
    try {
      this.initAuthHeader();
      const res = await axios.post("http://127.0.0.1:8080/api/like", data);
      if (res.status === 201) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async video() {
    try {
      this.initAuthHeader();
      const res = await axios.get("http://127.0.0.1:8080/api/video");
      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async report() {
    try {
      this.initAuthHeader();
      const res = await axios.get("http://127.0.0.1:8080/api/report");
      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async admin() {
    try {
      this.initAuthHeader();
      const res = await axios.get("http://127.0.0.1:8080/api/admin");
      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async videoNotFollow() {
    try {
      this.initAuthHeader();
      const res = await axios.get(
        "http://127.0.0.1:8080/api/video/me?is_following=0"
      );
      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async videoIsFollow() {
    try {
      this.initAuthHeader();
      const res = await axios.get(
        "http://127.0.0.1:8080/api/video/me?is_following=1"
      );
      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async user() {
    try {
      const res = await axios.get("http://127.0.0.1:8080/api/user");
      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async deleteReport(id) {
    try {
      this.initAuthHeader();
      const res = await axios.delete(`http://127.0.0.1:8080/api/report/${id}`);

      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async deleteUser(id) {
    try {
      this.initAuthHeader();
      const res = await axios.delete(`http://127.0.0.1:8080/api/user/${id}`);

      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async hashtag() {
    try {
      this.initAuthHeader();
      const res = await axios.get(`http://127.0.0.1:8080/api/hashtag`);

      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async getProfile() {
    try {
      this.initAuthHeader();
      const res = await axios.get(`http://127.0.0.1:8080/api/auth/user-profile`);

      if (res.status === 200) {
        return res.data;
      } else {
        this.resetHeader();

        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      this.resetHeader();

      window.console.log("ko thành công");
    }
  },
  async search(data) {
    try {
      this.initAuthHeader();
      const res = await axios.get(
        `http://127.0.0.1:8080/api/search?keyword=${data}`
      );

      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async detailsUser(id) {
    try {
      this.initAuthHeader();
      const res = await axios.get(`http://127.0.0.1:8080/api/user/${id}`);

      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async loadVideoById(id) {
    try {
      this.initAuthHeader();
      const res = await axios.get(`http://127.0.0.1:8080/api/video/${id}`);

      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async loadVideoByUserId(id) {
    try {
      this.initAuthHeader();
      const res = await axios.get(
        `http://127.0.0.1:8080/api/video/params?user_id=${id}`
      );

      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async loadVideoByHashtag(data) {
    try {
      this.initAuthHeader();
      const res = await axios.get(
        `http://127.0.0.1:8080/api/video/params?hashtag[0]=${data}`
      );

      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },
  async loadVideoLiked() {
    try {
      this.initAuthHeader();
      const res = await axios.get(`http://127.0.0.1:8080/api/video/liked`);

      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },

  async loadCommentById(id) {
    try {
      this.initAuthHeader();
      const res = await axios.get(
        `http://127.0.0.1:8080/api/comment?video_id=${id}`
      );

      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },

  async loadReplyById(id) {
    try {
      this.initAuthHeader();
      const res = await axios.get(
        `http://127.0.0.1:8080/api/reply?comment_id=${id}`
      );

      if (res.status === 200) {
        return res.data;
      } else {
        window.console.log("ko thành công");
      }
      return res.data;
    } catch (e) {
      window.console.log("ko thành công");
    }
  },

  //   logout: async function () {
  //     const res = await axios.post('logout')
  //     if (res.data.code === 200) {
  //       localStorage.setItem('sydungSportToken', '')
  //       return res.data
  //     } else {
  //       console.log('data not ok')
  //     }
  //   },
};

export default AuthService;
