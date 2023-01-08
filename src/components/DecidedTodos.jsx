import React from "react";
import { context } from "./Context";

export default function DecidedTodos({ completedTodos }) {
    const { deleteCompletedTodos } = React.useContext(context);
    return (
        <>
            {!completedTodos.length > 0 && <div className="face_smile ">
                <img width={350} height={350} src="./img/face.png"></img>
            </div>}
            <ul className="change">
                {completedTodos.map(item => (
                    <li key={item.id}>
                        <s>{item.title}</s>
                        <div className="todo__buttons_change">
                            <button
                                onClick={() => deleteCompletedTodos(item.id)}
                                className="todo__delete">
                                <span></span>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>

    )
}