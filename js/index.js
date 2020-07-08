window.onload=function(){
    var zh_font=document.getElementById("zh_font");
    var en_font=document.getElementById("en_font");
    var jp_font=document.getElementById("jp_font");
    var a_font=document.getElementById("a_font");
    var b_font=document.getElementById("b_font");
    var c_font=document.getElementById("c_font");
    var d_font=document.getElementById("d_font");
    var e_font=document.getElementById("e_font");
    var g_font=document.getElementById("g_font");
    zh_font.onclick=function(){
        a_font.style.display="block";
        d_font.style.display="block"
        b_font.style.display="none";
        c_font.style.display="none";
        e_font.style.display="none";
        g_font.style.display="none";

        }
    en_font.onclick=function(){
        a_font.style.display="none";
        b_font.style.display="block";
        c_font.style.display="none";
        e_font.style.display="block";
        d_font.style.display="none";
        g_font.style.display="none";

    }
    jp_font.onclick=function(){
        a_font.style.display="none";
        c_font.style.display="block";
        b_font.style.display="none";
        g_font.style.display="block";
        d_font.style.display="none";
        e_font.style.display="none";
    }




}
