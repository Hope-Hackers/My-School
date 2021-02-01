<template>
  <div class="chat-log" ref="chatLogContainer">
    <message-bubble
      v-for="historyMsg in history"
      :key="historyMsg._id"
      :uuid="historyMsg.senderId"
      :text="historyMsg.message"
    ></message-bubble>

    <message-bubble
      v-for="historyMsg in vueChatMsg"
      :key="historyMsg._id"
      :uuid="historyMsg.senderId"
      :text="historyMsg.message"
    ></message-bubble>
  </div>
</template>

<script>
import MessageBubble from "./MessageBubble.vue";
import { mapGetters } from "vuex";
import io from "socket.io-client";

/**
 * Auto scrolls the chat log to the bottom when a new message is received
 */
function scrollBottom() {
  this.$el.scrollTo(0, this.$el.scrollHeight);
}

export default {
  name: "chat-log",
  components: { MessageBubble },
  data() {
    return {
      /*
       * $pnGetMessage will listen to a channel subscribed to and start to
       * display messages as soon as they are received.
       */

      vueChatMsg: [],
    };
  },

  watch: {
    vueChatMsg: function() {
      this.$nextTick(scrollBottom);
    },
  },
  computed: {
    ...mapGetters({
      history: "getHistoryMsgs",
      uuid: "getMyUuid",
      room: "getroom",
    }),
  },
  //Check recently received messages and put them inside Chat room
  mounted() {
    let socket = io("http://localhost:7000/", { transport: ["websocket"] });
    socket.on("newmsg", (data) => {
      if (
        (data.senderId == this.uuid && data.receiverId == this.room) ||
        (data.receiverId == this.uuid && data.senderId == this.room)
      ) {
        this.vueChatMsg.push(data);
      }
    });
    
  },
};
</script>

<style scoped>
.chat-log {
  display: block;
  height: inherit;
  width: 100%;
  padding: 2% 4%;
  box-sizing: border-box;
  overflow-y: scroll;
}

.chat-log::-webkit-scrollbar {
  display: none;
}
</style>
