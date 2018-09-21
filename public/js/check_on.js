


$("#recentMessage").on("click", function (event) {

    event.preventDefault();
    var number = $("#phoneNumber").val().trim();
    console.log("NUMBER: ", number)
    $.ajax({
        type: "GET",
        url: "/api/users/" + number
    }).then(function (data) {
        if (!data) {
            $("#exampleModalLongTitle").text("A record does not exist for this number");
            $("ul").text(" ");
        }
        else {
            $("#exampleModalLongTitle").text("Current check in status for " + data.first_name + " " + data.last_name);
            for (var i = 0; i < data.Statuses.length; i++) {
                $("ul").prepend("<li><b>" + moment(data.Statuses[i].createdAt).format("MM/DD/YY hh:mm A") + "</b><br>" + data.Statuses[i].comments + "</>li");

            }
        }

        console.log(data.Statuses)
    })


})