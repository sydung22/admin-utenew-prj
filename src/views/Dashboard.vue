<template>
  <div class="dashboard">
    <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
      <h2
        class="mb-0
      "
      >
        Trang Chủ
      </h2>
    </v-subheader>
    <br />
    <v-row>
      <v-col lg="12" cols="12">
        <v-alert dense text type="success">
          Xin Chào Bạn! Chào mừng bạn đến với <strong>UTENews</strong>
        </v-alert>
        <v-row>
          <v-col lg="6" cols="12" v-for="(item, index) in activityLog" :key="index">
            <v-card elevation="2" class="rounded-lg">
              <v-card-text class="d-flex justify-space-between align-center">
                <div>
                  <strong>{{ item.title }}</strong> <br />
                  <span>Cập nhật 3 tuần trước</span>
                </div>
                <v-avatar
                  size="60"
                  :color="item.color"
                  style="border: 3px solid #444"
                >
                  <span style="color: white">{{ item.amount }} +</span>
                </v-avatar>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between"> </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <!-- <v-col cols="12" lg="5">
        <v-card>
          <v-card-title>Hoạt Động Gần Đây</v-card-title>
          <v-card-text class="py-0">
            <v-timeline align-top dense>
              <v-timeline-item color="indigo" small>
                <strong>5 Phút Trước</strong>
                <div class="text-caption">
                  Thành viên mới có ID là 12 vừa được tạo
                </div>
              </v-timeline-item>
              <v-timeline-item color="green" small>
                <strong>35 Phút Trước</strong>
                <div class="text-caption mb-2">
                  Thành viên mới có ID là 12 vừa được tạo
                </div>
              </v-timeline-item>

              <v-timeline-item color="indigo" small>
                <strong>44 Phút Trước</strong>
                <div class="text-caption">
                  Thành viên mới có ID là 12 vừa được tạo
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col> -->
      <v-col cols="12">
        <v-card>
          <v-data-table
            caption="Top Bài Đăng Nhiều Lượt Xem Nhất"
            :headers="headersTopVideo"
            :items="dessertsTopVideo"
            :items-per-page="5"
            class="elevation-1"
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
            <template v-slot:[`item.actions`]="">
              <v-btn color="success" outlined small shaped>View</v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-data-table
            caption="Top Bài Đăng Nhiều Lượt Thích Nhất"
            :headers="headersTopLike"
            :items="dessertsTopLike"
            :items-per-page="5"
            class="elevation-1"
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
            <template v-slot:[`item.actions`]="">
              <v-btn color="success" outlined small shaped>View</v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-data-table
            caption="Top Người Dùng Tương Tác Nhiều Nhất"
            :headers="headersTopCoin"
            :items="dessertsTopCoin"
            :items-per-page="5"
            class="elevation-1"
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
            <template v-slot:[`item.actions`]="">
              <v-btn color="success" outlined small shaped>View</v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-data-table
            caption="Top Người Dùng Có Nhiều Lượt Follow Nhất"
            :headers="headersTopFollow"
            :items="dessertsTopFollow"
            :items-per-page="5"
            class="elevation-1"
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
            <template v-slot:[`item.actions`]="">
              <v-btn color="success" outlined small shaped>View</v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <popup
      :show="showAccess"
      :cancel="cancel"
      :confirm="confirm"
      text="Xin chào bạn ^^"
      title="Thông báo?"
      description="Bạn đã đăng nhập thành công !!!"
    ></popup>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Popup from "../components/Popup.vue";
import AuthService from "@/services/authService.js";

// import axios from "axios";
export default {
  components: { Popup },
  name: "Dashboard",
  data() {
    return {
      activityLog: [
        {
          title: "Tổng số thành viên",
          amount: 50,
          icon: "mdi-account",
          color: "cyan lighten-3",
        },
        {
          title: "Tổng số Bài Đăng",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "green darken-2",
        },
        {
          title: "Tổng số Hashtag",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "blue-grey darken-1",
        },
        {
          title: "Tổng số Report",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "deep-orange darken-1",
        },
      ],
      headersTopVideo: [
        {
          text: "ID",
          align: "center",
          sortable: false,
          value: "id",
        },
        { text: "Video", align: "center", value: "url" },
        { text: "Nội dung", align: "center", value: "description" },
        { text: "Tên thành viên", align: "center", value: "user.fullname" },
        { text: "Email", align: "center", value: "user.email" },
        { text: "Hình ảnh", align: "center", value: "user.avatar" },
        { text: "Lượt xem", align: "center", value: "views" },
      ],
      dessertsTopVideo: [],
      headersTopLike: [
        {
          text: "ID",
          align: "center",
          sortable: false,
          value: "id",
        },
        { text: "Video", align: "center", value: "url" },
        { text: "Nội dung", align: "center", value: "description" },
        { text: "Tên thành viên", align: "center", value: "user.fullname" },
        { text: "Email", align: "center", value: "user.email" },
        { text: "Hình ảnh", align: "center", value: "user.avatar" },
        { text: "Lượt Thích", align: "center", value: "likes_count" },
      ],
      dessertsTopLike: [],
      headersTopCoin: [
        {
          text: "ID",
          align: "center",
          sortable: false,
          value: "id",
        },
        { text: "Tên tài khoản", align: "center", value: "username" },
        { text: "Tên thành viên", align: "center", value: "fullname" },
        { text: "Hình ảnh", align: "center", value: "avatar" },
        { text: "Email", align: "center", value: "email" },
        { text: "Tuổi", align: "center", value: "age" },
        { text: "Tiểu Sử", align: "center", value: "description" },
        { text: "Số Coin", align: "center", value: "coins" },
      ],
      dessertsTopCoin: [],
      headersTopFollow: [
        {
          text: "ID",
          align: "center",
          sortable: false,
          value: "id",
        },
        { text: "Tên tài khoản", align: "center", value: "username" },
        { text: "Tên thành viên", align: "center", value: "fullname" },
        { text: "Hình ảnh", align: "center", value: "avatar" },
        { text: "Email", align: "center", value: "email" },
        { text: "Tuổi", align: "center", value: "age" },
        { text: "Tiểu Sử", align: "center", value: "description" },
        { text: "Lượt Follow", align: "center", value: "followers_count" },
      ],
      dessertsTopFollow: [],
      emQty: 10,
    };
  },
  async mounted() {
    const resCountUser = await AuthService.user();
    const resCountVideo = await AuthService.video();
    const resCountHashtag = await AuthService.hashtag();
    const resCountReport = await AuthService.report();

    this.activityLog[0].amount = resCountUser.user.length;
    this.activityLog[1].amount = resCountVideo.videos.length;
    this.activityLog[2].amount = resCountHashtag.hashtag.length;
    this.activityLog[3].amount = resCountReport.reports.length;

    const res = await AuthService.admin();
    if (res && res.status === "success") {
      this.dessertsTopVideo = res.data.top_videos_most_views;
      this.dessertsTopLike = res.data.top_videos_most_likes;
      this.dessertsTopCoin = res.data.top_users_most_working;
      this.dessertsTopFollow = res.data.top_users_most_follows;
    } else {
      window.console.log("ko thành công");
    }
  },
  methods: {
    onButtonClick(item) {
      console.log("click on " + item.no);
    },
    cancel() {
      this.confirm();
    },
    confirm() {
      this.$store.dispatch("actionSetDialog", false);
    },
  },
  computed: {
    ...mapState({
      showAccess: (state) => state.showDialog,
    }),
  },
};
</script>

<style scoped>
.overlap-icon {
  position: absolute;
  top: -33px;
  text-align: center;
  padding-top: 12px;
}
.elevation-1 {
  padding-top: 20px !important;
}
.v-data-table >>> td:nth-of-type(2) {
  max-width: 200px;
}
.v-data-table >>> td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
