// import { error } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from '$lib/schema';
import type { PageServerLoad, Actions } from './$types.js';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url, locals }) => {
	// if (!id) {
	// 	error(404, {
	// 		message: 'Not found'
	// 	});
	// }

	return { ...locals.config, form: await superValidate(zod(formSchema)) };
};

export const actions: Actions = {
	default: async (event) => {
		const { config } = event.locals;
		const form = await superValidate(event, zod(formSchema));
		const { email, message } = form.data;
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			console.log('sending email');
			const response = await fetch(`https://www.rickys.shop/api/email-relay`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: config.title,
					to: config.email,
					from: email,
					html: `<p>${message}</p>`
				})
			});
			console.warn('response:', response);
			if (response.ok) {
				console.log(`email sent successfully`);
				const result = await response.json();
				console.warn('result:', result);
			} else {
				console.error('failed email 1');
				console.error(response.statusText);
				return fail(400, {
					form
				});
			}
		} catch (error) {
			console.error('failed email 2', error);
			return fail(400, {
				form
			});
		}
		return {
			form
		};
	}
};
