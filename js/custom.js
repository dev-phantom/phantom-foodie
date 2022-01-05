$(function(){
    $(".navbar-toggle").click(function(){
         $('.navbar-collapse').slideToggle(500);
         return false;
    });
});
window.onload = () => {
    let body = document.getElementsByTagName("body")[0];
    let menu, about, opening, contact, menuTitle, foodDecription, openingHour, dateTime, phones, tim, headText, footer,phone, border;
    menu = document.querySelector('.menu');
    opening = document.querySelector('.opening');
    contact = document.querySelector('.contact');
    menuTitle = document.querySelector(".menu-title");
    foodDecription = document.querySelector(".food-decription1");
    openingHour = document.querySelector(".opening-hour");
    dateTime = document.querySelector(".date-time");
    tim = document.querySelector("#tim"); 
    headText = document.querySelector(".head-text");
    footer = document.querySelector("footer");
    phone = document.getElementsByTagName('label');
    link = document.getElementsByTagName('a');
    border = document.getElementsByTagName('button');
    icon = document.getElementsByTagName("i");
    phones = document.getElementsByClassName(".con");
    let theme = document.querySelector(".theme");
    theme.onclick = e => {
        body.style.backgroundColor = "#eee";
        body.style.color = "#000";
        menu.style.backgroundColor = "#bdbdbd";
        menu.style.color = "#000";
        opening.style.backgroundColor = "#bdbdbd";
        opening.style.color = "#000";
        contact.style.backgroundColor = "#bdbdbd";
        contact.style.color = "#000";

        menuTitle.style.color = "#EF6C00";
        foodDecription.style.color = "#000";
        openingHour.style.color = "#EF6C00";
        dateTime.style.color = "#000";
        tim.style.color = "#000";
        headText.style.color = "#000";
        footer.style.color = "#000";

        for (let i = 0; i < phone.length; i++) {
            phone[i].style.color = "#000";        
        }
        for (let i = 0; i < link.length; i++) {
            link[i].style.color = "#000";        
        }
        for (let i = 0; i < icon.length; i++) {
            icon[i].style.color = "#000";        
        }
        for (let i = 0; i < phones.length; i++) {
            phones[i].style.color = "#000";        
        }
        for (let i = 0; i < border.length; i++) {
            border[i].style.borderColor = "#000";        
            border[i].style.color = "#000";        
        }
        e.preventDefault()
    }
}