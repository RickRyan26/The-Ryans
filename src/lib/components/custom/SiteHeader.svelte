<script lang="ts">
	import { cn } from '$lib/utils';
	import ModeToggle from '$lib/components/custom/ModeToggle.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Drawer from '$lib/components/ui/drawer';
	import { Button } from '$lib/components/ui/button';
	import { mediaQuery } from 'svelte-legos';
	import { fade, slide, fly } from 'svelte/transition';
	import SuperForm from '$lib/components/custom/SuperForm.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let className: string | undefined | null = undefined;
	export { className as class };

	$: isDesktop = mediaQuery('(min-width: 768px)');

	let open;
	let fadeIn = false;

	$: if (open) {
		setTimeout(() => {
			fadeIn = true;
		}, 50);
	} else {
		fadeIn = false;
	}

	function scrollTo(elementId) {
		const element = document.getElementById(elementId);
		if (element) {
			const elementPosition = element.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: elementPosition - 100,
				behavior: 'smooth'
			});
		}
	}
	let isMounted = false;
	onMount(() => {
		isMounted = true;
	});
</script>

<header class="sticky top-0 z-50 h-20 w-full">
	{#if isMounted}
		<div
			class="border-b border-border/40 bg-background/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60"
			in:fade={{ duration: 700 }}
		>
			<div class="mx-auto flex h-14 max-w-screen-md items-center">
				<nav class={cn('flex items-center space-x-1 pl-2', className)}>
					<Button
						on:click={() => scrollTo('portfolio')}
						variant="ghost"
						class="font-bold portrait:!px-1 portrait:text-sm landscape:text-lg">Portfolio</Button
					>
					<Button
						on:click={() => scrollTo('services')}
						variant="ghost"
						class="font-bold portrait:!px-1 portrait:text-sm landscape:text-lg">Services</Button
					>
					<Button
						on:click={() => scrollTo('reviews')}
						variant="ghost"
						class="font-bold portrait:!px-1 portrait:text-sm landscape:text-lg">Reviews</Button
					>
					{#if $isDesktop}
						<Dialog.Root bind:open>
							<Dialog.Trigger asChild let:builder>
								<Button
									id="contactTrigger"
									builders={[builder]}
									variant="ghost"
									class="text-sm font-bold portrait:!px-1 landscape:text-lg"
									>{$page?.data?.cta?.split?.(' ')?.[0]}</Button
								>
							</Dialog.Trigger>
							<Dialog.Content class="">
								<div in:fade>
									<SuperForm isDialog={true} />
								</div>
							</Dialog.Content>
						</Dialog.Root>
					{:else}
						<Drawer.Root bind:open>
							<Drawer.Trigger asChild let:builder>
								<Button
									id="contactTrigger"
									builders={[builder]}
									class="text-sm font-bold portrait:!px-1 landscape:text-lg"
									variant="ghost">{$page?.data?.cta?.split?.(' ')?.[0]}</Button
								>
							</Drawer.Trigger>
							<Drawer.Content>
								{#if fadeIn}
									<div in:fade>
										<SuperForm />
									</div>
								{/if}
							</Drawer.Content>
						</Drawer.Root>
					{/if}
				</nav>
				<!-- <MobileNav /> -->
				<div class="flex flex-1 items-center justify-end space-x-2 pr-4 portrait:pr-2">
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
		</div>
	{/if}
</header>
