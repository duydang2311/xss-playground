import type { Actions } from '.svelte-kit/types/src/routes/sverdle/$types';

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();
		if (!formData.has('comment')) {
			return;
		}
		const comments = JSON.parse(cookies.get('comments') || '[]') as string[];
		comments.push(formData.get('comment')!.toString());
		cookies.set('comments', JSON.stringify(comments), {
			httpOnly: false
		});
	}
};
