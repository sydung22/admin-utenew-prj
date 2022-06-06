<template>
  <div class="employee">
    <v-container class="container">
      <v-row>
        <v-col cols="12">
          <!-- <h1>employee list</h1> -->
          <v-card>
            <v-card-title class="pb-0">
              DANH SÁCH BÀI ĐĂNG
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Tìm Kiếm"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="header"
              :items="employee"
              :items-per-page="10"
              class="elevation-1 text-center"
              item-key="id"
              show-select
              :search="search"
              :footer-props="{
                showFirstLastPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
              }"
            >
              <template v-slot:[`item.user.avatar`]="{ item }">
                <img
                  v-if="item.user.avatar"
                  :src="item.user.avatar"
                  style="width: 60px; height: 50px; object-fit:cover; margin: 3px 0 -2px"
                />
                <img
                  v-else
                  src="https://timbee.com.vn/Data/Sites/2/News/2184/user.png"
                  style="width: 60px; height: 50px; object-fit:cover; margin: 3px 0 -2px;"
                />
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <v-dialog max-width="1600">
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
                            Chi Tiết Bài Đăng
                          </h1>
                          <v-row justify="center" class="pe-5">
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
                                        label="Mã Người Dùng"
                                        :value="detailsItem.user_id"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Đường dẫn ảnh"
                                        :value="detailsItem.cover"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Đường dẫn video"
                                        :value="detailsItem.url"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Nội dung"
                                        :value="detailsItem.description"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Lượt xem"
                                        :value="detailsItem.views"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                </v-container>
                              </v-form>
                            </v-col>
                            <v-col cols="12" sm="6" class="text-center">
                              <video
                                class="block w-full h-auto object-cover rounded-md videoplay"
                                style="display: block; width: 100%; height: 440px; object-fit: cover; border-radius: 10px"
                                controls
                                :src="detailsItem.url"
                                :poster="detailsItem.cover"
                                muted
                                autoplay
                              ></video>
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
                <v-btn color="primary"> Reset </v-btn>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      header: [
        {
          text: "ID",
          value: "id",
          align: "center",
        },
        { text: "Video", align: "center", value: "url" },
        { text: "Nội dung", align: "center", value: "description" },
        { text: "Tên thành viên", align: "center", value: "user.fullname" },
        { text: "Email", align: "center", value: "user.email" },
        { text: "Hình ảnh", align: "center", value: "user.avatar" },
        { text: "Lượt xem", align: "center", value: "views" },
        {
          text: "Chức Năng",
          value: "actions",
          align: "center",
          sortable: false,
        },
      ],
      employee: [],
      listRole: [],
      listDepartment: [],
      search: "",
      deleteId: 0,
      detailsId: 0,
      dialog: false,
      detailsItem: {},
      showDialogDelete: false,
      showDialogDeleteSuccess: false,
      showDialogCreateRequired: false,
      showDialogCreateSuccess: false,
      showDialogDuplicateEmail: false,
      showDialogUpdate: false,
      editedIndex: -1,
      readChange: false,
    };
  },
  methods: {
    async DetailsUser(item) {
      this.detailsId = item.id;
      const resData = await axios.get("http://127.0.0.1:8080/api/video");
      const details = [...resData.data.videos].find(
        (el) => el.id === this.detailsId
      );
      this.detailsItem = details;
      console.log(this.detailsItem);
    },
    async createUser() {
      const res = await axios.post(
        "http://127.0.0.1:8080/api/auth/register",
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
    const res = await axios.get(`http://127.0.0.1:8080/api/video`);
    console.log(res.data);
    this.employee = res.data.videos;
  },
  computed: {
    ...mapState({
      choose: (state) => state.choose,
      visibility: (state) => state.visibility,
    }),
    formTitle() {
      return this.editedIndex === -1
        ? "Thêm mới nhân viên"
        : "Sửa thông tin nhân viên";
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
.v-data-table >>> td:nth-of-type(3),
.v-data-table >>> td:nth-of-type(4) {
  max-width: 250px;
}
.v-data-table >>> td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
