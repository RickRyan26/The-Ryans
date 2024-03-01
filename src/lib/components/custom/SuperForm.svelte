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
		<Dialog.Title>Contact</Dialog.Title>
		<Dialog.Description>
			<div>{$page.data.phone}</div>
			<div>{$page.data.email}</div>
			<div>{$page.data.address}</div>
		</Dialog.Description>
	</Dialog.Header>
	<form class="grid items-start gap-4 px-6">
		<div class="grid gap-2">
			<Label for="email">Email</Label>
			<Input type="email" id="email" placeholder="Enter your email..." />
		</div>
		<div class="grid gap-2">
			<Label for="Message">Message</Label>
			<Textarea id="Message" placeholder="Enter your message..." />
		</div>
		<Button type="submit" class="text-xl">Send <Send /></Button>
	</form>
	<Dialog.Footer>
		<Button variant="outline">Cancel</Button>
	</Dialog.Footer>
{:else}
	<Drawer.Header class="text-left">
		<Drawer.Title>Contact</Drawer.Title>
		<Drawer.Description>
			<div>{$page.data.phone}</div>
			<div>{$page.data.email}</div>
			<div>{$page.data.address}</div>
		</Drawer.Description>
	</Drawer.Header>
	<form class="grid items-start gap-4 px-6">
		<div class="grid gap-2">
			<Label for="email">Email</Label>
			<Input type="email" id="email" placeholder="Enter your email..." />
		</div>
		<div class="grid gap-2">
			<Label for="Message">Message</Label>
			<Textarea id="Message" placeholder="Enter your message..." />
		</div>
		<Button type="submit" class="text-xl">Send <Send /></Button>
	</form>
	<Drawer.Footer class="px-6 pt-2">
		<Drawer.Close asChild let:builder>
			<Button variant="outline" builders={[builder]}>Cancel</Button>
		</Drawer.Close>
	</Drawer.Footer>
{/if}
