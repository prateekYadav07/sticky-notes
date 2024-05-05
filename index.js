let startX = 0, startY = 0, endX = 0, endY = 0


const card = document.querySelector('.card')

card.addEventListener('mousedown', (e) => {
  startX = e.clientX
  startY = e.clientY

  document.addEventListener('mousemove', mouseMoveHandler)
  document.addEventListener('mouseup', mouseUpHandler)
})

const mouseMoveHandler = (e) => {
  endX = startX - e.clientX // if moved away from startX then it will be negative
  endY = startY - e.clientY // if moved away from startY then it wil be negative

  startX = e.clientX
  startY = e.clientY

  let newTop = card.offsetTop - endY
  let newLeft = card.offsetLeft - endX

  // top and bottom edge
  if (newTop >= 0 && newTop + card.offsetHeight <= document.documentElement.clientHeight) card.style.top = newTop + 'px'
  else if (newTop < 0) card.style.top = '0px'
  else card.style.top = (document.documentElement.clientHeight - card.offsetHeight) + 'px'

  // left && right edge
  if (newLeft >= 0 && newLeft + card.offsetWidth <= document.documentElement.clientWidth) card.style.left = newLeft + 'px'
  else if (newLeft < 0) card.style.left = '0px'
  else card.style.left = (document.documentElement.clientWidth - card.offsetWidth) + 'px'

}

const mouseUpHandler = () => {
  document.removeEventListener('mousemove', mouseMoveHandler)
}
