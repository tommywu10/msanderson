var element = document.querySelector('#loader');
var styles = window.getComputedStyle(element, ':after');
var content = styles['content'];

var loading = false; 
console.log(styles);

if(!loading){
    element.style.borderTopColor='white'
}