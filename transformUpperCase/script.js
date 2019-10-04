const $text = document.getElementById('toTransform')
const $btnTransform = document.getElementById('transform')
const $textTransformed = document.getElementById('transformed')
const $btnCopy = document.getElementById('copy')

$btnTransform.addEventListener('click', () => {
   $textTransformed.textContent = $text.value.toUpperCase() 
})

$btnCopy.addEventListener('click', () => {
    $textTransformed.select()
    document.execCommand('copy')
    document.getElementById('alert').style.display = 'block'
    setTimeout(() => {
        document.getElementById('alert').style.display = 'none'
    }, 1500)
})
