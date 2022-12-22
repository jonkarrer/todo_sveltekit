// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.

type Todo = {
	id: string;
	description: string;
	done: boolean;
};

const db: Map<String, Array<Todo>> = new Map();

export function getTodos(userid: string) {
	return db.get(userid);
}

export function editTodo(userid: string, todoid: string, newDescription: string) {
	const todos = db.get(userid);
	if (!todos) {
		return 'User not found.';
	}

	const index = todos.findIndex((todo: any) => todo.id === todoid);

	if (index != -1) {
		todos[index].description = newDescription;
	}
}

export function createTodo(userid: string, description: string) {
	if (!db.has(userid)) {
		db.set(userid, []);
	}

	const todos = db.get(userid);

	todos?.push({
		id: crypto.randomUUID(),
		description,
		done: false
	});
}

export function deleteTodo(userid: string, todoid: string) {
	const todos = db.get(userid);

	if (!todos) {
		return;
	}

	const index = todos.findIndex((todo: any) => todo.id === todoid);

	if (index != -1) {
		todos?.splice(index, 1);
	}
}
