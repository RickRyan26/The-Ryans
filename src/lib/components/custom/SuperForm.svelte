<script lang="ts">
	import * as Drawer from '$lib/components/ui/drawer';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Send } from 'lucide-svelte';
	import { page } from '$app/stores';

	import { Instagram } from 'lucide-svelte';
	import * as Form from '$lib/components/ui/form';
	import { formSchema, type FormSchema } from '$lib/schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';

	let closeButton: any;
	let data: SuperValidated<Infer<FormSchema>> = $page.data.form;

	const form = superForm(data, {
		resetForm: false,
		validators: zodClient(formSchema),
		onResult({ result }) {
			console.warn('Form Result!!!:', result);
			if (result.type === 'success') {
				toast.success('Email sent successfully!');
				closeButton?.click?.();
			} else {
				toast.error('Email failed to send!');
			}
		}
	});

	const { form: formData, enhance } = form;

	export let isDialog = false;
</script>

{#if isDialog}
	<Dialog.Header>
		<h2 class="py-2">{$page.data.cta}</h2>
		<Dialog.Description>
			<div class="text-center text-xl font-bold dark:!text-white/90">{$page.data.name}</div>
			{#if $page.data.ig}
				<div class="text-center text-xl dark:!text-white/90">
					<a class="underline" href={$page.data.igLink}>
						<Instagram class="inline" />
						{$page.data.ig}</a
					>
				</div>
			{/if}
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
	<form action="/" method="POST" use:enhance class="mt-4 grid items-start gap-4 px-4 md:px-2">
		<div class="grid gap-2">
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label for="email" class="text-lg">Email</Form.Label>
					<Input
						{...attrs}
						bind:value={$formData.email}
						type="email"
						class="bg-black/10 text-lg dark:bg-white/10 dark:!placeholder-white/70"
						placeholder="Enter your email..."
					/>
				</Form.Control>
				<!-- <Form.Description>This is your public display name.</Form.Description> -->
				<Form.FieldErrors />
			</Form.Field>
		</div>
		<div class="grid gap-2">
			<Form.Field {form} name="message">
				<Form.Control let:attrs>
					<Form.Label for="message" class="text-lg">Message</Form.Label>
					<Textarea
						{...attrs}
						bind:value={$formData.message}
						rows={6}
						id="Message"
						class="bg-black/10 text-lg dark:bg-white/10 dark:!placeholder-white/70"
						placeholder="Enter your message..."
					/>
				</Form.Control>
				<!-- <Form.Description>This is your public display name.</Form.Description> -->
				<Form.FieldErrors />
			</Form.Field>
		</div>
		<Dialog.Footer>
			<Form.Button type="submit" class="rounded-full text-2xl font-bold"
				>Send&nbsp;<Send /></Form.Button
			>
		</Dialog.Footer>
	</form>
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
	<form action="/" method="POST" use:enhance class="mt-4 grid items-start gap-4 px-4 md:px-2">
		<div class="grid gap-2">
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label for="email" class="text-lg">Email</Form.Label>
					<Input
						{...attrs}
						bind:value={$formData.email}
						type="email"
						class="bg-black/10 text-lg dark:bg-white/10 dark:!placeholder-white/70"
						placeholder="Enter your email..."
					/>
				</Form.Control>
				<!-- <Form.Description>This is your public display name.</Form.Description> -->
				<Form.FieldErrors />
			</Form.Field>
			<div class="grid gap-2">
				<Form.Field {form} name="message">
					<Form.Control let:attrs>
						<Form.Label for="message" class="text-lg">Message</Form.Label>
						<Textarea
							{...attrs}
							bind:value={$formData.message}
							rows={6}
							id="Message"
							class="bg-black/10 text-lg dark:bg-white/10 dark:!placeholder-white/70"
							placeholder="Enter your message..."
						/>
					</Form.Control>
					<!-- <Form.Description>This is your public display name.</Form.Description> -->
					<Form.FieldErrors />
				</Form.Field>
			</div>
			<Drawer.Footer class="px-6 pt-2">
				<Form.Button type="submit" class="rounded-full text-2xl font-bold"
					>Send&nbsp;<Send /></Form.Button
				>
			</Drawer.Footer>
		</div>
	</form>
	<Drawer.Close asChild let:builder>
		<Button class="hidden" variant="outline" builders={[builder]}
			><button bind:this={closeButton}>Cancel</button></Button
		>
	</Drawer.Close>
{/if}
