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
		<h2>Contact</h2>
		<Dialog.Description>
			<div class="text-center text-xl">{$page.data.phone}</div>
			<div class="text-center text-xl">{$page.data.email}</div>
			<div class="text-center text-xl">{$page.data.address}</div>
		</Dialog.Description>
	</Dialog.Header>
	<form class="grid items-start gap-4 px-6">
		<div class="grid gap-2">
			<Label for="email" class="text-lg">Email</Label>
			<Input type="email" id="email" class="text-lg" placeholder="Enter your email..." />
		</div>
		<div class="grid gap-2">
			<Label for="Message" class="text-lg">Message</Label>
			<Textarea rows={6} id="Message" class="text-lg" placeholder="Enter your message..." />
		</div>
		<Dialog.Footer>
			<Button type="submit" class="text-xl">Send <Send class="pl-1" /></Button>
		</Dialog.Footer>
	</form>
	<!-- <Button variant="outline">Cancel</Button> -->
{:else}
	<Drawer.Header class="text-left">
		<h2>Contact</h2>
		<Drawer.Description>
			<div class="text-center text-xl">{$page.data.phone}</div>
			<div class="text-center text-xl">{$page.data.email}</div>
			<div class="text-center text-xl">{$page.data.address}</div>
		</Drawer.Description>
	</Drawer.Header>
	<form class="grid items-start gap-4 px-6">
		<div class="grid gap-2">
			<Label for="email" class="text-lg">Email</Label>
			<Input type="email" id="email" class="text-lg" placeholder="Enter your email..." />
		</div>
		<div class="grid gap-2">
			<Label for="Message" class="text-lg">Message</Label>
			<Textarea rows={6} id="Message" class="text-lg" placeholder="Enter your message..." />
		</div>
		<Drawer.Footer class="px-6 pt-2">
			<Button type="submit" class="text-xl">Send <Send class="pl-1" /></Button>
		</Drawer.Footer>
	</form>
	<!-- <Drawer.Close asChild let:builder>
			<Button variant="outline" builders={[builder]}>Cancel</Button>
		</Drawer.Close> -->
{/if}
