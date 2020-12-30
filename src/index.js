import x from './x.js'
import image from './assets/1.jpg'
const div = document.querySelector('#app')
const img =document.createElement('img')
img.src=image
div.appendChild(img)
const button=document.createElement('button')
button.innerText='懒加载'
button.onclick=()=>{
    const promise = import('./lazy.js')
    promise.then((module)=>{
        const fn =module.default
        fn()
    },()=>{})
}
div.appendChild(button)
