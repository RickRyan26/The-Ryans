import { error } from '@sveltejs/kit';

const config: any = {
	hilltop: {
		title: 'Hilltop'
	},
	debra: {
		title: 'Debra'
	}
};

export async function load({ url }) {
	const id = url.searchParams.get('id');

	if (!id) {
		error(404, {
			message: 'Not found'
		});
	}

	return config[id];
}
