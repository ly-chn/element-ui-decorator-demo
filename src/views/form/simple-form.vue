<template>
  <div style="padding: 100px">
    用户资料完善展示, 含有部分业务相关不合理逻辑, 仅供参考
    <div style="height: 20px" />
    <el-form ref="form" :model="form" :rules="rules" label-width="auto">
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名" prop="fullName">
            <el-input v-model="form.fullName" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="手机号" prop="mobilePhone">
            <el-input v-model="form.mobilePhone" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="政治面貌" prop="politicalStatus">
            <el-radio-group v-model="form.politicalStatus">
              <el-radio label="党员" value="1" />
              <el-radio label="群众" value="2" />
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="出生日期" prop="birthday">
            <el-date-picker v-model="form.birthday" type="date" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="职业" prop="jobType">
            <el-select v-model="form.jobType">
              <el-option
                v-for="(type, idx) in '学生/老师/技术人员/农民/军人/其他'.split('/')"
                :key="type"
                :label="type"
                :value="idx"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="个人介绍" prop="introduction">
            <el-input v-model="form.introduction" type="textarea" maxlength="100" show-word-limit />
          </el-form-item>
        </el-col>
        <el-col>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
          <el-button @click="handleReset">重置</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SimpleForm',
  data() {
    return {
      form: {
        // 姓名
        fullName: undefined,
        // 政治面貌
        politicalStatus: 'true',
        // 手机号
        mobilePhone: undefined,
        // 身份证号
        idCard: undefined,
        // 生日
        birthday: undefined,
        // 职业
        jobType: undefined,
        // 个人介绍
        introduction: undefined
      },
      rules: {
        fullName: [{ required: true, message: '姓名不能为空', trigger: ['blur', 'change'] },
          { pattern: /^[\u4E00-\u9FA5]{2,4}$/, message: '请输入2-4个汉字', trigger: ['blur', 'change'] }],
        politicalStatus: [{ required: true, message: '政治面貌不能为空', trigger: ['blur', 'change'] }],
        mobilePhone: [{ required: true, message: '手机号不能为空', trigger: ['blur', 'change'] },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号', trigger: ['blur', 'change'] }],
        idCard: [{ required: true, message: '身份证号不能为空', trigger: ['blur', 'change'] },
          // 正则不够完善, 仅供参考, 应当有函数来校验校验和
          { pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '请输入正确的身份证号', trigger: ['blur', 'change'] }],
        birthday: [{ required: true, message: '出生日期不能为空', trigger: ['blur', 'change'] }],
        jobType: [{ required: true, message: '职业不能为空', trigger: ['blur', 'change'] }],
        introduction: [{ required: true, message: '个人介绍不能为空', trigger: ['blur', 'change'] },
          { min: 10, max: 100, message: '请输入10-100个字符', trigger: ['blur', 'change'] }]
      }
    }
  },
  methods: {
    async handleSubmit() {
      await this.$refs.form.validate()
      this.$message.success('验证通过')
    },
    handleReset() {
      this.$refs.form.resetFields()
    }
  }
}
</script>
