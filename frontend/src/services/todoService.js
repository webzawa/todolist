const baseUrl = `${process.env.REACT_APP_API_URL}/todos`;

export const loadTodos = () => {
  return fetch(baseUrl).then((res) => res.json());
}

export const getTodo = (id) => {
  return fetch(`${baseUrl}/${id}`).then((res) => res.json());
}

export const createTodo = (todo) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: todo.title,
      complited: todo.complited
    }),
  }).then((res) => res.json());
}

export const updateTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: todo.id,
      title: todo.title,
      complited: todo.complited
    }),
  }).then((res) => res.json());
}
export const deleteTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}