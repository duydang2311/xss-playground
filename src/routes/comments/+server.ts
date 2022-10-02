import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ cookies }) => {
	await new Promise((resolve) => setTimeout(resolve, Math.floor(300 + Math.random() * 300)));
	return new Response(cookies.get('comments'), { status: 200 });
};
