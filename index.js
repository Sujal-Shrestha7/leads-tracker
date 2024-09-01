let savedLinks = [] 
const inputEl = document.getElementById('input-el')
const linkEl = document.getElementById('linkContainer')

function save(){
  const val = inputEl.value
  if(val){
    savedLinks.push(val)
    const aEl = document.createElement('a')
    aEl.target = "_blank"
    aEl.href = val
    aEl.textContent = val
    linkEl.appendChild(aEl)
    inputEl.value = null
  }
}

function remove() {
  inputEl.value = null
  const el = linkEl.getElementsByTagName('a')
  Array.from(el).forEach(link => {
    linkEl.removeChild(link)
  })
}