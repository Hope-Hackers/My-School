<template>
  <div data-app>
    <v-data-table
      :headers="headers"
      :items="row"
      :search="search"
      sort-by="time"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Class Schedule</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <!-- <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"          
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer> -->
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn small class="mb-2" v-bind="attrs" v-on="on">
                Add Row
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.time"
                        label="Time"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.monday"
                        label="monday"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.tuesday"
                        label="tuesday"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.wednesday"
                        label="wednesday"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.thursday"
                        label="thursday"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.friday"
                        label="friday"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.saturday"
                        label="saturday"
                      ></v-text-field>
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
  name: "AdminClassSchedule",
  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    fetched: false,
    headers: [
      {
        text: "Time",
        align: "start",
        sortable: false,
        value: "time",
      },
      { text: "Monday", value: "monday" },
      { text: "Tuesaday", value: "tuesday" },
      { text: "Wednesday", value: "wednesday" },
      { text: "Thursday", value: "thursday" },
      { text: "Friday", value: "friday" },
      { text: "Saturday", value: "saturday" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    items: [],
    row: [],
    editedIndex: -1,
    editedItem: {
      time: "",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
    },
    defaultItem: {
      time: "",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
      this.row = this.items;
    },
    editItem(item) {
      this.editedIndex = this.row.indexOf(item);
      this.editedItem = item;
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.row.indexOf(item);
      this.editedItem = item;
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      console.log(this.editedItem);
      var deleted = await axios.delete(
        `http://localhost:7000/api/classschedule/delete/${this.editedItem._id}`
      );
      if (deleted.data.status) {
        this.$vs.notification({
          text: "Deleted successfully",
          title: "Notification",
          position: "top-right",
          color: "success",
        });
        this.row.splice(this.editedIndex, 1);
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
          "http://localhost:7000/api/classschedule/update",
          this.editedItem
        );
        if (updated.data.status) {
          this.$vs.notification({
            text: "Updated successfully",
            title: "Notification",
            position: "top-right",
            color: "success",
          });
          this.row[this.editedIndex] = this.editedItem;
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
          "http://localhost:7000/api/classschedule/create",
          this.editedItem
        );
        console.log(created.data);
        if (created.data.time) {
          this.$vs.notification({
            text: "Added successfully",
            title: "Notification",
            position: "top-right",
            color: "success",
          });
          this.editedItem = created.data.newGrade;
          this.row.push(this.editedItem);
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
    var schedule = await axios.get("http://localhost:7000/api/classschedule");
    this.row = schedule.data;
    console.log(schedule.data);
    this.fetched = true;
  },
};
</script>

<style lang="stylus" scoped></style>
