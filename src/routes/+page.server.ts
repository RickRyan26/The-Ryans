// import { error } from '@sveltejs/kit';
import { config } from '$lib/config';

export async function load({ url }) {
	const id = url.searchParams.get('id')
		? url.searchParams.get('id')
		: url.origin === 'https://www.debrakaygeorgeinteriors.com'
			? 'debra'
			: 'hilltop';

	// if (!id) {
	// 	error(404, {
	// 		message: 'Not found'
	// 	});
	// }

	return config[id];
}
