<script lang="ts">
	import type { PageData } from './$types';
	import CommentForm from './CommentForm.svelte';
	import Comment from './Comment.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>Stored XSS Playground</title>
	<meta name="description" content="Stored XSS Playground" />
</svelte:head>

<section>
	<h1>Stored XSS Playground</h1>
	<CommentForm />
	{#if data.comments.length}
		<ol>
			{#each data.comments.slice().reverse() as comment, i (i)}
				<li>
					<Comment text={comment} />
				</li>
			{/each}
		</ol>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	ol {
		margin-block-start: 0vh;
		max-width: 50%;
	}
</style>
