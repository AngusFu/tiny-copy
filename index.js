/**
 * copy text
 */
const copy = (elem) => {
  const range = document.createRange()
  const selection = window.getSelection()

  range.selectNode(elem)

  if (selection.rangeCount > 0) {
    selection.removeAllRanges()
  }

  selection.addRange(range)

  try {
    document.execCommand('copy')
  } catch (e) {}

  selection.removeAllRanges()
}

/**
 * create a temp textarea
 */
const createTextArea = () => {
  const elem = document.createElement('textarea')

  elem.style.width = 1
  elem.style.height = 0
  document.body.appendChild(elem)

  return elem
}

const tinyCopy = (elem) => {
  // eslint-disable-next-line
  if (elem instanceof HTMLElement) {
    return copy(elem)
  }

  if (typeof elem === 'string') {
    const textArea = createTextArea()

    textArea.innerHTML = elem
    copy(textArea)

    setTimeout(() => document.body.removeChild(textArea))
  }
}

if (typeof exports === 'object'
  && typeof module !== 'undefined') {
  module.exports = tinyCopy
}

if (typeof window !== 'undefined') {
  window.tinyCopy = tinyCopy
}
