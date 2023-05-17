const baseurl = "http://localhost:81/api/todos";

export const loadTodos = () => {
  return fetch(baseurl).then((res) => res.json());
}

export const createTodo = (todo) => {
  return fetch(baseurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  }).then((res) => res.json());
}

export const updateTodo = (todo) => {
  console.log(baseurl+"/"+todo.id);
  return fetch(baseurl+"/"+todo.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  }).then((res) => res.json());
}

export const deleteTodo = (todo) => {
  return fetch(baseurl+"/"+todo.id, {
    method: "DELETE",
  }).then((res) => res.json());
}
