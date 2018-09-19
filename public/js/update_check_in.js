$("#submit").on("click", function(event){

    event.preventDefault();

    $.ajax({
        type: "POST",
        url: "/api/status/",
        data: {
            comments: comments,

        }
    }).then(function (data){
        console.log(data)
    })

    
})