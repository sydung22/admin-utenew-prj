<template>
  <div>
    <v-navigation-drawer v-if="!drawer" app>
      <v-img
        height="140"
        class="pa-4"
        src="https://bigdata-vn.com/wp-content/uploads/2021/09/Background-anh-sang-dep.jpg"
      >
        <div class="text-center">
          <v-avatar class="mb-2" color="grey darken-1" size="78" v-if="avatar">
            <v-img aspect-ratio="30" :src="avatar" />
          </v-avatar>
          <v-avatar class="mb-2" color="grey darken-1" size="78" v-else>
            <v-img
              aspect-ratio="30"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_8jyrBjic0ELBWNbA2JH7ufzOb3jkJvN8Q&usqp=CAU"
            />
          </v-avatar>
          <h3 class="white--text" v-if="fullname">
            {{ fullname }}
          </h3>
          <h3 class="white--text" v-else>Người dùng mới</h3>
        </div>
      </v-img>
      <!-- <v-divider></v-divider> -->
      <v-list class="red_list">
        <v-list-item-group>
          <v-list-item
            v-for="(link, i) in links"
            :key="i"
            link
            @click="positionAction(link.action)"
            class="item-sidebar ps-5"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content style="color: #ADB3B3">
              {{ link.title }}
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <popup
      :show="showDialogRole"
      :cancel="cancel"
      :confirm="confirm"
      text="Oke ^^"
      title="Thông báo!"
      description="Bạn không có quyền hạn vào đây!! Xin cảm ơn"
    ></popup>
  </div>
</template>

<script>
import Popup from "./Popup.vue";
// import { mapState } from "vuex";
// import axios from "axios";
export default {
  components: { Popup },
  name: "Sidebar",
  props: ["drawer"],
  data() {
    return {
      links: [
        {
          icon: "mdi-microsoft-windows",
          title: "Trang Chủ",
          action: "dashboard",
        },
        {
          icon: "mdi-card-account-details-outline",
          title: "Thành Viên",
          action: "user",
        },
        {
          icon: "mdi-account-multiple",
          title: "Bài Đăng",
          action: "video",
        },
        {
          icon: "mdi-home-city",
          title: "Hashtag",
          action: "hashtag",
        },
        {
          icon: "mdi-home-city",
          title: "Báo Cáo",
          action: "report",
        },
      ],
      fullname: "",
      avatar: "",
      role: "",
      department: "",
      model: 0,
      showDialogRole: false,
      offset: true,
    };
  },
  async mounted() {
    const res = JSON.parse(localStorage.getItem("user"));
    this.fullname = res.fullname;
    this.avatar = res.avatar;
  },
  methods: {
    confirm() {
      this.showDialogRole = false;
    },
    cancel() {
      console.log("thành công");
    },
    positionAction(name) {
      if (name === "dashboard") {
        this.$router.push(`/`);
      } else {
        this.$router.push(`/${name}`);
      }
    },
  },
  //     computed: {
  //   ...mapState({
  //     userInfo: (state) => state.userInfo,
  //     imageInfo: (state) => state.imageInfo,
  //   }),
  // },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: green !important;
  display: block;
}
a,
i {
  color: #adb3b3 !important;
  transition: 0.2s;
}
.v-list-item--link,
.v-list-item__content {
  transition: 0.2s;
}
.v-list-item--link:hover,
.button-sidebar:hover {
  background: linear-gradient(
    90deg,
    rgba(4, 161, 46, 1) 10%,
    rgba(0, 0, 0, 0.7147233893557423) 80%
  );
  color: #fff !important;
}
.button-sidebar:hover .icon-sidebar {
  color: #fff !important;
}
.button-sidebar {
  border-radius: unset;
  transition: 0.2s;
  display: block;
  width: 100%;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  text-transform: unset;
  font-size: 16px !important;
  font-weight: normal;
  letter-spacing: 0;
}
.bg-list {
  background: url("https://cdn.pixabay.com/photo/2017/05/11/08/37/universe-2303321_960_720.jpg")
    no-repeat center 0px !important;
  background-size: cover;
}
/* .theme--light.v-list-item--active .v-list-item__content,
.theme--light.v-list-item--active i, */
.v-list-item--link:hover .v-list-item__content,
.v-list-item--link:hover i,
.red_list .v-list-item-group .v-list-item--active .v-list-item__content,
.red_list .v-list-item-group .v-list-item--active i {
  color: #fff !important;
}
.item-sidebar {
  display: flex;
}
/* .theme--light.v-list-item--active:hover::before,
.theme--light.v-list-item--active::before {
  opacity: 1;
}
.v-list-item--link:before {
  z-index: -1;
  background-color: green;
} */
.theme--light.v-navigation-drawer {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url("https://cdn.pixabay.com/photo/2017/05/11/08/37/universe-2303321_960_720.jpg")
      center 0px !important;
  background-size: cover;
  width: 260px !important;
}
.red_list .v-list-item-group .v-list-item--active,
.listitem-sidebar .v-list-item--active {
  background: linear-gradient(
    90deg,
    rgba(4, 161, 46, 1) 10%,
    rgba(0, 0, 0, 0.7147233893557423) 80%
  );
  color: #fff !important;
}
.listitem-sidebar .v-list-item--active::before {
  opacity: 0;
}
.button-sidebar::before {
  background: unset !important;
}
.listitem-sidebar {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url("https://img2.thuthuat123.com/uploads/2019/11/19/anh-background-ban-dem-rat-dep_122620804.jpg") !important;
  background-size: cover !important;
  background-position: center !important;
}
.theme--light.v-list-item:hover::before {
  opacity: 0 !important;
}
</style>
