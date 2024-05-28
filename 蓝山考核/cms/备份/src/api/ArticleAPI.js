import AxiosDR from '备份/src/DRUtils/AxiosDR.js'

//获取单条记录
const getById = (id) => {
  return AxiosDR.get(`/api/article/getById?id=${id}`)
}

//获取列表 - 分页
const pageList = (page, pageSize) => {
  return AxiosDR.get(`/api/article/pageList?page=${page}&pageSize=${pageSize}`)
}

//添加
const add = (data) => {
  return AxiosDR.post('/api/article/add', data)
}

//编辑
const edit = (data) => {
  return AxiosDR.post('/api/article/edit', data)
}

//删除
const del = (id) => {
  return AxiosDR.post("/api/article/del", { id: id })
}

//上传图片
const uploadImg = (data) => {
  return AxiosDR.postFile('/api/article/uploadImg', data)
}

//wangEditor - 上传图片
const editorUploadImg = (data) => {
  return AxiosDR.postFile('/api/article/wangEditor/uploadImg', data)
}

export default { getById, pageList, add, edit, del, uploadImg, editorUploadImg }