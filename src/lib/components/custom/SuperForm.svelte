<script lang="ts">
	import * as Drawer from '$lib/components/ui/drawer';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Send } from 'lucide-svelte';
	import { page } from '$app/stores';

	export let isDialog = false;
	console.warn('isDialog:', isDialog);

	let email = '';
	let message = '';

	async function handleSubmit() {
		console.log('%c email', 'font-weight:bold', email);
		console.log('%c message', 'font-weight:bold', message);
		try {
			const response = await fetch(`https://www.rickys.shop/api/email-relay`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: $page.data.title,
					to: $page.data.email,
					from: email,
					html: `<p>${message}</p>`
				})
			});
			if (response.ok) {
				console.log(`email sent successfully`);
				return await response.json();
			} else {
				console.error(response.statusText);
			}
		} catch (error) {
			console.error(error);
		}
	}
</script>

{#if isDialog}
	<Dialog.Header>
		<h2 class="py-2">{$page.data.cta}</h2>
		<Dialog.Description>
			<div class="text-center text-xl font-bold dark:!text-white/90">{$page.data.name}</div>
			<div class="text-center text-xl dark:!text-white/90">
				<a class="underline" href="tel:{$page.data.phone}">{$page.data.phone}</a>
			</div>
			<div class="text-center text-xl dark:!text-white/90">
				<a class="underline" href="mailto:{$page.data.email}">{$page.data.email}</a>
			</div>
			<div class="text-center text-xl dark:!text-white/90">
				<a
					class="underline"
					href="https://maps.google.com/?q={encodeURIComponent($page.data.address)}"
					>{$page.data.address}</a
				>
			</div>
		</Dialog.Description>
	</Dialog.Header>
	<form on:submit|preventDefault={handleSubmit} class="mt-4 grid items-start gap-4 px-4 md:px-2">
		<div class="grid gap-2">
			<Label for="email" class="text-lg">Email</Label>
			<Input
				bind:value={email}
				type="email"
				id="email"
				class="bg-black/10 text-lg dark:bg-white/10 dark:!placeholder-white/70"
				placeholder="Enter your email..."
			/>
		</div>
		<div class="grid gap-2">
			<Label for="Message" class="text-lg">Message</Label>
			<Textarea
				bind:value={message}
				rows={6}
				id="Message"
				class="bg-black/10 text-lg dark:bg-white/10 dark:!placeholder-white/70"
				placeholder="Enter your message..."
			/>
		</div>
		<Dialog.Footer>
			<Button type="submit" class="rounded-full text-2xl font-bold">Send&nbsp;<Send /></Button>
		</Dialog.Footer>
	</form>
	<!-- <Button variant="outline">Cancel</Button> -->
{:else}
	<Drawer.Header class="mx-auto max-w-screen-md text-left">
		<h2 class="py-2">{$page.data.cta}</h2>
		<Drawer.Description>
			<div class="text-center text-base font-bold dark:!text-white/90">{$page.data.name}</div>
			<div class="text-center text-base dark:!text-white/90">
				<a class="underline" href="tel:{$page.data.phone}">{$page.data.phone}</a>
			</div>
			<div class="text-center text-base dark:!text-white/90">
				<a class="underline" href="mailto:{$page.data.email}">{$page.data.email}</a>
			</div>
			<div class="text-center text-base dark:!text-white/90">
				<a
					class="underline"
					href="https://maps.google.com/?q={encodeURIComponent($page.data.address)}"
					>{$page.data.address}</a
				>
			</div>
		</Drawer.Description>
	</Drawer.Header>
	<form
		on:submit|preventDefault={handleSubmit}
		class="mx-auto mt-0 grid max-w-screen-md items-start gap-4 px-4 md:px-2"
	>
		<div class="grid gap-2">
			<Label for="email" class="text-lg">Email</Label>
			<Input
				bind:value={email}
				type="email"
				id="email"
				class="bg-black/10 text-lg dark:bg-white/10 dark:!placeholder-white/70"
				placeholder="Enter your email..."
			/>
		</div>
		<div class="grid gap-2">
			<Label for="Message" class="text-lg">Message</Label>
			<Textarea
				bind:value={message}
				rows={4}
				id="Message"
				class="bg-black/10 text-lg dark:bg-white/10 dark:!placeholder-white/70"
				placeholder="Enter your message..."
			/>
		</div>
		<Drawer.Footer class="px-6 pt-2">
			<Button type="submit" class="rounded-full text-2xl  font-bold">Send &nbsp;<Send /></Button>
		</Drawer.Footer>
	</form>
	<!-- <Drawer.Close asChild let:builder>
			<Button variant="outline" builders={[builder]}>Cancel</Button>
		</Drawer.Close> -->
{/if}
