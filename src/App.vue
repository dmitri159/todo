<template>
  <div class="content-center flex flex-col max-w-md mx-auto">
    <h1 class="text-center text-xl my-5 font-bold">Todo</h1>
    <ul>
      <li class="pb-2" v-for="todo in todoList" :key="todo.name + todo.id + todo.done" :id="todo.id">
        <TodoItem :item="todo" />
      </li>
      <li>
        <TodoItem />
      </li>
    </ul>
    <pre v-html="todoList">
      
    </pre>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "App",
  data() {
    return {
      
    };
  },
  components: {
    TodoItem,
  },
  created() {
    this.readTodoJson();
  },
  methods: {
    ...mapActions([
      'readTodoJson'
    ])
  },
  computed: {
    ...mapGetters([
      'todoList'
    ])
  }
};
</script>