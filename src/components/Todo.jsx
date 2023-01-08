import React from "react";
import TodoList from "./TodoList";

export default function Todo({ todos }) {
    return (
        <ul>
            {todos.map(item => <TodoList key={item.id} {...item}/>)}
        </ul>
    )
}