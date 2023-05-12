function render(data){
    var html="<div class='commentBox'><span>"+data.name+"</span><div class='date'>"+data.date+"</div><div class='bodyText'>"+data.body+"</div><br/><br/></div></div><div class='clear'></div>"
    $('#container').append(html);
}

$(document).ready(function(){
    var comment=[];

    if(!localStorage.CommentData){
        localStorage.CommentData=[];
    }
    else{
        comment=JSON.parse(localStorage.CommentData);
    }

    

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
    localStorage.CommentData=JSON.stringify(comment);
    render(addObj);
    $('#name').val('');
    Date('');
    $('#bodyText').val('');
});
});
