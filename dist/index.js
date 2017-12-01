/**
 * create a temp textarea
 */
var createTextArea = function () {
  var elem = document.createElement('textarea')

  elem.style.width = 1
  elem.style.height = 0
  document.body.appendChild(elem)

  return elem
}

/**
 * exec copy command
 */
var execCopy = function () {
  try {
    document.execCommand('copy')
  } catch (e) {}
}

/**
 * copy from element
 */
var copyFromElement = function (elem) {
  var range = document.createRange()
  var selection = window.getSelection()

  range.selectNode(elem)

  if (selection.rangeCount > 0) {
    selection.removeAllRanges()
  }

  selection.addRange(range)
  execCopy()
  selection.removeAllRanges()
}

/**
 * copy from textarea
 */
var copyFromText = function (string) {
  var textArea = createTextArea()

  textArea.innerHTML = string
  textArea.focus()
  textArea.select()
  execCopy()
  setTimeout(function () { return document.body.removeChild(textArea); })
}

var tinyCopy = function (elem) {
  // eslint-disable-next-line
  if (elem instanceof HTMLTextAreaElement) {
    elem.focus()
    elem.select()
    execCopy()
    return
  }

  // eslint-disable-next-line
  if (elem instanceof HTMLElement || elem === document) {
    elem = elem === document ? elem.documentElement : elem
    return copyFromElement(elem)
  }

  if (typeof elem === 'string') {
    copyFromText(elem)
  }
}

if (typeof exports === 'object'
  && typeof module !== 'undefined') {
  module.exports = tinyCopy
}

if (typeof window !== 'undefined') {
  window.tinyCopy = tinyCopy
}

