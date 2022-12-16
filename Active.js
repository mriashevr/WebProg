function mark_current_page() {
    let file = document.location.pathname.split("/");
    file = file[file.length - 1];
    console.log(file);
    let navs = document.getElementsByClassName("links-item");
    for (let i = 0; i < navs.length; i++)
    {
        let elem = navs[i].innerHTML;
        if (elem.includes(file) > 0){
            navs[i].firstElementChild.classList.add("activepage")
            console.log(navs[i]);
        }


    }
}
document.addEventListener("DOMContentLoaded", mark_current_page);