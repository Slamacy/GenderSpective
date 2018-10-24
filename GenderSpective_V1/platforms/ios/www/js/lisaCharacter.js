/* global itemCount, gender, jorgeOver, amalOver */

function lisaCharacter() {
    //all images need paths
    
    var response = "<h1>Hey, what's up?</h1>";
    var option1 = "<h2>Can I borrow a pen?</h2>";
    var option2 = "<h2>Can I borrow your homework?</h2>";
    var option3 = "";
    //begins as greeting
    //this will be updated to the current response based on prev choice
    //appears in speech bubble
    
    var prevOption;
    //to check if prevOption is something that leads to an item get
    
    $("#character").css("background-image", "url(img/lisaImages/lisa_neutral.png)");

    conversationUpdate();
    
    function conversationUpdate() {
        $("#speechText").html(response);
        $("#option1").html(option1);
        $("#option2").html(option2);
        $("#option3").html(option3);
        if(gender === "male") {
            $("#option1").click(function() {
                if($(this).html() === "<h2>[exit]</h2>") {
                    $(this).click(function() {
                        $("#conversation").hide();
                        lisaOver = true;
                        $("#notifBox").show();
                        $("#notifBox").html("<p>You have not received the item.</p>");
                        setTimeout(function() {
                            status();
                        }, 2000);
                    });
                }
                
                if($(this).html() === "<h2>You have recieved the item! [exit]</h2>") {
                    $(this).click(function() {
                        $("#conversation").hide();
                        lisaOver = true;
                        itemCount++;
                        $("#notifBox").show();
                        $("#notifBox").html("<p>You have recieved the item!</p>");
                        setTimeout(function() {
                            status();
                        }, 2000);
                    });
                }
                
                if($(this).html() === "<h2>Can I borrow a pen?</h2>") {
                    response = "<h1>No, you should own one of your own.</h1>";
                    option1 = "<h2>Please? I really need it!</h2>"; 
                    option2 = "<h2>Just give it to me now!</h2>"; 
                    option3 = "<h2>You're right, I'll go ask somewhere else...</h2>";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_unhappy.png)");
                    conversationUpdate();
                }
                
                else if($(this).html() === "<h2>What? That's rude! It's not much to ask for!</h2>") {
                    response = "<h1>Prove it!</h1>";
                    option1 = "<h2>Lots of boys aren't lazy, it's not fair to say that!</h2>"; 
                    option2 = "<h2>Just give it to me now!</h2>"; 
                    option3 = "<h2>I don't need to prove anything to a girl like you!</h2>";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_unhappy.png)");
                    conversationUpdate();
                }
                
                else if($(this).html() === "<h2>Please? I really need it!</h2>") {
                    response = "<h1>No. All you boys are so lazy, you're not getting it.</h1>";
                    option1 = "<h2>What? That's rude! It's not much to ask for!</h2>"; 
                    option2 = "<h2>Just give it to me now!</h2>"; 
                    option3 = "<h2>You're right, I'll ask someone else...</h2>";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_unhappy.png)");
                    conversationUpdate();
                }
                                
                else if($(this).html() === "<h2>Lots of boys aren't lazy, it's not fair to say that!</h2>") {
                    response = "<h1>I guess... You can have it then, just remember to give it back.</h1>";
                    option1 = "<h2>You have recieved the item! [exit]</h2>";
                    option2 = "";
                    option3 = "";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_unsure.png)");
                    conversationUpdate();
                }
                
                else if($(this).html() === "<h2>A coward? You can't just say that!</h2>") {
                    response = "<h1>Prove it!</h1>";
                    option1 = "<h2>Not everyone is 'manly' you know.</h2>"; 
                    option2 = "<h2>Just give it to me now!</h2>"; 
                    option3 = "<h2>I don't need to prove anything to a girl like you!</h2>";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_unhappy.png)");
                    conversationUpdate();
                }
                
                else if($(this).html() === "<h2>Not everyone is 'manly' you know.</h2>") {
                    response = "<h1>You're such a wimp! Here, take it, just make sure to give it back.</h1>";
                    option1 = "<h2>You have recieved the item! [exit]</h2>"; 
                    option2 = ""; 
                    option3 = "";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_unhappy.png)");
                    conversationUpdate();
                }
                
                else if($(this).html() === "<h2>Lots of boys aren't lazy, it's not fair to say that!</h2>") {
                    response = "<h1>I guess... You can have it then, just remember to give it back.</h1>";
                    option1 = "<h2>You have recieved the item! [exit]</h2>";
                    option2 = "";
                    option3 = "";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_unhappy.png)");
                    conversationUpdate();
                }
                prevOption = $("#option1").html();
            });
            $("#option2").click(function() {
                if($(this).html() === "<h2>Can I borrow your homework?</h2>") {
                    response = "<h1>No, you should have done it.</h1>";
                    option1 = "<h2>Please? I really need it!</h2>"; 
                    option2 = "<h2>Just give it to me now!</h2>"; 
                    option3 = "<h2>You're right, I'll go ask somewhere else...</h2>";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_unhappy.png)");
                    conversationUpdate();
                }
                
                else if($(this).html() === "<h2>Just give it to me now!</h2>") {
                    response = "<h1>No! Go away you creep!</h1>";
                    option1 = "<h2>[exit]</h2>";
                    option2 = "";
                    option3 = "";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_unhappy.png)");
                    conversationUpdate();
                }
                
                else if($(this).html() === "<h2>Don't talk down to me like that!</h2>") {
                    response = "<h1>I'll do what I want, go away!</h1>";
                    option1 = "<h2>[exit]</h2>";
                    option2 = "";
                    option3 = "";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_unhappy.png)");
                    conversationUpdate();
                }
                prevOption = $("#option2").html();
            });
            $("#option3").click(function() {
                if($(this).html() === "<h2>You're right, I'll go ask somewhere else...</h2>") {
                    if(prevOption === "<h2>Can I borrow a pen?</h2>") {
                        response = "<h1>For a boy you're such a coward.</h1>";
                        option1 = "<h2>A coward? You can't just say that!</h2>";
                        option2 = "<h2>Don't talk down to me like that!</h2>";
                        option3 = "<h2>That's a typical thing for a girl so say.</h2>";
                        conversationUpdate();
                    }
                    else if(prevOption === "<h2>Can I borrow your homework?</h2>") {
                        response = "<h1>For a boy you're such a coward.</h1>";
                        option1 = "<h2>A coward? You can't just say that!</h2>";
                        option2 = "<h2>Don't talk down to me like that!</h2>";
                        option3 = "<h2>That's a typical thing for a girl so say.</h2>";
                        conversationUpdate();
                    }
                    else if(prevOption === "<h2>Please? I really need it!</h2>") {
                        response = "<h1>Yes I am, now go away.</h1>";
                        option1 = "<h2>[exit]</h2>";
                        option2 = "";
                        option3 = "";
                        $("#character").css("background-image", "url(img/lisaImages/lisa_unhappy.png)");
                        conversationUpdate();
                    }
                }
                
                else if($(this).html() === "<h2>That's a typical thing for a girl so say.</h2>") {
                    response = "<h1>How dare you!</h1>";
                    option1 = "<h2>[exit]</h2>";
                    option2 = "";
                    option3 = "";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_unhappy.png)");
                    conversationUpdate();
                }
                
                else if($(this).html() === "<h2>I don't need to prove anything to a girl like you!</h2>") {
                    response = "<h1>How dare you!</h1>";
                    option1 = "<h2>[exit]</h2>";
                    option2 = "";
                    option3 = "";
                    conversationUpdate();
                }
                prevOption = $("#option3").html();
            });
        }
        else if(gender === "female") {
            $("#option1").click(function() {
                prevOption = $("#option1").html();
                if($(this).html() === "<h2>[exit]</h2>") {
                    $(this).click(function() {
                        $("#conversation").hide();
                        lisaOver = true;
                        $("#notifBox").show();
                        $("#notifBox").html("<p>You have not received the item.</p>");
                        setTimeout(function() {
                            status();
                        }, 2000);
                    });
                }
                
                if($(this).html() === "<h2>You have recieved the item! [exit]</h2>") {
                    $(this).click(function() {
                        $("#conversation").hide();
                        lisaOver = true;
                        itemCount++;
                        $("#notifBox").show();
                        $("#notifBox").html("<p>You have received the item.</p>");
                        setTimeout(function() {
                            status();
                        }, 2000);
                    });
                }
                
                if($(this).html() === "<h2>Can I borrow a pen?</h2>") {
                    response = "<h1>No, you should own one of your own.</h1>";
                    option1 = "<h2>Please? I really need it!</h2>"; 
                    option2 = "<h2>Just give it to me now!</h2>"; 
                    option3 = "<h2>You're right, I'll go ask somewhere else...</h2>";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_unhappy.png)");
                    conversationUpdate();
                }
                
                else if($(this).html() === "<h2>Please? I really need it!</h2>") {
                    response = "<h1>Sure! You can have it, just give it back when you're done.</h1>";
                    option1 = "<h2>You have recieved the item! [exit]</h2>";
                    option2 = ""; 
                    option3 = "";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_happy.png)");
                    conversationUpdate();
                }
            });
            
            $("#option2").click(function() {
                if($(this).html() === "<h2>Just give it to me now!</h2>") {
                    response = "<h1>You're so demanding, go ask someone else!</h1>";
                    option1 = "<h2>[exit]</h2>";
                    option2 = "";
                    option3 = "";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_unhappy.png)");
                    conversationUpdate();
                }
                
                else if($(this).html() === "<h2>Can I borrow your homework?</h2>") {
                    response = "<h1>No, you should have done it.</h1>";
                    option1 = "<h2>Please? I really need it!</h2>"; 
                    option2 = "<h2>Just give it to me now!</h2>"; 
                    option3 = "<h2>You're right, I'll go ask somewhere else...</h2>";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_unhappy.png)");
                    conversationUpdate();
                }
            });
            
            $("#option3").click(function() {
                if($(this).html() === "<h2>You're right, I'll go ask somewhere else...</h2>") {
                    response = "<h1>No! It's ok, you can have it, just don't forget to give it back.</h1>";
                    option1 = "<h2>You have recieved the item! [exit]</h2>";
                    option2 = "";
                    option3 = "";
                    $("#character").css("background-image", "url(img/lisaImages/lisa_happy.png)");
                    conversationUpdate();
                }
            });
        }
        $("#speechText").html(response);
        $("#option1").html(option1);
        $("#option2").html(option2);
        $("#option3").html(option3);
        console.log(prevOption);
        checkTeacher();
    }
    
    function checkTeacher() {
        if (lisaOver && jorgeOver && amalOver) {
            teacher();
        }
    }
}