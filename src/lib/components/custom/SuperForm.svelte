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
</script>

{#if isDialog}
	<Dialog.Header>
		<h1 class="py-2">{$page.data.cta}</h1>
		<Dialog.Description>
			<div class="text-center text-xl font-bold">{$page.data.name}</div>
			<div class="text-center text-xl">
				<a class="underline" href="tel:{$page.data.phone}">{$page.data.phone}</a>	
			</div>
			<div class="text-center text-xl">
				<a class="underline" href="mailto:{$page.data.email}">{$page.data.email}</a>
			</div>
			<div class="text-center text-xl">
				<a
					class="underline"
					href="https://maps.google.com/?q={encodeURIComponent($page.data.address)}"
					>{$page.data.address}</a
				>
			</div>
		</Dialog.Description>
	</Dialog.Header>
	<form class="grid items-start gap-4 px-4 md:px-2 mt-4">
		<div class="grid gap-2">
			<Label for="email" class="text-lg">Email</Label>
			<Input
				type="email"
				id="email"
				class="bg-black/10 text-lg dark:bg-white/10"
				placeholder="Enter your email..."
			/>
		</div>
		<div class="grid gap-2">
			<Label for="Message" class="text-lg">Message</Label>
			<Textarea
				rows={6}
				id="Message"
				class="bg-black/10 text-lg dark:bg-white/10"
				placeholder="Enter your message..."
			/>
		</div>
		<Dialog.Footer>
			<Button type="submit" class="rounded-full text-2xl font-bold">Send&nbsp;<Send /></Button>
		</Dialog.Footer>
	</form>
	<!-- <Button variant="outline">Cancel</Button> -->
{:else}
	<Drawer.Header class="text-left">
		<h1 class="py-2">{$page.data.cta}</h1>
		<Drawer.Description>
			<div class="text-center text-xl font-bold">{$page.data.name}</div>
			<div class="text-center text-xl">
				<a class="underline" href="tel:{$page.data.phone}">{$page.data.phone}</a>
			</div>
			<div class="text-center text-xl">
				<a class="underline" href="mailto:{$page.data.email}">{$page.data.email}</a>
			</div>
			<div class="text-center text-xl">
				<a
					class="underline"
					href="https://maps.google.com/?q={encodeURIComponent($page.data.address)}"
					>{$page.data.address}</a
				>
			</div>
		</Drawer.Description>
	</Drawer.Header>
	<form class="grid items-start gap-4 px-4 md:px-2 mt-4">
		<div class="grid gap-2">
			<Label for="email" class="text-lg">Email</Label>
			<Input
				type="email"
				id="email"
				class="bg-black/10 text-lg dark:bg-white/10"
				placeholder="Enter your email..."
			/>
		</div>
		<div class="grid gap-2">
			<Label for="Message" class="text-lg">Message</Label>
			<Textarea
				rows={6}
				id="Message"
				class="bg-black/10 text-lg dark:bg-white/10"
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
