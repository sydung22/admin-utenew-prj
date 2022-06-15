<template>
  <div class="account">
    <v-container class="container">
      <v-row>
        <v-col cols="12">
          <!-- <h1>employee list</h1> -->
          <v-card>
            <v-card-title class="pb-0">
              DANH SÁCH TÀI KHOẢN
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Tìm Kiếm"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-dialog v-model="dialog" max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="green" dark v-bind="attrs" v-on="on" class="ms-5 my-4">
                  Thêm Mới
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="pt-7">
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" class="text-center">
                        <v-container>
                          <v-row>
                            <v-col cols="12" md="12" class="pb-0 pt-1">
                              <v-text-field
                                label="Username"
                                v-model="user.username"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12" class="pb-0 pt-1">
                              <v-text-field
                                label="Email"
                                v-model="user.email"
                                required
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12" class="pb-0 pt-1">
                              <v-text-field
                                label="Tên người dùng"
                                v-model="user.fullname"
                                required
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12" class="pb-0 pt-1">
                              <v-text-field
                                type="number"
                                step="any"
                                min="0"
                                label="Tuổi"
                                v-model="user.age"
                                required
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12" class="pb-0 pt-1">
                              <v-select
                                :items="['Male', 'Female', 'Other']"
                                label="Giới Tính"
                                v-model="user.gender"
                                required
                              ></v-select>
                            </v-col>

                            <v-col cols="12" md="12" class="pb-0 pt-1">
                              <v-text-field
                                label="Mật khẩu"
                                v-model="user.password"
                                type="password"
                                required
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12" class="pb-0 pt-1">
                              <v-select
                                :items="[0, 1]"
                                label="Quyền Hạn"
                                v-model="user.role"
                                required
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions class="pt-0 pb-4">
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Đóng
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="createUser">
                    Cập nhật
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-data-table
              :headers="header"
              :items="account"
              :items-per-page="10"
              class="elevation-1 text-center table-list"
              item-key="id"
              show-select
              :search="search"
              :footer-props="{
                showFirstLastPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
              }"
            >
              <template v-slot:[`item.avatar`]="{ item }">
                <img
                  v-if="item.avatar"
                  :src="item.avatar"
                  style="width: 60px; height: 50px; object-fit:cover; margin: 3px 0 -2px"
                />
                <img
                  v-else
                  src="https://timbee.com.vn/Data/Sites/2/News/2184/user.png"
                  style="width: 60px; height: 50px; object-fit:cover; margin: 3px 0 -2px;"
                />
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <v-dialog max-width="1000">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      v-bind="attrs"
                      v-on="on"
                      @click="DetailsUser(item)"
                      >Chi Tiết <v-icon dark right> mdi-eye </v-icon>
                    </v-btn>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card class="pb-3">
                      <v-card-text class="pb-4">
                        <v-container class="px-0 pt-13 pb-0">
                          <h1 class="px-5 py-0 text-center primary--text">
                            Thông Tin Người Dùng
                          </h1>
                          <v-row align="center" justify="center" class="pe-5">
                            <v-col cols="12" sm="6" class="text-center">
                              <v-avatar
                                class="mb-2"
                                color="grey darken-1"
                                size="300"
                                v-if="detailsItem.avatar"
                              >
                                <v-img aspect-ratio="30" :src="detailsItem.avatar" />
                              </v-avatar>
                              <v-avatar
                                class="mb-2"
                                color="grey darken-1"
                                size="250"
                                v-else
                              >
                                <v-img
                                  aspect-ratio="30"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_8jyrBjic0ELBWNbA2JH7ufzOb3jkJvN8Q&usqp=CAU"
                                />
                              </v-avatar>
                              <h2
                                class="black--text mt-2 mb-6"
                                v-if="detailsItem.fullname"
                              >
                                {{ detailsItem.fullname }}
                              </h2>
                              <h2 class="black--text mt-2 mb-6" v-else>
                                Người dùng mới
                              </h2>
                            </v-col>
                            <v-col cols="12" sm="6" class="text-center">
                              <v-form>
                                <v-container>
                                  <v-row>
                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="ID"
                                        :value="detailsItem.id"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="UserName"
                                        :value="detailsItem.username"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>
                                    <v-col
                                      cols="12"
                                      md="12"
                                      class="pb-0 pt-1"
                                      v-if="detailsItem.fullname"
                                    >
                                      <v-text-field
                                        label="Tên Người Dùng"
                                        :value="detailsItem.fullname"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>
                                    <v-col
                                      cols="12"
                                      md="12"
                                      class="pb-0 pt-1"
                                      v-else
                                    >
                                      <v-text-field
                                        label="Email"
                                        :value="detailsItem.email"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Giới tính"
                                        :value="detailsItem.gender"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Tuổi"
                                        :value="detailsItem.age"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Mô tả"
                                        :value="detailsItem.description"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Facebook"
                                        :value="detailsItem.facebook"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Ngày tạo"
                                        :value="detailsItem.created_at"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Ngày sửa"
                                        :value="detailsItem.updated_at"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                </v-container>
                              </v-form>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false" color="primary"
                          >Đóng</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
                <v-btn class="ma-2" color="red" dark @click="handleRow(item)">
                  Xóa
                  <v-icon dark right> mdi-delete </v-icon>
                </v-btn>
              </template>
              <template v-slot:no-data>
                <p class="my-2">Không có dữ liệu</p>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <popup
      :show="showDialogDelete"
      :cancel="cancel"
      :confirm="DeleteItem"
      text="Đồng ý"
      title="Thông báo!"
      textCancel="Không"
      description="Bạn có muốn xóa dữ liệu này không ???"
    ></popup>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
import AuthService from "@/services/authService.js";

import Popup from "../components/Popup.vue";

export default {
  components: { Popup },
  data() {
    return {
      header: [
        {
          text: "ID",
          value: "id",
          align: "center",
        },
        { text: "Tên tài khoản", align: "center", value: "username" },
        { text: "Tên thành viên", align: "center", value: "fullname" },
        { text: "Hình ảnh", align: "center", value: "avatar" },
        { text: "Email", align: "center", value: "email" },
        { text: "Tuổi", align: "center", value: "age" },
        { text: "Tiểu Sử", align: "center", value: "description" },
        {
          text: "Chức Năng",
          value: "actions",
          align: "center",
          sortable: false,
        },
      ],
      user: {},
      defaultUser: {},
      deleteId: 0,
      detailsId: 0,
      account: [],
      search: "",
      dialog: false,
      dialogDetails: false,
      showDialogDelete: false,
      showDialogUpdate: false,
      showDialogCreateRequired: false,
      showDialogCreateSuccess: false,
      showDialogDeleteSuccess: false,
      showDialogDuplicateEmail: false,
      listRole: [],
      detailsItem: {},
      editedIndex: -1,
      readChange: false,
    };
  },
  methods: {
    initAuthHeader() {
      const token = localStorage.getItem("token");
      if (token && token !== "") {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      } else {
        axios.defaults.headers.common.Authorization = ``;
      }
    },
    async DetailsUser(item) {
      this.detailsId = item.id;
      const resData = await axios.get("http://127.0.0.1:8080/api/user");
      const details = [...resData.data.user].find((el) => el.id === this.detailsId);
      this.detailsItem = details;
      console.log(this.detailsId);
    },
    cancel() {
      this.showDialogDelete = false;
    },
    handleRow(item) {
      this.deleteId = item.id;
      this.showDialogDelete = true;
    },
    async DeleteItem() {
      const res = await AuthService.deleteUser(this.deleteId);
      if (res && res.status === "success") {
        alert("Xóa thành công");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        window.console.log("ko thành công");
      }
    },
    async createUser() {
      this.initAuthHeader();
      const res = await axios.post(
        "http://127.0.0.1:8080/api/admin/user",
        this.user
      );
      console.log(res);
      alert("Cập nhật thành công");
      this.dialog = false;
    },
    close() {
      this.dialog = false;
    },
  },
  async mounted() {
    const res = await axios.get(`http://127.0.0.1:8080/api/user`);
    console.log(res.data);
    this.account = res.data.user;
    this.DetailsUser(1);
  },
  computed: {
    ...mapState({
      choose: (state) => state.choose,
      visibility: (state) => state.visibility,
    }),
    formTitle() {
      return this.editedIndex === -1 ? "Thêm mới tài khoản" : "Sửa tài khoản";
    },
  },
};
</script>
<style scoped>
h1 {
  text-transform: uppercase;
  text-align: center;
  margin: -10px 0 30px;
}
.input-container {
  position: relative;
}
.material-icons {
  margin: 0 10px;
  color: #aaa;
  cursor: default;
  position: absolute;
  content: "";
  top: 16px;
  right: -8px;
}
</style>
