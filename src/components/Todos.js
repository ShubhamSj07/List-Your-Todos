import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { MdDeleteSweep } from 'react-icons/md';

const Todos = ({ todos, markComplete }) => {
	return (
		<ListGroup className='mt-5 mb-2 items'>
			{todos.map(todo => (
				<ListGroupItem key={todo.id} className='item-content'>
					{todo.todoString}
					<span className='float-right'>
						<MdDeleteSweep
							style={{
								fontSize: '1.5rem',
								cursor: 'pointer',
								color: 'red',
							}}
							onClick={() => markComplete(todo.id)}
						/>
					</span>
				</ListGroupItem>
			))}
		</ListGroup>
	);
};

export default Todos;
