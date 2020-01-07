import * as api from "@/api/todo";
import { STORAGE_KEY } from "./mutations.js";
export default {
  getAllTodos: ({ commit }) => {
    let cache = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (cache.length === 0) {
      api.getTodos(todos => {
        commit("receiveAll", todos);
      });
    }
  },
  addTodo({ commit }, text) {
    commit("addTodo", {
      text,
      done: false
    });
  },

  removeTodo({ commit }, todo) {
    commit("removeTodo", todo);
  },

  toggleTodo({ commit }, todo) {
    commit("editTodo", { todo, done: !todo.done });
  },

  editTodo({ commit }, { todo, value }) {
    commit("editTodo", { todo, text: value });
  },

  toggleAll({ state, commit }, done) {
    state.todos.forEach(todo => {
      commit("editTodo", { todo, done });
    });
  },

  clearCompleted({ state, commit }) {
    state.todos
      .filter(todo => todo.done)
      .forEach(todo => {
        commit("removeTodo", todo);
      });
  }
};
