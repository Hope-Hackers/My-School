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
import PubNubVue from "pubnub-vue";
import { mapGetters } from "vuex";

function fetchHistory(store) {
  PubNubVue.getInstance().history(
    {
      channel: "vueChat",
      count: 6, // how many items to fetch
      stringifiedTimeToken: true, // false is the default
    },
    function(status, response) {
      const msgs = response.messages;
      console.log(msgs);
      // Iterate msgs array and save each element to history
      msgs.forEach((elem) => {
        store.commit("addHistory", { history: [elem] });
      });
    }
  );
}

export default {
  name: "chat-container",
  components: {
    ChatLog,
    MessageInput,
  },
  data() {
    return {
      title: "PubNub & Vue Global Chat ",
    };
  },
  mounted() {
    // Subscribe to PubNub
    this.$pnSubscribe({
      channels: ["vueChat"],
    });
    this.$nextTick(fetchHistory(this.$store));
  },
  computed: {
    ...mapGetters({
      uuid: "getMyUuid",
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
