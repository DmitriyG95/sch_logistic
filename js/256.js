//   ограничение 256 символов
var cut = document.getElementsByClassName('text_review');
for( var i = 0; i < cut.length; i++ ){
    cut[i].innerText = cut[i].innerText.slice(0,256) + '...';
}