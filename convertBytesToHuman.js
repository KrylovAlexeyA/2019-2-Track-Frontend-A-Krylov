/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  // your solution goes here
  if (!(typeof bytes == "number")){
    return false
  }
  if (bytes < 0){
    return false
  }
  if (bytes < 1024){
    return `${bytes.toFixed(3)} B`
  }
  if (bytes > 1024 && bytes < (1024 * 1024)){
    return `${(bytes/1024).toFixed(3)} KB`
  }
  if (bytes > (1024 * 1024) && bytes < (1024 * 1024 * 1024)) {
    return `${(bytes/(1024 * 1024)).toFixed(3) } MB`
  }
  if (bytes > (1024 * 1024 * 1024) && bytes < (1024 * 1024 * 1024 * 1024)) {
    return `${(bytes/(1024 * 1024 * 1024)).toFixed(3)} GB`
  }
  return false
}
