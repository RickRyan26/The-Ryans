<script lang="ts">
	import { cn } from '$lib/utils';
	import ModeToggle from '$lib/components/custom/ModeToggle.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Drawer from '$lib/components/ui/drawer';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import { mediaQuery } from 'svelte-legos';

	let className: string | undefined | null = undefined;
	export { className as class };

	const isDesktop = mediaQuery('(min-width: 768px)');
	let open;
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="flex h-14 max-w-screen-2xl items-center">
		<nav class={cn('flex items-center space-x-1 pl-2', className)}>
			<Button variant="ghost">Photos</Button>
			<Button variant="ghost">Details</Button>
			<Button variant="ghost">Reviews</Button>
			{#if $isDesktop}
				<Dialog.Root bind:open>
					<Dialog.Trigger asChild let:builder>
						<Button variant="ghost" builders={[builder]}>Contact</Button>
					</Dialog.Trigger>
					<Dialog.Content class="sm:max-w-[425px]">
						<Dialog.Header>
							<Dialog.Title>Contact</Dialog.Title>
							<Dialog.Description>
								Make changes to your profile here. Click save when you're done.
							</Dialog.Description>
						</Dialog.Header>
						<form class="grid items-start gap-4">
							<div class="grid gap-2">
								<Label for="email">Email</Label>
								<Input type="email" id="email" value="shadcn@example.com" />
							</div>
							<div class="grid gap-2">
								<Label for="username">Username</Label>
								<Input id="username" value="@shadcn" />
							</div>
							<Button type="submit">Save changes</Button>
						</form>
					</Dialog.Content>
				</Dialog.Root>
			{:else}
				<Drawer.Root bind:open>
					<Drawer.Trigger asChild let:builder>
						<Button variant="ghost" builders={[builder]}>Contact</Button>
					</Drawer.Trigger>
					<Drawer.Content>
						<Drawer.Header class="text-left">
							<Drawer.Title>Contact</Drawer.Title>
							<Drawer.Description>
								Make changes to your profile here. Click save when you're done.
							</Drawer.Description>
						</Drawer.Header>
						<form class="grid items-start gap-4 px-4">
							<div class="grid gap-2">
								<Label for="email">Email</Label>
								<Input type="email" id="email" value="shadcn@example.com" />
							</div>
							<div class="grid gap-2">
								<Label for="username">Username</Label>
								<Input id="username" value="@shadcn" />
							</div>
							<Button type="submit">Save changes</Button>
						</form>
						<Drawer.Footer class="pt-2">
							<Drawer.Close asChild let:builder>
								<Button variant="outline" builders={[builder]}>Cancel</Button>
							</Drawer.Close>
						</Drawer.Footer>
					</Drawer.Content>
				</Drawer.Root>
			{/if}
		</nav>
		<!-- <MobileNav /> -->
		<div class="flex flex-1 items-center justify-end space-x-2 pr-2">
			<!-- <div class="w-full flex-1 md:w-auto md:flex-none">
				<CommandMenu />
			</div> -->
			<nav class="flex items-center">
				<!-- <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
					<div
						class={cn(
							buttonVariants({
								size: "sm",
								variant: "ghost",
							}),
							"w-9 px-0"
						)}
					>
						<Icons.gitHub class="h-4 w-4" />
						<span class="sr-only">GitHub</span>
					</div>
				</a>
				<a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
					<div
						class={cn(
							buttonVariants({
								size: "sm",
								variant: "ghost",
							}),
							"w-9 px-0"
						)}
					>
						<Icons.twitter class="h-3 w-3 fill-current" />
						<span class="sr-only">X (formerly known as Twitter)</span>
					</div>
				</a> -->
				<ModeToggle />
			</nav>
		</div>
	</div>
</header>
