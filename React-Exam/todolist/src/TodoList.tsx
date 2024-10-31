import React, {ReactElement, useState} from "react";

type Todo = {
    id : number;
    content : string;
    isChecked : boolean;
}

const TodoList : React.FC = () => {
    const title : string = "Study Plan";
    const [todos, setTodos] = useState<Todo[]>([
        { id : 1, content : 'Study', isChecked : false},
        { id : 2, content : 'Sleeping', isChecked : false},
        { id : 3, content : 'Meeting', isChecked : false},
    ]);
    const [inputValue, setInputValue] = useState<string>("");

    const onClickChange = (id : number) => {
        setTodos((prevState) => {
            const newState = prevState.map((item) =>
                item.id === id ? {...item, isChecked : !item.isChecked } : item
            )

            return newState;
        })
    }

    const onClickAddTodo = () => {
        if(inputValue !== ""){
            const newTodoList = todos.concat({
                id : todos.length + 1,
                content : inputValue,
                isChecked : false,
            })
            setTodos(newTodoList);

            setInputValue("");
        }
    }
    const onChangeInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const onClickDelete = (id : number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div>
            <h1>{title}</h1>
            <div>
                <input
                    type={"text"}
                    placeholder={"Insert Your Todo."}
                    style={{
                        height : "3rem",
                        width : "20rem",
                        marginBottom : "2rem",
                        borderRadius : "0.75rem",
                        fontSize : "1.25rem",
                        padding : "0.5rem"
                    }}
                    onChange={onChangeInput}
                    value={inputValue}
                />
                <button
                    style={{
                        height : "3rem",
                        fontSize : "1.25rem",
                        borderRadius : "0.5rem",
                        padding : "0.5rem",
                        margin : "1rem"
                    }}
                    onClick={onClickAddTodo}
                >Add Todos</button>
            </div>
            <div className={"todo-list"}>
                <ul>
                    {
                        todos.map(
                            (todo: Todo) =>
                                <li
                                    style={{display : "flex"}}
                                    key={todo.id} className={todo.isChecked ? "checked" : ""}>
                                    <input type={"checkbox"} onChange={() => onClickChange(todo.id)}/>
                                    {
                                        todo.isChecked ?
                                            (<del>{todo.content}</del>) :
                                            (<span>{todo.content}</span>)
                                    }
                                    <button
                                        onClick={() => onClickDelete(todo.id)}
                                        style={{
                                            padding : "1rem",
                                            marginLeft : "auto"

                                        }}
                                    >Delete</button>
                                </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList;