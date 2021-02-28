export function checkIsStylePath(filePath) {
  if (!filePath) {
    return false;
  }

  return /\.(s?css|less)$/.test(filePath);
}
