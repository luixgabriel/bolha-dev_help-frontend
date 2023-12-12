const truncateText = (text: string, maxLength: number) => {
  if (text) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...'
    }
    return text
  }
}

export default truncateText
