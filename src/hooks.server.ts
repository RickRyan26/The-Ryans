import { config } from '$lib/config';

export async function handle({ event, resolve }) {
	const url = new URL(event.url);
	const id =
		url.searchParams.get('id') === 'debra'
			? 'debra'
			: url.searchParams.get('id') === 'hilltop'
				? 'hilltop'
				: url.origin === 'https://www.debrakaygeorgeinteriors.com'
					? 'debra'
					: 'hilltop';

	event.locals.config = config[id];
	const response = await resolve(event);
	return response;
}
