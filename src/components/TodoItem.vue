<template>
      <div class="todoitem inline-flex content-center align-center flex-row antialiased text-gray-800 w-full relative">
            <TextInput :name="itemName" :id="itemId" :done="itemDone" />
            <Action class="todoitem-action" :done="itemDone" :id="itemId" v-show="itemId > 0" />
      </div>
</template>

<script>
import Action from "./Action.vue";
import TextInput from "./TextInput.vue";

export default {
name: "App",
  data() {
    return {
      itemId: 0,
      itemName: '',
      itemDone: false,
    };
  },
  props: ['item'],
  components: {
    Action,
    TextInput,
  },
  created () {
      this.itemId = this.item ? this.item.id : 0
      this.itemName = this.item ? this.item.name : ''
      this.itemDone = this.item ? this.item.done : false
  },
  methods: {
      onHover () {
            console.log('onHover')
      }
  }
};
</script>

<style scoped>
      .todoitem:hover .todoitem-action {
            opacity: 1;
      }
</style>