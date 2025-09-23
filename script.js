const placeTag = document.querySelector(".place");
const timeTag = document.querySelector(".time");
const timeopenTag = document.querySelector(".timeopen");
const findusTag = document.querySelector(".nav__find");
const wearehereTag = document.querySelector(".content__header");
const menuNavTag = document.querySelector(".nav__menu");
const menuTag = document.querySelector(".content__menu");
const menuFooterTag = document.querySelector(".footer__menu");

var dayN = new Date().getDay();
var hours = new Date().getHours();
var minutes = new Date().getMinutes();

findusTag.addEventListener("click", function(){
    wearehereTag.scrollIntoView();
});

menuNavTag.addEventListener("click", function(){
    menuTag.scrollIntoView();
});

menuFooterTag.addEventListener("click", function(){
    menuTag.scrollIntoView();
});


function day(dayN) {

    if (dayN === 0) {
        placeTag.innerHTML = "Stengt";
    }
    else if (dayN === 1) {
        placeTag.innerHTML = "Stengt";
    }

    else if (dayN === 2) {
        placeTag.innerHTML = "Fisketorget";
    }

    else if (dayN === 3){
        placeTag.innerHTML = "Studentsenteret";
    }
    else if (dayN === 4){
        placeTag.innerHTML = "Studentsenteret";
    }

    else if (dayN === 5) {
        placeTag.innerHTML = "Møhlenpris ved Cornerteateret";
    }
    else if (dayN === 6) {
        placeTag.innerHTML = "Møhlenpris ved Cornerteateret";
    }
};

function openingtimes(dayN) {
    if (dayN === 0) {
        timeTag.innerHTML = "Stengt";
    }
    else if (dayN === 1) {
        timeTag.innerHTML = "Stengt";
    }

    else if (dayN === 2) {
        timeTag.innerHTML = "14:00 - 22:00";
    }

    else if (dayN === 3){
        timeTag.innerHTML = "14:00 - 22:00";
    }
    else if (dayN === 4){
        timeTag.innerHTML = "14:00 - 22:00";
    }

    else if (dayN === 5) {
        timeTag.innerHTML = "14:00 - 03:00";
    }
    else if (dayN === 6) {
        timeTag.innerHTML = "14:00 - 03:00";
    }
};


function timeopen(hours, minutes) {

    if (dayN === 0) {
        timeopenTag.innerHTML = "Vi åpner igjen tirsdag klokken 14:00!";
    }
    else if (dayN === 1) {
        timeopenTag.innerHTML = "Vi åpner igjen tirsdag klokken 14:00!";
    }

    else if (dayN === 2){
        if (hours>14){
            if (21-hours > 0) {
                timeopenTag.innerHTML = "Vi holder åpent i " (21-hours) + " timer og " + (60-minutes) + " til."
            }
            else if (21-hours === 0) {
                timeopenTag.innerHTML = "Vi holder åpent i " + (60-minutes) + " minutter til."
            }
            else if (22-hours < 0) {
                timeopenTag.innerHTML = "Vi åpner igjen onsdag klokken 14:00!"
            }
        }
        else if (hours<14) {
            timeopenTag.innerHTML = "vi åpner igjen om " + (13-hours) + "timer og " + (60-minutes) + "minutter."
        }
    }
    else if (dayN === 3){
        if (hours>14){
            if (21-hours > 0) {
                timeopenTag.innerHTML = "Vi holder åpent i " (21-hours) + " timer og " + (60-minutes) + " til."
            }
            else if (21-hours === 0) {
                timeopenTag.innerHTML = "Vi holder åpent i " + (60-minutes) + " minutter til."
            }
            else if (22-hours < 0) {
                timeopenTag.innerHTML = "Vi åpner igjen onsdag klokken 14:00!"
            }
        }
        else if (hours<14) {
            timeopenTag.innerHTML = "vi åpner igjen om " + (13-hours) + "timer og " + (60-minutes) + "minutter."
        }
    }

    else if (dayN === 4){
        if (hours>14){
            if (21-hours > 0) {
                timeopenTag.innerHTML = "Vi holder åpent i " (21-hours) + " timer og " + (60-minutes) + " til."
            }
            else if (21-hours === 0) {
                timeopenTag.innerHTML = "Vi holder åpent i " + (60-minutes) + " minutter til."
            }
            else if (22-hours < 0) {
                timeopenTag.innerHTML = "Vi åpner igjen onsdag klokken 14:00!"
            }
        }
        else if (hours<14) {
            timeopenTag.innerHTML = "vi åpner igjen om " + (13-hours) + "timer og " + (60-minutes) + " minutter."
        }
    }


    else if (dayN === 5){
        if (hours>14){
            if (23-hours > 0) {
                timeopenTag.innerHTML = "Vi holder åpent i " (hours+3) + " timer og " + 60-minutes + " til."
            }
            else if (23-hours === 0) {
                timeopenTag.innerHTML = "Vi holder åpent i " + (60-minutes) + " minutter til."
            }
        }
        else if (hours<14) {
            if (hours-13 === 0) {
                timeopenTag.innerHTML = "Vi åpner igjen om " + (60-minutes) + " minutter."
            }
            else {
                timeopenTag.innerHTML = "Vi åpner igjen om " + (13-hours) + "timer og " + (60-minutes) + " minutter."}
        }
    }



    else if (dayN === 6){
        if (hours>14){
            if (23-hours > 0) {
                timeopenTag.innerHTML = "Vi holder åpent i " (hours+3) + " timer og " + 60-minutes + " til."
            }
            else if (23-hours === 0) {
                timeopenTag.innerHTML = "Vi holder åpent i " + (60-minutes) + " minutter til."
            }
            else if (20-hours > -3 && 20-hours < 0) {
                timeopenTag.innerHTML = "Vi har åpent i " + (hours-2) + " timer og " + (60-minutes) + " minutter til."
            }
        }
        else if (hours<14 && hours>3) {
            timeopenTag.innerHTML = "Vi åpner om igjen om " + (13-hours) + "timer og " + (60-minutes) + " minutter."
        }
    }

    
};

