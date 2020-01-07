import vue from "vue";
export const STORAGE_KEY = "todos-vuejs";

// for testing
/*
if (navigator.userAgent.indexOf("PhantomJS") > -1) {
  window.localStorage.clear();
}
*/
export const mutations = {
  receiveAll(state, todos) {
    state.todos = todos;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
  },
  addTodo(state, todo) {
    state.todos.push(todo);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
  },

  removeTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

  editTodo(state, { todo, text = todo.text, done = todo.done }) {
    todo.text = text;
    todo.done = done;
  }
};
