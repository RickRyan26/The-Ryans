<script lang="ts">
	import ModeToggle from '$lib/components/custom/ModeToggle.svelte';
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 max-w-screen-2xl items-center">
		<nav class={cn('flex items-center space-x-4 lg:space-x-6', className)}>
			<a
				href="/examples/dashboard"
				class="text-sm font-medium transition-colors hover:text-primary"
			>
				About
			</a>
			<a
				href="/examples/dashboard"
				class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Gallery
			</a>
			<a
				href="/examples/dashboard"
				class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Reviews
			</a>
			<a
				href="/examples/dashboard"
				class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Contact
			</a>
		</nav>
		<!-- <MobileNav /> -->
		<div class="flex flex-1 items-center space-x-2 justify-end">
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
