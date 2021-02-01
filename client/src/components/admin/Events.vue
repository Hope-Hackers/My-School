<template>
  <div data-app>
    <v-data-table
      :headers="headers"
      :items="Events"
      :search="search"
      sort-by="name"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>All Events</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="1000px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn small class="mb-2" v-bind="attrs" v-on="on">
                Add Event
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="8" md="6">
                      <v-text-field
                        v-model="editedItem.title"
                        label="Tiltle"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.author"
                        label="Author"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.img"
                        label="Image url"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-textarea
                        v-model="editedItem.body"
                        label="Body"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EventsTable",
  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    fetched: false,
    headers: [
      {
        text: "Title",
        align: "start",
        sortable: false,
        value: "title",
      },
      { text: "Author", value: "author" },
      { text: "Date", value: "date" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    items: [],
    Events: [],
    editedIndex: -1,
    editedItem: {
      image: "",
      name: "",
      class: "",
      description: "",
    },
    defaultItem: {
      image: "",
      name: "",
      class: "",
      description: "",
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Event" : "Edit Item";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.Events = this.items;
    },
    editItem(item) {
      this.editedIndex = this.Events.indexOf(item);
      this.editedItem = item;
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.Events.indexOf(item);
      this.editedItem = item;
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      console.log(this.editedItem);
      var deleted = await axios.delete(
        `http://localhost:7000/api/events/delete/${this.editedItem._id}`
      );
      if (deleted.data.status) {
        this.$vs.notification({
          text: "Deleted successfully",
          title: "Notification",
          position: "top-right",
          color: "success",
        });
        this.Events.splice(this.editedIndex, 1);
      } else {
        this.$vs.notification({
          text: "Try again later",
          title: "Notification",
          position: "top-right",
          color: "danger",
        });
      }
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    async save() {
      if (this.editedIndex > -1) {
        for (var key in this.editedItem) {
          if (
            typeof this.editedItem[key] == "string" &&
            Number(this.editedItem[key])
          ) {
            this.editedItem[key] = Number(this.editedItem[key]);
          }
        }
        var updated = await axios.post(
          "http://localhost:7000/api/events/update",
          this.editedItem
        );
        if (updated.data.status) {
          this.$vs.notification({
            text: "Updated successfully",
            title: "Notification",
            position: "top-right",
            color: "success",
          });
          this.Events[this.editedIndex] = this.editedItem;
        } else {
          this.$vs.notification({
            text: "Try again later",
            title: "Notification",
            position: "top-right",
            color: "danger",
          });
        }
      } else {
        var created = await axios.post(
          "http://localhost:7000/api/events/create",
          this.editedItem
        );
        console.log(created.data);
        if (created.data.status) {
          this.$vs.notification({
            text: "Added successfully",
            title: "Notification",
            position: "top-right",
            color: "success",
          });
          this.editedItem = created.data.newGrade;
          this.Events.push(this.editedItem);
        } else {
          this.$vs.notification({
            text: "Try again later",
            title: "Notification",
            position: "top-right",
            color: "danger",
          });
        }
      }
      this.close();
    },
  },
  async mounted() {
    var EventsList = await axios.get("http://localhost:7000/api/events");
    this.Events = EventsList.data;
    console.log(EventsList.data);
    this.fetched = true;
  },
};
</script>

<style lang="stylus" scoped></style>
