<script lang="ts">
	export let text: string;
</script>

<p>
	{@html text}
</p>

<style>
	p {
		word-wrap: break-word;
	}
</style>
