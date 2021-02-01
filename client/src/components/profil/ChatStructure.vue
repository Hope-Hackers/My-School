<template>
  <div class="container" id="chatt">
    <v-card>
      <v-simple-table class="tabreciever">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">
                Name
              </th>
              <th class="text-center">
                Contact Here
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-center"
              v-for="item in ChatTeachers"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
              <v-btn
                v-for="type in types"
                :key="type"
                class="redmsg"
                @click="redirectMsg(item.id), handleClickLoading(type)"
              >
                Message
              </v-btn>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      hasOpenLoading: false,
      types: ["square"],
    };
  },
  methods: {
    redirectMsg(x) {
      this.$store.commit("setroom", x);
      this.$router.push({ path: "/ChatContainer", addToHistory: false });
    },
    handleClickLoading(type) {
      const loading = this.$vs.loading({
        type,
      });
      this.hasOpenLoading = true;
      setTimeout(() => {
        loading.close();
        this.hasOpenLoading = false;
      }, 3000);
    },
    openLoading(type, ref) {
      this.$vs.loading({
        target: this.$refs[ref][0],
        text: type,
        type,
      });
    },
    mounted() {
      this.types.forEach((type, i) => {
        this.openLoading(type, `box${i}`);
      });
    },
  },
  mounted() {
    axios
      .get(`http://localhost:7000/api/messages/users?id=${this.uuid}`)
      .then((response) => {
        this.$store.commit("setChatMembers", response.data);
      });
  },
  computed: {
    ...mapGetters({
      uuid: "getMyUuid",
      ChatTeachers: "getChatMembers",
    }),
  },
};
</script>

<style>
.v-data-table__wrapper {
  overflow-x: auto;
  overflow-y: auto;
  margin-top: 53px;
}
#chatt {
  width: 860px;
  margin-left: 340px;
  margin-top: 115px;
}
.redmsg {
  width: 100px;
  border-radius: 35px;
  margin-top: 4px;
  border: double;
}
</style>