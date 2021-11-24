<template>
  <input ref="textinput" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :class="{ 'line-through': done }" v-model="text" v-on:keydown="onKeyDown" v-on:keydown.enter="onEnter">
</template>

<script>
import debounce from 'debounce'
import { mapActions } from 'vuex'
export default {
  name: "TextInput",
  props: ['name', 'id', 'done'],
  data() {
    return {
      text: ''
    };
  },
  mounted () {
    this.text = this.name;
  },
  methods: {
    onEnter: function() {
      if (this.id) {
        this.updateTodo({
          id: this.id,
          name: this.text
        })
      } else {
        this.createTodo({
          name: this.text
        })
        this.text = '';
      }
    },
    onKeyDown: debounce(function(evt) {
      if (this.id) {
        this.updateTodo({
          id: this.id,
          name: this.text
        })
        console.log(evt);
      }
    }, 300),
    ...mapActions([
      'createTodo',
      'updateTodo'
    ])
  }
};
</script>

<style scoped>
</style>