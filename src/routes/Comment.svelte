<script lang="ts">
	export let text: string;
	console.log(text);
</script>

<p>
	{@html text}
</p>

<style>
	p {
		word-wrap: break-word;
	}
</style>
