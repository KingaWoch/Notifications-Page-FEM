const button = document.getElementById("button");
const number = document.getElementById("number");
const notifications = document.querySelectorAll(".notification");
const dot = document.querySelectorAll(".dot");

button.addEventListener("click", () => {
    for (let i = 0; i < notifications.length; i++) {
        if (notifications[i].classList.contains("unread"))
        notifications[i].classList.remove("unread")
        dot[i].style.display = "none";
        number.innerHTML = "0";
    }
})

function notificationClicked () {
    for (let i = 0; i < notifications.length; i++) {
        notifications[i].addEventListener("click", () => {
            if(notifications[i].classList.contains("unread")) {
                notifications[i].classList.remove("unread");
                dot[i].style.display = "none";
                number.innerHTML = number.innerHTML - 1;
            }
        })
    }
}

notificationClicked();
