document.addEventListener("DOMContentLoaded", function(){
    $(".newTrainer").on('click',function(){
	this.value="";
	
});
    $(".addTrainer").on('click',function(){
        var start = $(".start").val(),
            finish = $(".finish").val(),
            className= $(".type-card").val().toString(),
            len = ((+finish - (+start))*8.4).toString()+"%",
            mar = ((+start - 9)*8.4).toString()+"%",
            trainerName = $(".newTrainer").val().toString(),
            id = '_' + Math.random().toString(36).substr(2, 9);
        console.log(len);
        console.log(mar);
        console.log(trainerName);
        console.log(id);
        switch(className){
            case 'sea-card':
                $(".b1").append("<div class='traner' id='"+id+"'>"+trainerName+"</div>").find('#'+id).css({
                                    'margin-left': mar,
                                    'width': len
                 });
                break;
            case 'blue-card':
                $(".b2").append("<div class='traner' id='"+id+"'>"+trainerName+"</div>").find('#'+id).css({
                                    'margin-left': mar,
                                    'width': len
                 });
                break;
            case 'lil-card':
                $(".b3").append("<div class='traner' id='"+id+"'>"+trainerName+"</div>").find('#'+id).css({
                                    'margin-left': mar,
                                    'width': len
                 });
                break;
            case 'light-card':
                $(".b4").append("<div class='traner' id='"+id+"'>"+trainerName+"</div>").find('#'+id).css({
                                    'margin-left': mar,
                                    'width': len
                 });
                break;
        }
        
    });   
    
})