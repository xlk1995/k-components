import { ElMessage } from 'element-plus'

/**
 * 将文本复制到剪贴板
 *
 * @param text 要复制的文本
 */
export const useCopy = (text: string) => {
  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
  ElMessage.success('复制成功')
}
