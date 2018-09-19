$("#submit").on("click", function(event){

    event.preventDefault();
    var comments = $("#comments").val().trim();
    var number = $("#phoneNumber").val().trim();

    console.log(comments);
    $.ajax({
        type: "POST",
        url: "/api/status",
        data: {
            phone_number: number,
            comments: comments
        }
    }).then(function (data){
        console.log(data)
    });

    
})