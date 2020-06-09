import React from 'react'
export default props =>
    <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{
            textDecoration: props.todo.complete ? "line-through" : ""
        }} onClick={props.toggleComplelte}>{props.todo.text}</div>
        <button onClick={props.onDelete}>x</button>
    </div>