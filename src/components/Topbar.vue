<template>
  <div>
    <v-app-bar app elevate-on-scroll elevation="3" color="white">
      <v-app-bar-nav-icon @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
      <v-spacer />
      <v-col lg="6" cols="12">
        <v-form>
          <v-text-field
            class="p-0 m-0 mt-6"
            full-width
            dense
            append-icon="mdi-magnify"
            outlined
            rounded
            placeholder="Tìm Kiếm"
          />
        </v-form>
      </v-col>
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ attrs, on }">
          <span style="cursor: pointer" v-bind="attrs" v-on="on">
            <v-chip link>
              <v-badge dot bottom color="green" offset-y="10" offset-x="10">
                <v-avatar size="40" v-if="avatar">
                  <v-img :src="avatar" />
                </v-avatar>
                <v-avatar size="40" v-else>
                  <v-img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_8jyrBjic0ELBWNbA2JH7ufzOb3jkJvN8Q&usqp=CAU"
                  />
                </v-avatar>
              </v-badge>
              <span class="ml-3" v-if="fullname"> {{ fullname }}</span>
              <span class="ml-3" v-else>Người dùng mới</span>
            </v-chip>
          </span>
        </template>
        <v-list width="250" class="py-0">
          <v-list-item two-line>
            <v-list-item-avatar v-if="avatar">
              <img style="object-fit: cover;" :src="avatar" />
            </v-list-item-avatar>
            <v-list-item-avatar v-else>
              <img
                style="object-fit: cover;"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_8jyrBjic0ELBWNbA2JH7ufzOb3jkJvN8Q&usqp=CAU"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-if="fullname">{{ fullname }}</v-list-item-title>
              <v-list-item-title v-else>Người dùng mới</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item
            link
            v-for="(menu, i) in menus"
            :key="i"
            @click="listAction(menu.action)"
          >
            <v-list-item-icon>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ menu.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <popup
      :show="showDialog"
      :cancel="cancel"
      :confirm="confirm"
      text="Đồng ý"
      textCancel="Hủy"
      title="Thông báo?"
      description="Bạn có muốn đăng xuất không ???"
    ></popup>
  </div>
</template>

<script>
// import { mapState } from "vuex";
// import axios from "axios";
import Popup from "./Popup.vue";
export default {
  components: { Popup },
  name: "Topbar",
  data() {
    return {
      menus: [
        { title: "Thông Tin Nhân Viên", icon: "mdi-account", action: "profile" },
        { title: "Đổi Mật Khẩu", icon: "mdi-key", action: "changepassword" },
        { title: "Cài Đặt", icon: "mdi-cog" },
        { title: "Đăng Xuất", icon: "mdi-logout", action: "logout" },
      ],
      items: [],
      showDialog: false,
      fullname: "",
      avatar: "",
      role: "",
    };
  },
  // computed: {
  //   ...mapState({
  //     userInfo: (state) => state.userInfo,
  //     imageInfo: (state) => state.imageInfo,
  //   }),
  // },
  async mounted() {
    const res = JSON.parse(localStorage.getItem("user"));
    this.fullname = res.fullname;
    this.avatar = res.avatar;
  },
  methods: {
    listAction(action) {
      if (action === "logout") {
        this.showDialog = true;
      }
    },
    cancel() {
      this.showDialog = false;
    },
    confirm() {
      localStorage.clear();
      this.$router.push("/login");
      this.showDialog = false;
    },
  },
};
</script>

<style scoped></style>
