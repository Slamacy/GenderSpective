/* global itemCount, gender, jorgeOver, amalOver, lisaOver */

function amalCharacter() {
    //all images need paths

    var response = "<h1>Hey. What's going on?</h1>";
    var option1 = "<h2>Hey, can I borrow a pen?</h2>";
    var option2 = "<h2>Hey, can I sit beside you?</h2>";
    var option3 = "";
    //begins as greeting
    //this will be updated to the current response based on prev choice
    //appears in speech bubble

    var prevOption;
    //to check if prevOption is something that leads to an item get

    $("#character").css("background-image", "url(img/amalImages/Amal_neutral.png)");

    amalConversationUpdate();

    function amalConversationUpdate() {

        console.log(amalOver);
        setTimeout(function () {
            console.log(amalOver);
            $("#speechText").html(response);
            $("#option1").html(option1);
            $("#option2").html(option2);
            $("#option3").html(option3);
            if (gender === "male") {
                $("#option1").click(function () {
                     if ($(this).html() === "<h2>(exit)</h2>"){
                        $(this).click(function () {
                            $("#conversation").hide();
                            amalOver = true;
                            $("#notifBox").show();
                            $("#notifBox").html("<p>You have not received this item.</p>");
                            setTimeout(function () {
                                status();
                                checkTeacher();
                            }, 2000);
                        });
                    }

                    else if ($(this).html() === "<h2>You have received this item! (exit)</h2>") {
                        $(this).click(function () {
                            $("#conversation").hide();
                            amalOver = true;
                            item2 = true;
                            $("#notifBox").show();
                            $("#notifBox").html("<p>You have received this item!</p>");
                            setTimeout(function () {
                                status();
                                checkTeacher();
                            }, 2000);
                        });
                    }

                    else if ($(this).html() === "<h2>Hey, Can I borrow a pen</h2>") {
                        response = "<h1>No, you should own one of your own.</h1>";
                        option1 = "<h2>What do you want me to do?</h2>";
                        option2 = "<h2>Why are you being so difficult?</h2>";
                        option3 = "<h2>There's always something...</h2>";
                        $("#character").css("background-image", "url(img/amalImages/Amal_unhappy.png)");
                        amalConversationUpdate();
                    } 
                    else if ($(this).html() === "<h2>What do you want me to do?</h2>") {
                        response = "<h1>Beat me in a game of Kick-ups later and I'll let you have it.</h1>";
                        option1 = "<h2>Sure! After class then?</h2>";
                        option2 = "<h2>Why do I need to compete for everything?</h2>";
                        option3 = "<h2>I don't care for sports, can't I just have it?</h2>";
                        $("#character").css("background-image", "url(img/amalImages/Amal_happy.png)");
                        amalConversationUpdate();
                    } 
                    else if ($(this).html() === "<h2>Sure! After class then?</h2>") {
                        response = "<h1>Nice! Here you go!</h1>";
                        option1 = "<h2>You have received this item! (exit)</h2>";
                        option2 = "";
                        option3 = "";
                        $("#character").css("background-image", "url(img/amalImages/Amal_happy.png)");
                        amalConversationUpdate();
                    }

                });
                $("#option2").click(function () {
                    if ($(this).html() === "<h2>Hey, can I sit beside you?</h2>") {
                        response = "<h1>No, go find somewhere else to sit.</h1>";
                        option1 = "<h2>What do you want me to do?</h2>";
                        option2 = "<h2>Why are you being so difficult?</h2>";
                        option3 = "<h2>There's always something...</h2>";
                        $("#character").css("background-image", "url(img/amalImages/Amal_unhappy.png)");
                        amalConversationUpdate();
                    } else if ($(this).html() === "<h2>Why are you being so difficult?</h2>") {
                        response = "<h1>What's your problem? You've got to work for things. A game of Kick-ups for it?</h1>";
                        option1 = "<h2>Sure! After class then?</h2>";
                        option2 = "<h2>Why do I need to compete for everything?</h2>";
                        option3 = "<h2>I don't care for sports, can't I just have it?</h2>";
                        $("#character").css("background-image", "url(img/amalImages/Amal_confused.png)");
                        amalConversationUpdate();
                    } else if ($(this).html() === "<h2>Why do I need to compete for everything?</h2>") {
                        response = "<h1>Suit yourself, you're not much of a man I see.</h1>";
                        option1 = "<h2>(exit)</h2>";
                        option2 = "";
                        option3 = "";
                        $("#character").css("background-image", "url(img/amalImages/Amal_unhappy.png)");
                        amalConversationUpdate();
                    }
                });
                $("#option3").click(function () {
                    if ($(this).html() === "<h2>There's always something...</h2>") {
                        response = "<h1>You're right. Beat me in a game of Kick-ups for it?</h1>";
                        option1 = "<h2>Sure! After class then?</h2>";
                        option2 = "<h2>Why do I need to compete for everything?</h2>";
                        option3 = "<h2>I don't care for sports, can't I just have it?</h2>";
                        $("#character").css("background-image", "url(img/amalImages/Amal_happy.png)");
                        amalConversationUpdate();
                    } 
                    else if ($(this).html() === "<h2>I don't care for sports, can't I just have it?</h2>") {
                        response = "<h1>Alright. Go ahead, knock yourself out. I would have beaten you easily anyway.</h1>";
                        option1 = "<h2>You have received this item! (exit)</h2>";
                        option2 = "";
                        option3 = "";
                        $("#character").css("background-image", "url(img/amalImages/Amal_neutral.png)");
                        amalConversationUpdate();
                    }
                });
            } else if (gender === "female") {
                $("#option1").click(function () {
                    if ($(this).html() === "<h2>(exit)</h2>") {
                        $(this).click(function () {
                            $("#conversation").hide();
                            amalOver = true;
                            $("#notifBox").show();
                            $("#notifBox").html("<p>You have not received this item.</p>");
                            setTimeout(function () {
                                status();
                                checkTeacher()
                            }, 2000);
                        });
                    }


                  
                    else if ($(this).html() === "<h2>You have received the item! [exit]</h2>") {

                        $(this).click(function () {
                            $("#conversation").hide();
                            amalOver = true;
                            item2=true;
                            $("#notifBox").show();
                            $("#notifBox").html("<p>You have received this item.</p>");
                            setTimeout(function () {
                                status();
                                checkTeacher()
                            }, 2000);
                        });
                    }
                    
                    else if ($(this).html() === "<h2>Hey, can I borrow a pen?</h2>") {

                        response = "<h1>No, you should own one of your own.</h1>";
                        option1 = "<h2>What do you want me to do?</h2>";
                        option2 = "<h2>Why are you being so difficult?</h2>";
                        option3 = "<h2>There's always something...</h2>";
                        $("#character").css("background-image", "url(img/amalImages/Amal_unhappy.png)");
                        amalConversationUpdate();
                    }
                    
                    else if ($(this).html() === "<h2>What do you want me to do?</h2>") {
                        response = "<h1>Go over there and stick you hand into the bin, you girls hate that.</h1>";
                        option1 = "<h2>I'm not scared of rubbish! Bring it on!</h2>";
                        option2 = "<h2>What? Just let me have it!</h2>";
                        option3 = "<h2>Nobody wants to do that, let me have it.</h2>";
                        $("#character").css("background-image", "url(img/amalImages/Amal_happy.png)");
                        amalConversationUpdate();
                    }
                    
                    else if ($(this).html() === "<h2>I'm not scared of rubbish! Bring it on!</h2>") {
                        response = "<h1>Yes! This girl is insane!</h1>";
                        option1 = "<h2>You have received this item! (exit)</h2>";
                        option2 = "";
                        option3 = "";
                        $("#character").css("background-image", "url(img/amalImages/Amal_happy.png)");
                        amalConversationUpdate();
                    }
                    
                    else if ($(this).html() === "<h2>What? That's so wrong!</h2>") {
                        response = "<h1>Prove it to me then.</h1>";
                        option1 = "<h2>People can take advantage of you regardless of sex.</h2>";
                        option2 = "<h2>Just give me it now!</h2>";
                        option3 = "<h2>You're such a pig!</h2>";
                        $("#character").css("background-image", "url(img/amalImages/Amal_unhappy.png)");
                        amalConversationUpdate();
                    }
                    
                    else if ($(this).html() === "<h2>People can take advantage of you regardless of sex.</h2>") {
                        response = "<h1>I guess you're right. Sorry, you can have it, just remember to give it back.</h1>";
                        option1 = "<h2>You have received this item! (exit)</h2>";
                        option2 = "";
                        option3 = "";
                        $("#character").css("background-image", "url(img/amalImages/Amal_confused.png)");
                        amalConversationUpdate();
                    }
                });

                $("#option2").click(function () {
                    if ($(this).html() === "<h2>What? Just let me have it!</h2>") {
                        response = "<h1>No way! Go nag someone else!</h1>";
                        option1 = "<h2>(exit)</h2>";
                        option2 = "";
                        option3 = "";
                        $("#character").css("background-image", "url(img/amalImages/Amal_unhappy.png)");
                        amalConversationUpdate();
                    }
                    
                    else if ($(this).html() === "<h2>Just give me it now!</h2>") {
                        response = "<h1>Woah! You're crazy. Go annoy someone else.</h1>";
                        option1 = "<h2>(exit)</h2>";
                        option2 = "";
                        option3 = "";
                        $("#character").css("background-image", "url(img/amalImages/Amal_unhappy.png)");
                        amalConversationUpdate();
                    }
                    
                    else if ($(this).html() === "<h2>Hey, can I sit beside you?</h2>") {
                        response = "<h1>No, go find somewhere else to sit.</h1>";
                        option1 = "<h2>What do you want me to do?</h2>";
                        option2 = "<h2>Why are you being so difficult?</h2>";
                        option3 = "<h2>There's always something...</h2>";
                        $("#character").css("background-image", "url(img/amalImages/Amal_unhappy.png)");
                        amalConversationUpdate();
                    }
                });

                $("#option3").click(function () {
                    if ($(this).html() === "<h2>You're such a pig!</h2>") {
                        response = "<h1>Wow. Get out of my face.</h1>";
                        option1 = "<h2>(exit)</h2>";
                        option2 = "";
                        option3 = "";
                        $("#character").css("background-image", "url(img/amalImages/Amal_unhappy.png)");
                        amalConversationUpdate();
                    }
                    
                    else if ($(this).html() === "<h2>Nobody wants to do that, please let me have it!</h2>") {
                        response = "<h1>No way, you're just a scared little girl.</h1>";
                        option1 = "<h2>(exit)</h2>";
                        option2 = "";
                        option3 = "";
                        $("#character").css("background-image", "url(img/amalImages/Amal_unhappy.png)");
                        amalConversationUpdate();
                    }
                });
            }
            //console.log(prevOption);
        }), 500;
    }

    function checkTeacher() {
        if (amalOver && lisaOver) {
            teacher();
        }
    }
}