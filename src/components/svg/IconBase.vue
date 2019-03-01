<template>
	<svg xmlns="http://www.w3.org/2000/svg" role="presentation" 
		preserveAspectRatio="none"
        :width="width" 
        :height="height" >
		<g :fill="color"><slot /></g>
	</svg>
</template>

<script>
export default {
	props: {
		width:  { type: [Number, String], default: 18 },
		height: { type: [Number, String], default: 18 },
		color:  { type: String, default: '#000' }
	}
}
</script>

<style scoped>
svg {
	display: block;
}
</style>