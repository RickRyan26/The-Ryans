import { config } from '$lib/config';

export async function handle({ event, resolve }) {
	const url = new URL(event.url);

	if (url.pathname !== '/' && !url.pathname.includes('/images/')) {
		return new Response(null, {
			status: 302,
			headers: { location: '/' }
		});
	}

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
