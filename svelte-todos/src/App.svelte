<script>
  import "carbon-components-svelte/css/white.css";
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import TodoList from './components/TodoList.svelte'
  import TodoForm from './components/TodoForm.svelte'
import { onMount } from 'svelte';
import { todos } from './services/store';
import { loadTodos } from './services/todoService';
import { createTodo } from './services/todoService';
import { updateTodo } from './services/todoService';
import { deleteTodo } from './services/todoService';

  onMount(async () => {
    todos.set(await loadTodos());
    console.log('Todos', $todos);
  });

  const getTodos = async () => {
    return await loadTodos();
  }

  const submitTodo = async (todo) => {
    await createTodo(todo);
    todos.set(await loadTodos());
  }

  const updateStatus = async (todo) => {
    let updatedTodo = {...todo, completed: !todo.completed};
    console.log("Update Todo", updatedTodo);
    await updateTodo(updatedTodo);
    todos.set(await loadTodos());
  }

  const deleteTodoItem = async (todo) => {
    await deleteTodo(todo);
    todos.set(await loadTodos());
  }

</script>

<main>
  <h2>Todos</h2>
  <TodoForm submitTodo={submitTodo}/>
  <TodoList todos={$todos} updateTodo={updateStatus} deleteTodo={deleteTodoItem}/>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  @media (min-width:640px) {
    main {
      max-width: none;
    }
  }
</style>
