
// document.addEventListener('DOMContentLoaded',()=>{alert('Yolo')} )
// jQuery(document).ready(()=>{alert('Yolo')});
$().ready(()=>{
 $('p').each(function (index, element) {
    // element == this
    console.log(element);
    console.log(this);
    $(this).html('trololo')
    $(element).html('tralala')
 });
 $('p').css({
    borderColor : 'red', // bordure rouge
    paddingRight : '30px', // marge intérieure de 30px
    marginLeft : '10px', // marge extérieure de 10px
    borderWidth :'5px',
    borderStyle: 'solid',
    backgroundColor: 'blue'
});
});
