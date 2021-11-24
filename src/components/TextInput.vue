<template>
  <div class="w-full relative flex flex-row items-center">
    <label class="absolute pl-2" v-show="id > 0">{{ id }}.</label>
    <textarea ref="textinput" v-if="id > 0" type="text" class="shadow appearance-none border rounded w-full py-2 pr-28 pl-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :class="{ 'line-through': done }" v-model="text" v-on:keydown="onKeyDown" v-on:keydown.enter="onEnter" :placeholder="getPlaceholder"></textarea>
    <input ref="textinput" type="text" v-else class="shadow appearance-none border rounded w-full py-2 pr-28 pl-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :class="{ 'line-through': done }" v-model="text" v-on:keydown="onKeyDown" v-on:keydown.enter="onEnter" :placeholder="getPlaceholder">
    <label class="absolute right-0 text-xs font-light" v-show="id > 0">{{ date }}</label>
  </div>
</template>

<script>
import debounce from 'debounce'
import { mapActions } from 'vuex'
export default {
  name: "TextInput",
  props: ['name', 'id', 'done', 'date'],
  data() {
    return {
      text: '',
      placeholder: [
        'What you wish to do?',
        'Did you miss out anything?',
        'I wish to',
        'I will complete'
      ]
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
      }
    }, 300),
    ...mapActions([
      'createTodo',
      'updateTodo'
    ])
  },
  computed: {
    getPlaceholder () {
      const random = Math.floor(Math.random() * (this.placeholder.length - 1 - 1 + 1)) + 1;
      return this.placeholder[random]
    }
  }
};
</script>

<style scoped>
</style>