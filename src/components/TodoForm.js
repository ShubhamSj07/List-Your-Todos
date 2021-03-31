import React, { useState } from "react";
import {
	FormGroup,
	Input,
	InputGroup,
	InputGroupAddon,
	Form,
	Button,
} from "reactstrap";
import { v4 } from "uuid";

import { RiAddFill } from "react-icons/ri";

//material-ui-toast
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

const TodoForm = ({ addTodos }) => {
	const [todoString, setTodoString] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (todoString === "") {
			return toast.error("Please enter a todo...");
		}
		const todo = {
			todoString,
			id: v4(),
		};

		addTodos(todo);
		toast.success(`${todoString} todo added! to list `);

		setTodoString("");
	};

	return (
		<>
			<ToastContainer position="bottom-center" autoClose="1600" />
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<InputGroup id="todo">
						<Input
							autoFocus="on"
							type="text"
							name="todo"
							id="todo-txt"
							autoComplete="off"
							placeholder="Enter a todo.."
							value={todoString}
							onChange={e => setTodoString(e.target.value)}
						/>
						<InputGroupAddon addonType="prepend">
							<Button color="warning">
								<RiAddFill
									style={{
										fontSize: "1.5rem",
										color: "#fff",
										backgroundColor: "red",
										borderRadius: " 50%",
									}}
								/>
							</Button>
						</InputGroupAddon>
					</InputGroup>
				</FormGroup>
			</Form>
		</>
	);
};

export default TodoForm;
