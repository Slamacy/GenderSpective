/* global lisaOver, jorgeOver, amalOver, gender, itemCount */

function teacher() {
    var response = "";
    $("#notifBox").hide();
    $("#conversation").show();
    $("#options").hide();
    
    evaluation();

    function evaluation() {
        if (itemCount === 3) {
            response = "<h1>Very good, now take your seat.</h1>";
            $("#speechText").html(response);
            $("#conversation").show();
            $("#character").css("background-image", "url(img/teacherImages/teacher_happy.png)");
        }
        if (itemCount === 2) {
            if (gender === "male") {
                response = "<h1>Typical, can't you boys be prepared at all?</h1>";
                $("#character").css("background-image", "url(img/teacherImages/teacher_neutral.png)");
            } else if (gender === "female") {
                response = "<h1>What do you do with your time? You should work harder!</h1>";
                $("#character").css("background-image", "url(img/teacherImages/teacher_unhappy.png)");
            }
            $("#speechText").html(response);
            $("#conversation").show();
        }
        if (itemCount === 1) {
            if (gender === "male") {
                response = "<h1>Typical boy, prioritizing play over work. Sit down immediately!</h1>";
                $("#character").css("background-image", "url(img/teacherImages/teacher_unhappy.png)");
            } else if (gender === "female") {
                response = "<h1>Why can't you be like the other girls? Sit down immediately.</h1>";
                $("#character").css("background-image", "url(img/teacherImages/teacher_unsure.png)");
            }
            $("#speechText").html(response);
            $("#conversation").show();
        }
        if (itemCount === 0) {
            if (gender === "male") {
                response = "<h1> Just go and sit! You boys are nothing but a bother to everybody!</h1>";
            } else if (gender === "female") {
                response = "<h1> Just go and sit! I don't get how you girls bother people so much!</h1>";
            }
            $("#speechText").html(response);
            $("#conversation").show();
            $("#character").css("background-image", "url(img/teacherImages/teacher_unhappy.png)");
        }
        setTimeout(function(){window.location.href='last.html?itemCount=' + itemCount;},3000);
    }
}
        