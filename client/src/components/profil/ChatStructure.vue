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
              <v-btn class="redmsg" @click="redirectMsg(item.id)">
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
export default {
  data() {
    return {
      ChatTeachers: [
        {
          name: "Melek Houidi",
          id:123
        },
        {
          name: "Khaled Yeferni ",
          id:133
        },
        {
          name: "Zied sradki ",
          id:143
        },
        {
          name: "Wael Jouini ",
          id:153
        },
      ],
    };
  },
  methods: {
    redirectMsg(x) {
      this.$store.commit("setroom", x);
      this.$router.push({ path: "/ChatContainer", addToHistory: false });
    },
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
