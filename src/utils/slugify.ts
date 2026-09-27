export const slugify = (text: string): string => {
  if (!text) return ''
  return text
    .toString()
    .toLowerCase()                     
    .normalize('NFD')                  // 2. Tách dấu tiếng Việt ra khỏi chữ: "ắ" -> "a" + "˘" + "́"
    .replace(/[\u0300-\u036f]/g, '')   // 3. Xóa các ký tự dấu tiếng Việt
    .replace(/[đĐ]/g, 'd')             // 4. Đổi chữ đ/Đ thành d
    .replace(/([^0-9a-z-\s])/g, '')     
    .replace(/(\s+)/g, '-')           
    .replace(/-+/g, '-')               
    .replace(/^-+|-+$/g, '')           
}
export default slugify