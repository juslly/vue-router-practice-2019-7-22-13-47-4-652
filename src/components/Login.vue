<template>
  <div class="container">
    <Jquery/>
    <Input/>
    <br/>
    <ol>
      <li v-for="index in getMessageNum()" v-bind:key="index">
        <List v-bind:transIndex="index"/>
      </li>
    </ol>
    <div>
      <ul id="filters">
        <li>
          <a href="#" data-filter="all">ALL</a>
        </li>
        <li>
          <a href="#" data-filter="active">Active</a>
        </li>
        <li>
          <a href="#" data-filter="complete">Complete</a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import Jquery from "./Jquery.vue";
import Input from "./Input.vue";
import List from "./List.vue"

export default {
  name: "app",
  components: {
   Jquery,
   Input,
   List
  },

  // data(){
  // return {
  //       parentMsg: 3
  // }
  // },

  methods: {
    getMessageNum(){
      return this.$store.getters.getValues.length;
       console.log(this.$store.getters.getValues.length);
    }
  }
};
</script>


<style>
body {
  font: normal normal 13px/16px "Open Sans", sans-serif;
  background: #ccc;
}

.container {
  padding: 20px;
  width: 400px;
  margin: 0 auto;
  margin-top: 40px;
  background: white;
  border-radius: 5px;
}

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

ol {
  padding-left: 20px;
}

ol li {
  padding: 5px;
  color: #000;
}

ol li span {
  word-break: break-all;
  width: 70%;
}

ol li:nth-child(even) {
  background: #f4ecec;
}

li:hover {
  cursor: pointer;
}

#filters {
  text-align: center;
  margin-bottom: -10px;
  margin-top: 40px;
}

#filters li a {
  color: #fc999b;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

#filters li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}
#filters li a.selected,
#filters li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}

#filters li {
  display: inline;
  margin: 0 0 5px 0;
  padding: 8px;
  list-style: none;
  outline: none;
}

/* .checked {
  color: #999;
  text-decoration: line-through;
} */


</style>

