<template>
  <div class="content">
    <el-form label-position="left" label-width="auto" size="mini">
      <el-row :gutter="10">
        <el-col :span="12">
          <el-form-item label="表单项1">
            <el-input v-model="form.field1" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="表单项2">
            <el-input v-model="form.field2" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="表单项3">
            <el-input v-model="form.field3" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'FormDay1Demo',
  data() {
    return {
      form: {
        field1: undefined,
        field2: undefined,
        field3: undefined
      }
    }
  }
}
</script>
<style scoped>
.content {
  max-width: 600px;
  margin: 0 auto;
  padding-top: 100px;
}
</style>
