import React from "react";
import Todo from "./components/Todo";
import { context } from "./components/Context";
import DecidedTodos from "./components/DecidedTodos";

function App() {

  const [todos, setTodos] = React.useState([]);
  const [todoTitle, setTodoTitle] = React.useState('');

  //отвечает за решенные задачи
  const [completedTodos, setCompletedTodos] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const solve = (id, title) => {
    completedTodos.unshift({
      id: id,
      title: title
    });
    setCompletedTodos([
      ...completedTodos
    ])
    deleteTodo(id);
  }

  const deleteCompletedTodos = (id) => {
    setCompletedTodos(completedTodos.filter(item => item.id !== id))
  }

  //отвечает за решенные задачи

  React.useEffect(() => {
    const item = localStorage.getItem('todos') || JSON.stringify([]);
    const item2 = localStorage.getItem('todos2') || JSON.stringify([]);
    setTodos(JSON.parse(item));
    setCompletedTodos(JSON.parse(item2));
  }, [])


  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  React.useEffect(() => {
    localStorage.setItem('todos2', JSON.stringify(completedTodos))
  }, [completedTodos])

  const todoAdd = (e) => {
    if (e.key == 'Enter' && todoTitle.length >= 3) {
      todos.unshift({
        id: Date.now(),
        title: todoTitle
      })
      setTodos([
        ...todos
      ])
      setTodoTitle('');
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(item => item.id !== id));
  }

  const changeTodoUl = () => {
    setShow(prev => !prev)
  }

  return (
    <context.Provider value={{ deleteTodo, deleteCompletedTodos, solve }}>
      <div className="container">
        <div className="wrapper">
          <div className="todo">
            <h1>{!show ? "Мои задачи" : "Решенные задачи"}</h1>
            {!show && <input
              value={todoTitle}
              onChange={(event) => setTodoTitle(event.target.value)}
              onKeyPress={(e) => todoAdd(e)}
              placeholder="Что сегодня?"></input>}
            {!show && <Todo todos={todos} /> || <DecidedTodos completedTodos={completedTodos} />}
            <div className="cheked">
              <img onClick={() => changeTodoUl()} src={!show ? "./img/completed.png" : "./img/close.png"}></img>
            </div>
          </div>
        </div>
      </div>
    </context.Provider>
  )
}

export default App;
