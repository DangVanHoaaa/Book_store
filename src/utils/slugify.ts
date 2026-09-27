export const slugify = (text: string): string => {
  if (!text) return ''
  return text
    .toString()
    .toLowerCase()                     // 1. Chuyển thành chữ thường: "Đắc Nhân Tâm" -> "đắc nhân tâm"
    .normalize('NFD')                  // 2. Tách dấu tiếng Việt ra khỏi chữ: "ắ" -> "a" + "˘" + "́"
    .replace(/[\u0300-\u036f]/g, '')   // 3. Xóa các ký tự dấu tiếng Việt
    .replace(/[đĐ]/g, 'd')             // 4. Đổi chữ đ/Đ thành d
    .replace(/([^0-9a-z-\s])/g, '')     // 5. Xóa ký tự đặc biệt (!, @, #, $, %, ^...)
    .replace(/(\s+)/g, '-')            // 6. Đổi khoảng trắng thành dấu gạch ngang (-)
    .replace(/-+/g, '-')               // 7. Gộp nhiều dấu gạch ngang liên tiếp thành 1 dấu
    .replace(/^-+|-+$/g, '')           // 8. Cắt bỏ dấu gạch ngang ở đầu và cuối chuỗi
}
export default slugify