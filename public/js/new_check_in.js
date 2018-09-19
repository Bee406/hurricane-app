
$("#submit_button").on("click", function (event) {
    event.preventDefault();
    var userStatus = {
        first_name: $("#first_name").val().trim(),
        last_name: $("#last_name").val().trim(),
        phone_number: $("#phone_number").val().trim(),
        email: $("#email").val().trim(),
        location: $("#general_location").val().trim(),
        comments: $("#comments").val().trim(),
    }
    var API = {
        saveUser: function () {
            return $.ajax({
                type: "POST",
                url: "/api/users",
                data: userStatus
            }).then(function () {
                console.log("Created new user");
            });
        },
        getUser: function (){
            var userDb = [];
            return $.ajax({
                type: "GET",
                url:"api/users"
            }).then(function (data){
                userDb.push(data);
                // console.log(userDb[0][userDb[0].length-1]);
                var numberSearch= userDb[0][userDb[0].length-1].phone_number;
                console.log("PHONE NUMBER: ", numberSearch);
                return $.ajax({
                    type: "GET",
                    url: "api/users/" + numberSearch
                }).then(function(userData){
                    console.log("NEW USER DATA: ", JSON.stringify(userData));
                })

            })
        }, 

    };

    API.saveUser(userStatus).then(API.getUser());
});


