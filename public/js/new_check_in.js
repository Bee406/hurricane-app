
$("#recentMessage").on("click", function (event) {
    event.preventDefault();
    var userStatus = {
        first_name: $("#firstName").val().trim(),
        last_name: $("#lastName").val().trim(),
        phone_number: $("#phoneNumber").val().trim(),
        email: $("#email").val().trim(),
        location: $("#generalLocation").val().trim(),
        comments: $("#comments").val().trim(),
    };
    var existing = false;
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
        getUser: function () {
            // var userDb = [];
            return $.ajax({
                type: "GET",
                url: "api/users"
            }).then(function (data) {
                // userDb.push(data);
                console.log("DATA: ", data);
                for (var i = 0; i < data.length; i++) {
                    console.log("Data#: ", data[i].phone_number);
                    console.log("Input#: ", userStatus.phone_number);
                    console.log("Existing: " + existing);
                    if (data[i].phone_number == userStatus.phone_number) {
                        existing = true;
                    }
                };

                if (existing == true){
                    $("#exampleModalLongTitle").text("This phone number has already been used. Please update your status or enter a different phone number.")
                }
                else{
                    $("#exampleModalLongTitle").text("You’re account has been created.  Next time you log in click the “Update Previous Check In” button and use your phone number as your username to log in and and another check in");
                };

            })
        },

    };

    API.getUser().then(function () {
        if (existing == false){
            API.saveUser(userStatus)};
    });
});



