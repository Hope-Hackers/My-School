<template>
  <v-data-table
    :headers="headers"
    :items="students"
    sort-by="moyenne"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My Class</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn 
              small
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Student name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.moyenne"
                      label="moyenne"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.maths"
                      label="maths"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.sciences"
                      label="sciences"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.physics"
                      label="physics"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
  import axios from "axios";
  export default {
    name: 'TeacherGrades',
    data: () => ({
      dialog: false,
      dialogDelete: false,
      fetched:false,
      headers: [
        {
          text: 'Students',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Moyenne', value: 'moyenne' },
        { text: 'Maths', value: 'maths' },
        { text: 'Sciences', value: 'sciences' },
        { text: 'Physics', value: 'physics' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      items: [],
      students: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        moyenne: 0,
        maths: 0,
        sciences: 0,
        physics: 0,
      },
      defaultItem: {
        name: '',
        moyenne: 0,
        maths: 0,
        sciences: 0,
        physics: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.students = this.items
        // [
          // {
          //   name: 'Khaled Yeferni',
          //   moyenne: 18,
          //   maths: 16.0,
          //   sciences: 20,
          //   physics: 18.0,
          // },
          // {
          //   name: 'Melek Houidi',
          //   moyenne: 15,
          //   maths: 15,
          //   sciences: 15,
          //   physics: 15,
          // },
          // {
          //   name: 'Zied Sradki',
          //   moyenne: 14,
          //   maths: 14,
          //   sciences: 14,
          //   physics: 14,
          // },
          // {
          //   name: 'Wael Jouini',
          //   moyenne: 12,
          //   maths: 12,
          //   sciences: 12,
          //   physics: 12,
          // },
          // {
          //   name: 'Ahmed Lahmer',
          //   moyenne: 13,
          //   maths: 13,
          //   sciences: 13,
          //   physics: 13,
          // },
          // {
          //   name: 'Bedis Zitoun',
          //   moyenne: 17,
          //   maths: 17,
          //   sciences: 17,
          //   physics: 17,
          // },
          // {
          //   name: 'Hichem Samti',
          //   moyenne: 16.5,
          //   maths: 18,
          //   sciences: 16,
          //   physics: 17,
          // },
          // {
          //   name: 'Dheker Lazrek',
          //   moyenne: 15.5,
          //   maths: 18,
          //   sciences: 15,
          //   physics: 14,
          // },
          // {
          //   name: 'Aziz Dhaoui',
          //   moyenne: 16,
          //   maths: 16,
          //   sciences: 16,
          //   physics: 16,
          // },
          // {
          //   name: 'Anas Fallah',
          //   moyenne: 12.5,
          //   maths: 10,
          //   sciences: 12,
          //   physics: 16,
          // },
        // ]
      },

      editItem (item) {
        this.editedIndex = this.students.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.students.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.students.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.students[this.editedIndex], this.editedItem)
        } else {
          this.students.push(this.editedItem)
        }
        this.close()
      },
    },

    async mounted () {
      var grade = await axios.get('http://localhost:3000/api/grades')
        for (var i = 0; i < grade.data.length; i++){
          this.items.push(grade.data[i])
        }
        console.log (grade.data);
        this.fetched = true;
    }

  }
</script>

<style lang="stylus" scoped>

</style>