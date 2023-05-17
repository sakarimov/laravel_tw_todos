<script>
import { Button, Column, Grid, Row, TextInput } from "carbon-components-svelte";
import { todos } from "../../src/services/store";
import { loadTodos } from "../../src/services/todoService";

  export let submitTodo;
  let title = '';
  $: disabled = title.length < 3;
  const submit = async () => {
    submitTodo({title: title, completed: false});
    const todoList = await loadTodos();
    todos.set(todoList);
    title = '';
  }
</script>

<Grid>
  <Row>
    <Column>
      <TextInput placeholder="Enter Todo" bind:value={title} />
    </Column>
    <Column>
      <Button type="Submit" on:click={submit} disabled={disabled}>add</Button>
    </Column>
  </Row>
</Grid>
