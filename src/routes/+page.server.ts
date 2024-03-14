// import { error } from '@sveltejs/kit';
import { config } from '$lib/config';

export async function load({ url }) {
	const id =
		url.searchParams.get('id') === 'debra'
			? 'debra'
			: url.searchParams.get('id') === 'hilltop'
				? 'hilltop'
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
