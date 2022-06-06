<template>
  <v-app id="inspire">
    <Sidebar :drawer="drawer" style="background: #28353a" />
    <Topbar @drawerEvent="drawer = !drawer" />
    <v-main style="background: #ebf1f5">
      <v-container class="py-8 px-6" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import { mapActions } from "vuex";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
export default {
  name: "Layout",
  components: { Topbar, Sidebar },
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
  }),
};
</script>
