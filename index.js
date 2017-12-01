/**
 * copy text
 */
const copy = (elem) => {
  const range = document.createRange()
  range.selectNode(elem)

  const selection = window.getSelection()

  if (selection.rangeCount > 0) {
    selection.removeAllRanges()
  }

  selection.addRange(range)
  document.execCommand('copy')
  selection.removeAllRanges()
}

/**
 * helper 
 * create a temp textarea
 */
const createTextArea = () => {
  const elem = document.createElement('textarea')
  elem.setAttribute('helper', 'true')
  elem.style.width = 0
  elem.style.height = 0
  document.body.appendChild(elem)
  return elem
}

module.exports = (elem) => {
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
