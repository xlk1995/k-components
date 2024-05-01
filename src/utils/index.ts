/**
 * 将字符串转换为短横线分隔形式
 *
 * @param value 要转换的字符串
 * @returns 返回转换后的字符串
 */
export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}
