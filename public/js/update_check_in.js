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
        $("modalIdHere").text("New status posted.");
        console.log("SUCCESS");
        console.log(data);
    }).catch(function(error){
        $("modalIdHere").text("That number is not in the database. Please go back and post your status as a new user.");
        console.log("FAIL");
    });  
})