import type { PageServerLoad } from '.svelte-kit/types/src/routes/$types';

export const load: PageServerLoad = async ({ url }) => {
	return {
		default: url.searchParams.get('default')
	};
};
