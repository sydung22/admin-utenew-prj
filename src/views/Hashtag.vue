<template>
  <div class="department">
    <v-container class="container">
      <v-row>
        <v-col cols="12">
          <!-- <h1>employee list</h1> -->
          <v-card>
            <v-card-title class="pb-0">
              DANH SÁCH HASHTAG
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
              :items="hashtag"
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
              <template v-slot:[`item.depart_image`]="{ item }">
                <img
                  v-if="item.depart_image"
                  :src="item.depart_image"
                  style="width: 70px; height: 50px; object-fit:cover; margin: 3px 0 -2px"
                />
                <img
                  v-else
                  src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-office-icon-for-your-project-png-image_4897910.jpg"
                  style="width: 70px; height: 50px; object-fit:cover; margin: 3px 0 -2px;"
                />
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <div>
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
                        <v-card-text class="pb-0">
                          <v-container class="px-0 pt-13 pb-0">
                            <h1 class="px-5 py-0 pb-5 text-center primary--text">
                              Thông Tin Hashtag
                            </h1>
                            <v-row align="center" justify="center" class="">
                              <v-col cols="12" sm="12" class="text-center pt-0">
                                <v-form>
                                  <v-container>
                                    <v-row>
                                      <v-col cols="12" md="12" class="pb-0 pt-1">
                                        <v-text-field
                                          label="ID"
                                          :value="detailsItem.id"
                                          required
                                          class="pt-1"
                                          readonly
                                        ></v-text-field>
                                      </v-col>
                                      <v-col cols="12" md="12" class="pb-0 pt-1">
                                        <v-text-field
                                          label="Tên Hashtag"
                                          :value="detailsItem.name"
                                          required
                                          readonly
                                        ></v-text-field>
                                      </v-col>

                                      <v-col cols="12" md="12" class="pb-0 pt-1">
                                        <v-text-field
                                          label="Ngày Tạo"
                                          :value="detailsItem.created_at"
                                          required
                                          readonly
                                        ></v-text-field>
                                      </v-col>

                                      <v-col cols="12" md="12" class="pb-0 pt-1">
                                        <v-text-field
                                          label="Ngày Sửa"
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
                </div>
              </template>
              <template v-slot:no-data>
                <p class="my-2">Không có dữ liệu</p>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
        <loading v-show="showLoading"></loading>
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
import AuthService from "@/services/authService.js";
import Popup from "../components/Popup.vue";
import Loading from "../components/Loading.vue";

export default {
  components: { Popup, Loading },
  data() {
    return {
      header: [
        {
          text: "ID",
          value: "id",
          align: "center",
        },
        {
          text: "Name",
          value: "name",
          align: "center",
        },
        {
          text: "Thời gian tạo",
          value: "created_at",
          align: "center",
        },
        {
          text: "Thời gian sửa",
          value: "updated_at",
          align: "center",
        },
        {
          text: "Chức Năng",
          value: "actions",
          align: "center",
          sortable: false,
        },
      ],
      hashtag: [],
      search: "",
      dialog: false,
      roleEm: "",
      detailsId: 0,
      detailsItem: {},
      departmentItem: {
        id: "",
        depart_id: "",
        depart_name: "",
        depart_address: "",
        depart_image: "",
      },
      departmentItemDefault: {},
      showDialogDelete: false,
      showDialogDeleteSuccess: false,
      showDialogCreateRequired: false,
      showDialogCreateSuccess: false,
      showDialogUpdate: false,
      qtyDepartment: [],
      editedIndex: -1,
      showLoading: false,
    };
  },
  async mounted() {
    const res = await AuthService.hashtag();
    this.hashtag = res.hashtag;
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Thêm mới phòng ban"
        : "Sửa thông tin phòng ban";
    },
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
      const resData = await axios.get("http://127.0.0.1:8080/api/hashtag");
      const details = [...resData.data.hashtag].find(
        (el) => el.id === this.detailsId
      );
      this.detailsItem = details;
      console.log(this.detailsItem);
    },
    cancel() {
      this.showDialogDelete = false;
    },
    handleRow(item) {
      this.deleteId = item.id;
      this.showDialogDelete = true;
    },
    async DeleteItem() {
      this.showLoading = true;
      const res = await AuthService.deleteHashtag(this.deleteId);
      if (res && res.status === "success") {
        this.showLoading = false;
        setTimeout(() => {
          alert("Xóa thành công");
          window.location.reload();
        }, 500);
      } else {
        this.showLoading = false;
        alert("Xóa không thành công");
      }
    },

    close() {
      this.dialog = false;
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
</style>
