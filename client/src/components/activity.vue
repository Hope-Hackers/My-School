<template>
  <div class="container">
     <v-text-field
        label="TITLE "
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <v-text-field
        label="Text "
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
    <v-text-field label="ImageUrl"></v-text-field>
     <v-btn block>
    Add Activity
  </v-btn>
  </div>
</template>
<style>
.container {
  padding-top: 4em;
  
}

.intro {
  font-size: 4.5em;
  margin-bottom: 4.5em;
}

.input-value {
  margin-top: 1em;
  font-size: 1.25em;
}

.highlight {
  color: #00d1b2;
  font-weight: bold;
}
</style>
