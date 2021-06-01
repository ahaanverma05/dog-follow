let circle = document.getElementById('dog');
let foo = document.getElementById('food');
let poster = document.getElementById("post");
const onMouseMove = (e) =>{
  circle.style.left = (e.pageX-35)+'px';
  circle.style.top = (e.pageY-35)+'px';
}
document.addEventListener('mousemove', onMouseMove);
foo.addEventListener('click', (e)=> {
    circle.style.backgroundImage = `url("dogeat.png")`;
    foo.addEventListener('mouseleave', (e)=> {
        circle.style.backgroundImage = `url("http://pngimg.com/uploads/dog/dog_PNG50318.png")`
    })
})