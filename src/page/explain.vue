<template>
    <div class="fillcontain">
        <head-top></head-top>
        <mapList></mapList>
    </div>
</template>

<script>
	import headTop from '../components/headTop'
    import mapList from '../components/map'
    export default {
    	components: {
    		headTop,
            mapList
    	},
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.explain_text{
		margin-top: 20px;
		text-align: center;
		font-size: 20px;
		color: #333;
	}
</style>
