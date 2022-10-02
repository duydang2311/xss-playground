import type { PageLoad } from '.svelte-kit/types/src/routes/$types';

export const load: PageLoad = async ({ url }) => {
	return {
		default: url.searchParams.get('default')
	};
};
