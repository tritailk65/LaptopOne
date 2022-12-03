function NextImage(){
    let lists= document.querySelectorAll('.productdetails__header--information--image--item--image');
    document.getElementById('image').appendChild(lists[0]);
}
function PreviousImage(){
    let lists= document.querySelectorAll('.productdetails__header--information--image--item--image');
    document.getElementById('image').prepend(lists[lists.length-1]);
}