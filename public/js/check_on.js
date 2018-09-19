$("#recentMessage").on("click", function(event){

    event.preventDefault();
    var number = $("#phonenumber").val().trim();
    console.log("NUMBER: ", number)
    $.ajax({
        type: "GET",
        url: "/api/users/" + number
    }).then(function (data){
        console.log(data)
    })

    
})