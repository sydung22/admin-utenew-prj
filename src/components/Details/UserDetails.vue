<template>
  <v-dialog max-width="600" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" v-on="on" @click="detailsUser"
        >Chi Tiết <v-icon dark right> mdi-eye </v-icon>
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card class="pb-2">
        <v-card-text class="pb-0">
          <v-container class="px-0 pt-13 pb-0">
            <h1 class="px-5 py-0 text-center primary--text">
              Thông Tin Tài Khoản
            </h1>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="ID"
                  required
                  :value="id"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email"
                  required
                  :value="email"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password"
                  required
                  :value="password"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Chức Vụ"
                  required
                  :value="role"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Thời gian đăng nhập gần đây*"
                  required
                  :value="timeLogin"
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false" color="primary">Đóng</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  props: ["id", "email", "password", "role", "timeLogin", "detailsUser"],
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style></style>
