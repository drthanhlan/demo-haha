<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> Quasar App </q-toolbar-title>
        <div v-if="this.$store.state.showcase.isLogin">
          {{ this.$store.state.showcase.nameOfUser }}
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>DashBoard </q-item-label>
        <MenuNavBar v-for="link in menuLink" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import MenuNavBar from "components/MenuNavBar.vue";

const linksList = [
  {
    title: "login",
    link: "/#/doctor",
  },
  {
    title: "login1",
    link: "/#/login",
  },
  {
    title: "login2",
    link: "/#/admin",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    MenuNavBar,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      menuLink: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
