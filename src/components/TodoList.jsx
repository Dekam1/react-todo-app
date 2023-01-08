import React from "react";
import { context } from "./Context";

export default function TodoList({title, id}) {
    const { deleteTodo, solve } = React.useContext(context);

    return (
        <li>
            {title}
            <div className="todo__buttons">
                <button 
                onClick={() => solve(id, title)}
                className="todo__check">
                    <span></span>
                </button>
                <button
                onClick={() => deleteTodo(id)}
                 className="todo__delete">
                    <span></span>
                </button>
            </div>
        </li>
    )
}