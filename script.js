function render(data){
    var html="<div class='commentBox'><span>"+data.name+"</span><div class='date'>"+data.date+"</div><div class='bodyText'>"+data.body+"</div><br/><br/></div></div><div class='clear'></div>"
    $('#container').append(html);
}

$(document).ready(function(){
var comment=[
    {"name":"Tina Zhang","date":Date(),"body":"Hello,everyone!"},
];
    

for(var i=0;i<comment.length;i++){
 render(comment[i]);
}

$('#addcomment').click(function(){
    var addObj={
        "name":$('#name').val(),
        "date":Date(),
        "body":$('#bodyText').val(),
    };
    comment.push(addObj);
    render(addObj);
})
});
