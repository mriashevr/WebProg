var before_loadtime = new Date().getTime();
window.onload = Pageloadtime;

function Pageloadtime() {
    var aftr_loadtime = new Date().getTime();
    // Time calculating in seconds
    pgloadtime = (aftr_loadtime - before_loadtime) / 1000

    document.getElementById("need_for_speed").innerHTML = "time: <font color='#735EFF'><b>" + pgloadtime + "</b></font> seconds";
}