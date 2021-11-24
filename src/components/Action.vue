<template>
  <div class="opacity-0 absolute h-full right-0 top-0 py-1 px-1">
    <div class="flex flex-row items-center">
      <font-awesome-icon class="mr-3 delete icon" icon="trash" title="Delete item" v-on:click="deleteItem" />
      <font-awesome-icon class="done icon" icon="check" v-show="!completed" title="Done" v-on:click="doneItem" />
      <font-awesome-icon class="undone icon" icon="times" v-show="completed" title="Not yet" v-on:click="undoneItem" />
    </div>
  </div>
</template>

<script>
import {
  faCheck,
  faTimes,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { mapActions } from 'vuex'
export default {
  name: "Action",
  props: ['done', 'id'],
  data() {
    return {
      completed: false
    };
  },
  created () {
    this.completed = this.done
  },
  methods: {
    doneItem() {
      this.completed = true;
      if (this.id) {
        this.updateTodo({
          id: this.id,
          done: this.completed
        })
      }
    },
    undoneItem() {
      this.completed = false;
      if (this.id) {
        this.updateTodo({
          id: this.id,
          done: this.completed
        })
      }
    },
    deleteItem() {
      console.log('removeitem', this.id);
      if (this.id) {
        this.removeTodo(this.id);
      }
    },
    ...mapActions([
      'updateTodo',
      'removeTodo'
    ])
  },
  beforeCreate() {
    this.$library.add(
      faCheck,
      faTrash,
      faTimes
    );
  },
};
</script>

<style scoped>
  .icon {
    cursor: pointer;
    width: 20px;
    font-size: 20px;
    height: 100%;
  }
</style>