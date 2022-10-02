import type { PageServerLoad } from '.svelte-kit/types/src/routes/sverdle/$types';

export const prerender = true;

export const load: PageServerLoad = ({ url }) => {
	const searchParams = url.searchParams;
	return {
		name: searchParams.get('name'),
		age: searchParams.get('age')
	};
};
