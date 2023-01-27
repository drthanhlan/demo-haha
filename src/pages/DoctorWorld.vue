<!-- filename: Doctor.vue -->
<template>
  <q-page>
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width: 400px; height: 540px">
          <h4 class="text-h5 q-my-md">{{ title }}</h4>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input
                ref="userName"
                square
                clearable
                v-model="userName"
                lazy-rules
                :rules="[this.required, this.short]"
                type="text"
                label="User Name"
              >
              </q-input>
              <q-input
                square
                clearable
                v-model="nameOfUser"
                lazy-rules
                :rules="[this.required, this.short]"
                type="text"
                label="Name Of User"
              >
              </q-input>
              <q-input
                ref="password"
                square
                clearable
                v-model="password"
                :type="passwordFieldType"
                lazy-rules
                :rules="[this.required, this.short]"
                label="password"
              >
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn
              unelevated
              size="lg"
              color="secondary"
              @click="submit"
              class="full-width text-white"
              :label="btnLabel"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
//import { api } from "boot/axios";
export default defineComponent({
  name: "DoctorWorld",
  data: function () {
    return {
      title: "login",
      userName: "",
      nameOfUser: "",
      password: "",
      passwordFieldType: "password",
      btnLabel: " login btn",
    };
  },
  methods: {
    required(val) {
      return (val && val.length > 0) || "is required";
    },
    short(val) {
      return (val && val.length > 3) || "more than 3 character";
    },
    submit() {
      this.$store.dispatch("showcase/setData", {
        userName: this.userName,
        nameOfUser: this.nameOfUser,
        isLogin: true,
      });
      if (this.$store.state.showcase.isLogin) {
        this.$router.push("/login");
      }

      //api
      //  .get("https://jsonplaceholder.typicode.com/todos/1")
      //  .then((response) => {
      //   if (response.status == 200) {
      //      this.$router.push("/login");
      //    }
      //  });
    },
  },
});
</script>

<style lang="scss" scoped></style>
