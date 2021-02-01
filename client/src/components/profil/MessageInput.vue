<template>
  <div class="message-input">
    <textarea
      ref="messageInput"
      placeholder="message..."
      maxlength="20000"
      @keydown.enter="submitMessage"
    ></textarea>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "message-input",
  data() {
    return {};
  },
  methods: {
    submitMessage(event) {
      if (!event.shiftKey) {
        event.preventDefault();
      } else {
        return;
      }

      // If the message body is empty, do not submit
      if (event.target.value.length === 0) {
        return;
      }

      const userUUID = this.$store.getters.getMyUuid;
      const room = this.$store.getters.getroom;

      // console.log(even.target.value);
      // Publish to PubNub the text and user's uuid
      axios.post("http://localhost:7000/api/messages/postMessage", {
        text: event.target.value,
        uuid: userUUID,
        receiverId: room,
      });

      // Reset the text input
      event.target.value = "";
    },
  },
};
</script>

<style scoped>
.message-input {
  display: table-row;
  width: 100%;
  height: 26px;
}

textarea {
  width: 98%;
  height: 30px;
  padding: 0 5px;
  margin: 0;
  box-sizing: border-box;
  line-height: 20pt;
  resize: none;
  outline: none;
  font-size: 14px;
  border: solid 1px #aaaaaa;
  border-radius: 3px;
  font-family: Helvetica;
}
</style>
