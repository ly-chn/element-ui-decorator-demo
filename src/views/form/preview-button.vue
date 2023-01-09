<template>
  <div style="text-align: center">
    按钮组件预览
    <div
      v-for="item in 'search,reset,create,remove,export,import'.split(',')"
      :key="item"
      style="display: inline-block; margin: 10px"
    >
      <component :is="`ly-btn-${item}`" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewButton'
}
</script>
