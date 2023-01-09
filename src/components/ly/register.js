import LyForm from '@/components/ly/form/ly-form.vue'
import LyBtnCreate from '@/components/ly/form/buttons/ly-btn-create.vue'
import LyBtnExport from '@/components/ly/form/buttons/ly-btn-export.vue'
import LyBtnImport from '@/components/ly/form/buttons/ly-btn-import.vue'
import LyBtnReset from '@/components/ly/form/buttons/ly-btn-reset.vue'
import LyBtnRemove from '@/components/ly/form/buttons/ly-btn-remove.vue'
import LyBtnSearch from '@/components/ly/form/buttons/ly-btn-search.vue'

export default Vue => {
  // 按钮
  Vue.component(LyBtnCreate.name, LyBtnCreate)
  Vue.component(LyBtnExport.name, LyBtnExport)
  Vue.component(LyBtnImport.name, LyBtnImport)
  Vue.component(LyBtnReset.name, LyBtnReset)
  Vue.component(LyBtnRemove.name, LyBtnRemove)
  Vue.component(LyBtnSearch.name, LyBtnSearch)
  Vue.component(LyForm.name, LyForm)
}
