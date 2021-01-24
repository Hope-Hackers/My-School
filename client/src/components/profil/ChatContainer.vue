<template>
  <div class="chat-container">
    <div class="heading">
      <!-- uuid : unique user ID -->
      <h1>{{ " User ID: " + uuid }}</h1>
    </div>
    <div class="body">
      <div class="table">
        <chat-log></chat-log>
        <message-input></message-input>
      </div>
    </div>
  </div>
</template>

<script>
import ChatLog from "./ChatLog.vue";
import MessageInput from "./MessageInput.vue";
import { mapGetters } from "vuex";
import axios from "axios";

// import io from "socket.io-client";
/*new Vue({

  methods: {
    clickButton: function(data) {
      this.$socket.emit(" emit_method ", data);
    },
  },
});*/

export default {
  name: "chat-container",
  components: {
    ChatLog,
    MessageInput,
  },
  data() {
    return {
      isConnected: false,
    };
  },
  mounted() {
    this.$store.commit("clearHistory");
    //Request the messages of the current Teacher from the server
    axios
      .get(
        `http://localhost:7000/api/messages/getMessages?id1=${this.uuid}&id2=${this.receivedId}`
      )
      .then((response) => {
        const msgs = response.data.reverse();
        // Iterate msgs array and save each element to history
        msgs.forEach((elem) => {
          this.$store.commit("addHistory", { history: [elem] });
        });
      });
  },
  computed: {
    ...mapGetters({
      uuid: "getMyUuid",
      receivedId: "getroom",
    }),
  },
};
</script>

<style scoped>
h1 {
  display: table-cell;
  vertical-align: middle;
  margin: 0;
  font-size: 16px;
  font-weight: normal;
}

.chat-container {
  display: table;
  max-width: 400px;
  min-width: 300px;
  width: 25%;
  height: 500px;
  margin: auto;
  background-color: #ffffff;
  border: solid 1px #bfbfbf;
  border-radius: 3px;
  margin-top: 53px;
}

.heading {
  display: table;
  width: 100%;
  height: 28px;
  text-align: center;
  background-color: #cdcdcd;
  border-radius: 3px 3px 0 0;
  -ms-user-select: none;
  user-select: none;
  background: linear-gradient(#ededed 0%, #cdcdcd 75%);
}

.body {
  display: block;
  width: auto;
  height: inherit;
  overflow: hidden;
  background: url("./image/pubnub-filter-blocks-bg.png");
}

.table {
  display: table;
  width: 100%;
  height: 100%;
}
</style>
