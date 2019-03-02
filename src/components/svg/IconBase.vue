<template>
	<svg xmlns="http://www.w3.org/2000/svg" role="presentation"
		:width="width" 
		:height="height" 
		:viewBox="viewBox">
		<g :fill="color">
			<component :is="$options.components[name]" @ready="viewBox = $event"></component>
		</g>
	</svg>
</template>

<script>
export default {
	data() {
		return {
			viewBox: null
		}
	},
	props: {
		name:   { type: String },
		color:  { type: String, default: '#000' },
		width:  { type: [Number, String], default: 18 },
		height: { type: [Number, String], default: 18 }
	},
	created() {
		this.$options.components[this.name] = require('./icons/icon-'+this.name+'.vue').default;
	}
}
</script>

<style scoped>
svg {
	display: block;
}
</style>