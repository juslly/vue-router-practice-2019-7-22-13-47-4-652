<template>
  <div class="input">
    <div>
      <input id="input-text" class="input-text" type="text" name="ListItem" />
      <div id="button" v-on:click="submit">Add</div>
    </div>
  </div>
</template>


<script>

export default {
  methods: {
    submit() {
      let submitValue = document.getElementById("input-text").value;
      this.$store.commit("submitMessage", submitValue);
    }
    
  }
};
</script>


<style>

.input-text {
  width: 70%;
}

input {
  padding: 4px 15px 4px 0;
}

#button {
  display: inline-block;
  background-color: #fc999b;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  margin-top: 2px;
  padding: 5px 15px;
}

#button:hover {
  cursor: pointer;
  opacity: 0.8;
}


</style>

