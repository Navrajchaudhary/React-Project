import React, { useEffect, useState } from "react";

const Todos = () => {
    const [task, setTask] = useState("");

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("Todos")) || [] );

    useEffect(()=> {
        localStorage.setItem("Todos", JSON.stringify(todos))
    }, [todos])

    const addItem = () => {
        if (task === "") {
            alert("please add an items");
            return;
        }

        const copyTodos = [...todos];
        copyTodos.push(task);
        setTodos(copyTodos);

        setTask("");
    };

    const deleteTask = (idx) => {
        const copyTodos = [...todos];
        copyTodos.splice(idx, 1);
        setTodos(copyTodos);
    };

    const editTask = (idx) => {
        const edit = prompt("Edit your task");

        if(edit === null) return

        const copyTodos = [...todos];

        copyTodos.splice(idx, 1, edit);
        setTodos(copyTodos);
    };

    const handelSumbit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex flex-col bg-white w-120 h-full mt-5 px-4 py-8 rounded ">
            <h1 className="text-2xl font-bold text-center traking-2 pb-2">
                TODO List
            </h1>
            <form
                onSubmit={(e) => {
                    handelSumbit(e);
                }}
                className="border-t-2 border-gray-300 py-4 flex gap-2"
            >
                <input
                    className="border border-gray-300 outline-none py-2 px-4 rounded w-full "
                    type="text"
                    placeholder="Enter a Task..."
                    value={task}
                    onChange={(e) => {
                        setTask(e.target.value);
                    }}
                />
                <button
                    className="border border-gray-300 outline-none py-2 px-4 rounded bg-green-500 text-white cursor-pointer active:scale-95 font-semibold"
                    onClick={addItem}
                >
                    Add
                </button>
            </form>

            <div className="flex flex-col gap-3">
                {todos.map((elem, idx) => {
                    return (
                        <div
                            key={idx}
                            className="bg-gray-100 px-3 py-2 rounded flex justify-between items-center font-semibold"
                        >
                            {elem}
                            <div className="flex gap-2 items-center">
                                <button
                                    onClick={() => {
                                        editTask(idx);
                                    }}
                                    className="bg-green-800 px-2 py-1 rounded text-white text-sm font-medium cursor-pointer active:scale-95"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => {
                                        deleteTask(idx);
                                    }}
                                    className="bg-red-400 px-2 py-1 rounded text-white text-sm font-medium cursor-pointer active:scale-95"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Todos;
