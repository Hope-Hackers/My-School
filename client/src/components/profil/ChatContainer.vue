<template>
  <div class="chat-container">
    <div class="heading">
      <!-- uuid : unique user ID -->
      <h1>{{ " User ID: " + this.uuid }}</h1>
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
  min-width: 920px;
  width: 25%;
  height: 500px;
  margin: auto;
  background-color: #ffffff;
  border: solid 2px #44a4b1;
  border-radius: 50px;
  margin-top: 53px;
  margin-left: 470px;
}

.heading {
  display: table;
  width: 95%;
  height: 28px;
  text-align: center;
  background-color: #cdcdcd;
  border-radius: 3px 3px 0 0;
  -ms-user-select: none;
  user-select: none;
  background: linear-gradient(#ededed 0%, #17a7a1 75%);
  margin-left: 23px;
  border-radius: 289px;
  margin-top: 3px;
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
.message-bubble.me .message-text[data-v-dae3de60] {
  background-color: #9ec6f5;
  margin-top: 19px;
}
</style>
