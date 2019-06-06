import React from "react";

export function TodoItem(props){
    return (
        <li
            style={{ color: "black", cursor: "pointer" }}
        >
            {props.description}
        </li>
    );
}
