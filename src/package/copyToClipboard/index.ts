/**
 * 一键复制
 * @param text 文本
 */
export function copyToClipboard(text: string) {
  // 创建一个临时的textarea元素
  var textArea = document.createElement("textarea");

  // 设置textarea的内容为要复制的文本
  textArea.value = text;

  // 将textarea元素添加到DOM中
  document.body.appendChild(textArea);

  // 选择textarea中的文本
  textArea.select();

  // 尝试执行复制命令
  document.execCommand("copy");

  // 从DOM中移除textarea元素
  document.body.removeChild(textArea);
}
