import React, { useState } from 'react';
import {
	FormGroup,
	Input,
	InputGroup,
	InputGroupAddon,
	Form,
	Button,
} from 'reactstrap';
import { v4 } from 'uuid';

import { RiAddFill } from 'react-icons/ri';

const TodoForm = ({ addTodos }) => {
	const [todoString, setTodoString] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (todoString === '') {
			return alert('Please enter a todo!');
		}
		const todo = {
			todoString,
			id: v4(),
		};

		addTodos(todo);

		setTodoString('');
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup>
				<InputGroup>
					<Input
						type='text'
						name='todo'
						id='todo'
						autoComplete='false'
						placeholder='Enter a todos..'
						value={todoString}
						onChange={e => setTodoString(e.target.value)}
						style={{
							fontSize: '1.4rem',
						}}
					/>
					<InputGroupAddon addonType='prepend'>
						<Button color='warning'>
							<RiAddFill
								style={{
									fontSize: '1.5rem',
									color: '#fff',
									backgroundColor: 'red',
									borderRadius: ' 50%',
								}}
							/>
						</Button>
					</InputGroupAddon>
				</InputGroup>
			</FormGroup>
		</Form>
	);
};

export default TodoForm;
