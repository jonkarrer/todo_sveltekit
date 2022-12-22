import * as db from '$lib/server/database.js';

export function load({ cookies }: { cookies: any }) {
	const id = cookies.get('userid');

	if (!id) {
		cookies.set('userid', crypto.randomUUID(), { path: '/' });
	}

	return {
		todos: db.getTodos(id) ?? []
	};
}

export const actions = {
	create: async ({ cookies, request }: { cookies: any; request: any }) => {
		const data = await request.formData();
		db.createTodo(cookies.get('userid'), data.get('description'));
	},
	edit: async ({ cookies, request }: { cookies: any; request: any }) => {
		const data = await request.formData();
		db.editTodo(cookies.get('userid'), data.get('todoid'), data.get('new_description'));
	},
	delete: async ({ cookies, request }: { cookies: any; request: any }) => {
		const data = await request.formData();
		db.deleteTodo(cookies.get('userid'), data.get('todoid'));
	}
};
