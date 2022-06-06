<template>
  <div class="d-flex justify-center align-center bg-section">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
          <v-card class="elevation-6">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <h2
                        class="text-center text-uppercase mb-3"
                        style="color:rgb(16, 37, 158)"
                      >
                        Đăng Nhập
                      </h2>
                      <h5 class="text-center grey--text">
                        Sử dụng tài khoản đã được cấp để vào website
                        <br />
                      </h5>
                      <v-row
                        align="center"
                        justify="center"
                        v-on:keyup.enter="login"
                      >
                        <v-col cols="12" sm="8">
                          <v-text-field
                            label="Email"
                            outlined
                            dense
                            :color="colorEmail"
                            autocomplete="false"
                            class="mt-12 mb-1"
                            v-model="user.email"
                            @input="inputEmail"
                          />
                          <span class="error__email" v-show="emailShow">{{
                            emailErrorText
                          }}</span>

                          <div class="input-container">
                            <v-text-field
                              label="Mật khẩu"
                              outlined
                              dense
                              :color="colorPassword"
                              autocomplete="false"
                              :type="choose"
                              v-model="user.password"
                              @input="inputPassword"
                            />
                            <v-icon
                              class="material-icons visibility"
                              @click="showPassword"
                              >{{ visibility }}</v-icon
                            >
                          </div>
                          <span class="error_password" v-show="passShow">{{
                            passwordErrorText
                          }}</span>
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox
                                label="Lưu tài khoản"
                                class="mt-n1"
                                color="rgb(16, 37, 158)"
                                @click="setCookie"
                                v-model="checkBox"
                              >
                              </v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5" class="px-0">
                              <!-- <span class="caption blue--text float-right"
                                >Forgot password</span
                              > -->
                              <template>
                                <v-row
                                  justify="center"
                                  style="text-align: end;max-width: 100%;"
                                  class=""
                                >
                                  <a
                                    color="primary"
                                    dark
                                    @click.stop="dialog = true"
                                    class="fg-pass"
                                  >
                                    Quên mật khẩu
                                  </a>

                                  <v-dialog v-model="dialog" max-width="510">
                                    <v-card class="px-2">
                                      <v-card-title class="text-h4 pt-8">
                                        Quên mật khẩu
                                      </v-card-title>

                                      <v-card-text class="pt-3 pb-6 text-justify">
                                        Vui lòng nhập đúng email của bạn. Khi bạn
                                        chấp nhận cập nhật lại mật khẩu thì mật khẩu
                                        của cũ của bạn sẽ mất vĩnh viễn và thay vào
                                        đó là mật khẩu mới được cập nhật sau khi bạn
                                        xác thực thành công ^_^ Nhớ đừng để quên mật
                                        khẩu nữa nhé :v
                                      </v-card-text>

                                      <v-text-field
                                        label="Email của bạn"
                                        outlined
                                        dense
                                        class="px-6"
                                        v-model="userEmail"
                                      ></v-text-field>

                                      <div class="input-container">
                                        <v-text-field
                                          label="Mật khẩu mới"
                                          outlined
                                          dense
                                          class="px-6"
                                          v-model="userPassword"
                                          :type="choose"
                                        ></v-text-field>
                                        <v-icon
                                          class="showPass-icons visibility"
                                          @click="showPassword"
                                          >{{ visibility }}</v-icon
                                        >
                                      </div>
                                      <v-row class="mx-0">
                                        <v-col cols="12" sm="7" class="ps-0">
                                          <v-text-field
                                            label="Mã xác nhận"
                                            outlined
                                            dense
                                            class="ps-6 pe-3"
                                            v-model="otpInput"
                                          ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="5" class="pe-5 ps-0">
                                          <v-card
                                            class="mx-auto px-0 py-1 otp-code"
                                            max-width="172"
                                            style="background: url('https://codingnepalweb.com/demos/custom-captcha-in-javascript/captcha-bg.png')"
                                          >
                                            <v-card-text class="px-3 py-1">
                                              <h2
                                                class="text-center gray--text"
                                                style="letter-spacing: 7px; font-style: italic;"
                                              >
                                                {{ otpCode }}
                                              </h2>
                                            </v-card-text>
                                          </v-card>
                                        </v-col>
                                      </v-row>
                                      <v-card-actions class="pt-5 pb-6">
                                        <v-spacer></v-spacer>

                                        <v-btn
                                          color="red darken-1 px-4"
                                          dark
                                          @click="dialog = false"
                                        >
                                          Thoát
                                        </v-btn>

                                        <v-btn
                                          class="px-5"
                                          color="rgb(16,37,158)"
                                          dark
                                          @click="updatePassword"
                                        >
                                          Cập nhật mật khẩu
                                        </v-btn>
                                      </v-card-actions>
                                    </v-card>
                                  </v-dialog>
                                </v-row>
                              </template>
                            </v-col>
                          </v-row>
                          <v-btn
                            color="rgb(16, 37, 158)"
                            style="color: #fff"
                            block
                            tile
                            :disabled="showBtn"
                            @click="login"
                            >Đăng Nhập
                            <v-progress-circular
                              :width="3"
                              color="green"
                              :size="20"
                              indeterminate
                              v-show="showLoading"
                            ></v-progress-circular
                          ></v-btn>

                          <h5 class="text-center grey--text mt-4 mb-3">
                            Hoặc đăng nhập bằng
                          </h5>
                          <div
                            class="d-flex justify-space-between align-center mx-10 mb-16"
                          >
                            <v-btn depressed outlined color="grey">
                              <v-icon color="red">mdi-google</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="blue">mdi-facebook</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="light-blue lighten-3"
                                >mdi-twitter</v-icon
                              >
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md="6" class="blue rounded-bl-xl bg-login">
                    <div style="text-align: center; padding: 180px 0">
                      <v-card-text class="white--text">
                        <h1 class="text-center mb-5">
                          Đăng nhập để quản lý những nội dung của UTENews
                        </h1>
                        <h4 class="text-center">
                          Hãy cùng nhau tạo ra một mạng xã hội lành mạnh cho sinh
                          viên nào
                        </h4>
                      </v-card-text>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <popup
      :show="showDialog"
      :cancel="cancel"
      :confirm="confirm"
      title="Thông báo?"
      text="Ok! Mình sẽ kiểm tra lại"
      description="Email hoặc mật khẩu không đúng!!!"
    ></popup>
    <popup
      :show="showDialogPassword"
      :cancel="cancel"
      :confirm="confirm"
      title="Thông báo?"
      text="Oke ^^"
      description="Mật khẩu xác nhận chưa chính xác !!!"
    ></popup>
    <popup
      :show="showDialogSuccess"
      :cancel="cancel"
      :confirm="confirm"
      title="Thông báo?"
      text="Oke ^^"
      description="Cập nhật thành công !!!"
    ></popup>
    <popup
      :show="showDialogSignUpSuccess"
      :cancel="cancel"
      :confirm="confirm"
      title="Thông báo?"
      text="Oke ^^"
      description="Đăng ký thành công!!! Hãy thử đăng nhập lại"
    ></popup>
    <popup
      :show="showDialogExistEmail"
      :cancel="cancel"
      :confirm="confirm"
      title="Thông báo?"
      text="Oke ^^"
      description="Không tồn tại email này!!! Vui lòng kiểm tra lại"
    ></popup>
    <popup
      :show="showDialogSignUp"
      :cancel="cancel"
      :confirm="confirm"
      title="Thông báo?"
      text="Oke ^^"
      description="Vui lòng điền đầy đủ thông tin !"
    ></popup>
  </div>
</template>

<script>
// import axios from "axios";
import Popup from "../components/Popup.vue";
import { mapState } from "vuex";
import AuthService from "@/services/authService.js";

export default {
  components: { Popup },
  data() {
    return {
      step: 1,
      user: {
        email: "",
        password: "",
      },
      userSignUp: {},
      showDialog: false,
      showDialogPassword: false,
      showDialogSuccess: false,
      showDialogExistEmail: false,
      showDialogRequiredEmail: false,
      showDialogSignUp: false,
      showDialogSignUpSuccess: false,
      month: "",
      minutes: "",
      dialog: false,
      userEmail: "",
      userPassword: "",
      otpCode: "",
      otpInput: "",
      checkBox: false,
      colorEmail: "rgb(16, 37, 158)",
      colorPassword: "rgb(16, 37, 158)",
      emailShow: false,
      passShow: false,
      showBtn: false,
      emailErrorText: "* Vui lòng nhập đúng cú pháp email",
      passwordErrorText: "* Mật khẩu phải lớn hơn hoặc bằng 8 kí tự",
      showLoading: false,
    };
  },
  computed: {
    ...mapState({
      choose: (state) => state.choose,
      visibility: (state) => state.visibility,
    }),
  },
  methods: {
    showOTPCode() {
      let string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let OTP = "";

      // Find the length of string
      var len = string.length;
      for (let i = 0; i < 7; i++) {
        OTP += string[Math.floor(Math.random() * len)];
      }
      return OTP;
    },
    updatePassword() {
      const userData = JSON.parse(localStorage.getItem("user"));
      const dataEmail = userData.find((el) => el.email === this.userEmail);
      if (this.userEmail === "" || this.userPassword === "") {
        this.showDialogSignUp = true;
        this.dialog = false;
      } else {
        if (dataEmail) {
          if (this.otpInput === this.otpCode) {
            let index = userData.findIndex((el) => el.email === this.userEmail);
            userData.splice(index, 1, {
              id: dataEmail.id,
              email: dataEmail.email,
              password: this.userPassword,
              role: dataEmail.role,
              timeLogin: dataEmail.timeLogin,
            });
            localStorage.setItem("user", JSON.stringify(userData));
            this.showDialogSuccess = true;
            this.userEmail = "";
            this.userPassword = "";
            this.otpInput = "";
            this.otpCode = this.showOTPCode();
            this.dialog = false;
          } else {
            alert("Mã xác thực không chính xác!!!");
            this.otpCode = this.showOTPCode();
            this.otpInput = "";
          }
        } else {
          this.showDialogExistEmail = true;
          this.dialog = false;
        }
      }
    },
    inputEmail() {
      let dataInput = this.user.email;

      // const regex = new RegExp("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")
      const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (regex.test(dataInput.trim())) {
        this.emailShow = false;
        this.colorEmail = "rgb(16, 37, 158)";
        if (this.user.password.length < 8) {
          this.showBtn = true;
        }
      } else {
        this.emailShow = true;
        this.colorEmail = "red";
        this.emailErrorText = "* Vui lòng nhập đúng cú pháp email";
        this.showBtn = true;
      }
      if (dataInput.length === 0) {
        this.emailShow = false;
        this.colorEmail = "rgb(16, 37, 158)";
        this.showBtn = false;
      }
    },
    inputPassword() {
      let dataPassword = this.user.password;
      if (dataPassword.length < 8) {
        this.colorPassword = "red";
        this.passwordErrorText = "* Mật khẩu phải lớn hơn hoặc bằng 8 kí tự";
        this.passShow = true;
        this.showBtn = true;
      } else {
        this.colorPassword = "rgb(16, 37, 158)";
        this.passShow = false;
        this.showBtn = false;
      }
      if (dataPassword.length === 0) {
        this.colorPassword = "rgb(16, 37, 158)";
        this.passShow = false;
        this.showBtn = false;
      }
    },
    async login() {
      // using localStorage
      if (this.user.email === "" && this.user.password === "") {
        this.emailErrorText = "* Không được bỏ trống ô này";
        this.passwordErrorText = "* Không được bỏ trống ô này";
        this.emailShow = true;
        this.passShow = true;
      }
      if (this.user.email === "") {
        this.emailErrorText = "* Không được bỏ trống ô này";
        this.emailShow = true;
      } else if (this.user.password === "") {
        this.passwordErrorText = "* Không được bỏ trống ô này";
        this.passShow = true;
      } else {
        this.showLoading = true;
        const res = await AuthService.login({
          email: this.user.email,
          password: this.user.password,
        });

        if (res && res.access_token !== "") {
          window.console.log(res);
          const tokenUser = localStorage.getItem("token");
          console.log(tokenUser);
          this.showLoading = false;
          this.$router.push("/").catch(() => {});
        } else {
          window.console.log("ko thành công");
        }
      }
    },
    cancel() {
      this.showDialog = false;
      this.showDialogPassword = false;
      this.showDialogSuccess = false;
      this.showDialogExistEmail = false;
      this.showDialogSignUp = false;
      this.showDialogSignUpSuccess = false;
    },
    confirm() {
      this.showDialog = false;
      this.showDialogPassword = false;
      this.showDialogSuccess = false;
      this.showDialogExistEmail = false;
      this.showDialogSignUp = false;
      this.showDialogSignUpSuccess = false;
    },

    showPassword() {
      this.$store.dispatch("actionSetShowPassword");
    },

    setCookie() {
      if (this.checkBox === true) {
        document.cookie =
          "myusername=" + this.user.email + ";path=http://localhost/web6pm/";
        document.cookie =
          "mypassword=" + this.user.password + ";path=http://localhost/web6pm/";
      } else {
        let cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
          let cookie = cookies[i];
          let eqPos = cookie.indexOf("=");
          let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
      }
    },

    getCookieData() {
      let user = this.getCookie("myusername");
      let pswd = this.getCookie("mypassword");

      this.user.email = user;
      this.user.password = pswd;
    },
    getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
  },
  mounted() {
    this.getCookieData();
    this.otpCode = this.showOTPCode();
  },
  props: {
    source: String,
  },
};
</script>
<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
a {
  text-decoration: none;
  color: #fff;
  display: block;
  width: 100%;
}
.input-container {
  position: relative;
}
.material-icons,
.showPass-icons {
  margin: 0 10px;
  color: #aaa;
  cursor: default;
  position: absolute;
  content: "";
  top: 8px;
  right: 0px;
}
.material-icons {
  right: 0;
}
.showPass-icons {
  right: 22px;
}
.bg-login {
  background: url("https://img4.thuthuatphanmem.vn/uploads/2020/07/05/anh-background-cong-nghe-xanh_035953035.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.fg-pass {
  color: rgb(16, 37, 158);
  text-decoration: none;
  margin-top: 11px;
}
.bg-section {
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-blue-atmosphere-technology-exhibition-board-background-template-image_193475.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.elevation-6 {
  box-shadow: 0px 2px 10px 1px rgb(216 213 213) !important;
}
.error__email {
  position: absolute;
  top: 42%;
  transform: translateY(-50%);
  color: red;
  font-size: 12px;
}
.error_password {
  position: absolute;
  top: 54.5%;
  transform: translateY(-50%);
  color: red;
  font-size: 12px;
}
</style>
