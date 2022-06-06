<template>
  <div class="section-info">
    <v-container class="px-0 py-0">
      <v-card class="pb-8">
        <h1 class="px-5 py-7 text-center">Thông Tin ADMIN</h1>
        <v-row align="center" justify="center" class="pe-5">
          <v-col cols="12" sm="3" class="text-center">
            <v-avatar
              class="mb-2"
              color="grey darken-1"
              size="250"
              v-if="this.listDetail.imgUrl"
            >
              <v-img aspect-ratio="30" :src="this.listDetail.imgUrl" />
            </v-avatar>
            <v-avatar class="mb-2" color="grey darken-1" size="250" v-else>
              <v-img
                aspect-ratio="30"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_8jyrBjic0ELBWNbA2JH7ufzOb3jkJvN8Q&usqp=CAU"
              />
            </v-avatar>
            <h2
              class="black--text mt-2 mb-6"
              v-if="this.listDetail.firstName && this.listDetail.lastName"
            >
              {{ this.listDetail.lastName }} {{ this.listDetail.firstName }}
            </h2>
            <h2 class="black--text mt-2 mb-6" v-else>Người dùng mới</h2>
            <v-row
              align="center"
              justify="center"
              v-for="(link, index) in linkUser"
              :key="index"
              class="mt-0 ms-5"
            >
              <v-col cols="12" sm="2" class="text-end px-0 mb-2">
                <v-avatar class="mb" color="grey darken-1" size="30">
                  <v-img aspect-ratio="30" :src="link.imgUrl" />
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="10" class="text-start">
                <h4 class="primary--text">{{ link.titleUrl }}</h4>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="3" class="text-center">
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      :counter="30"
                      label="Họ"
                      required
                      v-model="user.lastName"
                      class="pt-1"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      :counter="30"
                      label="Tên"
                      required
                      v-model="user.firstName"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      label="E-mail"
                      :value="this.listDetail.email"
                      required
                      readonly
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <div class="input-container">
                      <v-text-field
                        label="Password"
                        required
                        readonly
                        :value="this.dataUserInfo.password"
                        :type="choose"
                      ></v-text-field>
                      <v-icon
                        class="material-icons visibility"
                        @click="showPassword"
                        >{{ visibility }}</v-icon
                      >
                    </div>
                  </v-col>

                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      label="Số điện thoại"
                      required
                      v-model="user.phoneNumber"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      label="Địa Chỉ"
                      required
                      v-model="user.address"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-select
                      :items="this.listRole"
                      :value="this.listDetail.role"
                      label="Chức Vụ"
                      required
                      readonly
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-select
                      :items="this.listDepartment"
                      label="Phòng Ban"
                      v-model="user.depart_name"
                      :menu-props="{ top: true, offsetY: true }"
                      required
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
          <v-col cols="12" sm="3" class="text-center">
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      label="Ngày Sinh"
                      required
                      v-model="user.birthday"
                      class="pt-1"
                      type="date"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-select
                      :items="['Nam', 'Nữ']"
                      label="Giới Tính"
                      required
                      v-model="user.gender"
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      label="Số CMND/CCCD"
                      required
                      v-model="user.numberCard"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      label="Quốc Tịch"
                      required
                      v-model="user.nationality"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      label="Dân Tộc"
                      required
                      v-model="user.ethnic"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      label="Tôn Giáo"
                      required
                      v-model="user.religion"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-select
                      :items="['12/12']"
                      label="Trình Độ Văn Hóa"
                      required
                      v-model="user.educationalLevel"
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-select
                      :items="['Cao Đẳng', 'Đại Học', 'Cao Học']"
                      label="Trình Độ Học Vấn"
                      :menu-props="{ top: true, offsetY: true }"
                      required
                      v-model="user.academicLevel"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
          <v-col cols="12" sm="3" class="text-center">
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://www.constructionplusasia.com/wp-content/uploads/2020/05/1-03.jpg"
              >
              </v-img>

              <v-card-subtitle class="pb-2 pt-3" style="font-size: 16px">
                Công Ty Axon Active
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Nhân viên lập trình VueJS</div>
                <div>Thời gian làm việc: 2 năm</div>
              </v-card-text>
            </v-card>
            <v-card class="mx-auto mt-5" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://i.pinimg.com/originals/fa/dd/01/fadd011335400a0262227ed6f250b313.jpg"
              >
              </v-img>
              <v-card-subtitle class="pb-2 pt-3" style="font-size: 16px">
                Công Ty Paradox Software
              </v-card-subtitle>
              <v-card-text class="text--primary">
                <div>Nhân viên lập trình NodeJS</div>
                <div>Thời gian làm việc: 2.5 năm</div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-btn
            color="blue-grey"
            class="ma-2 white--text mt-8"
            @click="updateInfo"
            ref="buttonUpdate"
          >
            Cập nhật thông tin
            <v-icon right dark> mdi-cloud-upload </v-icon>
          </v-btn>
        </v-row>
      </v-card>
    </v-container>
    <popup
      :show="showDialogUpdateSuccess"
      :cancel="cancel"
      :confirm="confirm"
      text="Oke ^^"
      title="Thông báo!"
      description="Cập nhật thông tin thành công !!!"
    >
    </popup>
    <popup
      :show="showDialogDuplicateInf"
      :cancel="cancel"
      :confirm="confirm"
      text="Oke ^^"
      title="Thông báo!"
      description="Không có gì để cập nhật !!!"
    >
    </popup>
  </div>
</template>

<script>
import Popup from "./Popup.vue";
// import axios from "axios";
import { mapState } from "vuex";

export default {
  components: { Popup },
  name: "Infomation",
  data() {
    return {
      linkUser: [
        {
          imgUrl:
            "https://br.atsit.in/vi/wp-content/uploads/2021/06/anh-facebook-khong-tai-hoac-khong-hien-thi-loi-khong-the-ket-noi-bat-len-ban-khong-don-doc.png",
          titleUrl: "https://www.facebook.com/",
        },
        {
          imgUrl:
            "https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/90/96/fc/9096fc60-7d7f-b8a1-f152-882c02811ddc/AppIcon_v3-85-220-4-2x.png/1200x630bb.png",
          titleUrl: "https://www.google.com/intl/vi/gmail/about/",
        },
        {
          imgUrl:
            "https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757__480.png",
          titleUrl: "https://github.com/",
        },
        {
          imgUrl:
            "https://image.similarpng.com/very-thumbnail/2020/05/Glossy-Instagram-icon-PNG.png",
          titleUrl: "https://www.instagram.com/",
        },
      ],
      listRole: [],
      listDepartment: [],
      listDetail: {},
      user: {},
      showDialogUpdateSuccess: false,
      showDialogDuplicateInf: false,
      dataUserInfo: {},
    };
  },
  async mounted() {},
  methods: {
    confirm() {
      this.showDialogUpdateSuccess = false;
      this.showDialogDuplicateInf = false;
    },
    cancel() {
      this.showDialogUpdateSuccess = false;
      this.showDialogDuplicateInf = false;
    },
    showPassword() {
      this.$store.dispatch("actionSetShowPassword");
    },
  },
  computed: {
    ...mapState({
      choose: (state) => state.choose,
      visibility: (state) => state.visibility,
    }),
  },
};
</script>

<style>
.section-info {
  margin: -14px 0 -16px;
}
.input-container {
  position: relative;
}
.material-icons {
  margin: 0 10px;
  color: #aaa;
  cursor: default;
  position: absolute !important;
  content: "";
  top: 16px;
  right: -8px;
}
</style>
