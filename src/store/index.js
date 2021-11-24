import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todo: [
			{
				id: 1,
				name: '',
				done: false
			}
		]
	},
	mutations: {
		resetTodo (state, data) {
			state.todo = data
		},
		createTodo (state, data) {
			data.id = state.todo.length + 1;
			data.done = false;
			state.todo.push(data)
		},
		updateTodo (state, data) {
			state.todo = state.todo.map(item => {
				if (item.id === data.id) {
					return Object.assign({}, item, data)
				}
				return item;
			})
		},
		removeTodo (state, data) {
			const index = state.todo.map(item => item.id).indexOf(data);
			state.todo.splice(index, 1)
		}
	},
	actions: {
		async readTodoJson ({commit}) {
			const resp = await axios.get('/external/todo.json')
			commit("resetTodo", resp.data)
		},
		createTodo ({commit}, todo) {
			commit("createTodo", todo);
		},
		updateTodo ({commit}, todo) {
			commit("updateTodo", todo);
		},
		removeTodo ({commit}, todo) {
			commit("removeTodo", todo);
		}

	},
	getters: {
		todoList: state => state.todo,
		todoCount: state => state.todo.length
	}
})