<template>
  <div class="reports">
    <v-container class="container">
      <v-row>
        <v-col cols="12">
          <!-- <h1>reports list</h1> -->
          <v-card>
            <v-card-title class="pb-0">
              DANH SÁCH BÁO CÁO
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
              :items="reports"
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
              <template v-slot:[`item.imgUrl`]="{ item }">
                <img
                  v-if="item.cover"
                  :src="item.cover"
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
                            Chi Tiết Báo Cáo
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
                                        label="Mã Người Báo Cáo"
                                        :value="detailsItem.id"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Tên Người Báo Cáo"
                                        :value="detailsItem.fullname"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Tiêu Đề"
                                        :value="detailsItem.title"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Nội Dung Báo Cáo"
                                        :value="detailsItem.description"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Đường dẫn video"
                                        :value="detailsItem.video.url"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Nội dung"
                                        :value="detailsItem.video.description"
                                        required
                                        readonly
                                      ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12" class="pb-0 pt-1">
                                      <v-text-field
                                        label="Lượt xem"
                                        :value="detailsItem.video.views"
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
                                :src="detailsItem.video.url"
                                :poster="detailsItem.video.cover"
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
import AuthService from "@/services/authService.js";

// import axios from "axios";
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
        {
          text: "Tiêu đề",
          value: "title",
          align: "center",
        },
        {
          text: "Nội dung",
          value: "description",
          align: "center",
        },
        {
          text: "Ngày Thêm",
          value: "created_at",
          align: "center",
        },
        {
          text: "Chức Năng",
          value: "actions",
          align: "center",
          sortable: false,
        },
      ],
      reports: [],
      search: "",
      deleteId: 0,
      detailsId: 0,
      dialog: false,
      detailsItem: {},
      user: {
        ethnic: "Kinh",
        nationality: "Việt Nam",
        religion: "Không có",
      },
      defaultUser: {
        ethnic: "Kinh",
        nationality: "Việt Nam",
        religion: "Không có",
      },
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
      const resData = await AuthService.report();
      if (resData && resData.status === "success") {
        const details = resData.reports.find((el) => el.id === this.detailsId);
        this.detailsItem = details;
        console.log(this.detailsItem);
        console.log(resData.reports);
        console.log(this.detailsId);
        console.log(item.id);
      }
    },
    Detail(item) {
      console.log(item.id);
    },
    close() {
      this.dialog = false;
    },
  },
  async mounted() {
    const res = await AuthService.report();
    if (res && res.status === "success") {
      this.reports = res.reports;
      console.log(res);
      window.console.log("thành công");
    } else {
      window.console.log("ko thành công");
      this.$router.push("/login");
    }
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
.v-data-table >>> td:nth-of-type(4),
.v-data-table >>> td:nth-of-type(5) {
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
