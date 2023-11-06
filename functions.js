function change_paragraph_color() {
    var border_R = document.getElementById("border_R").value;
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;
    var border_width = document.getElementById("border_width").value;
    var bg_R = document.getElementById("bg_R").value;
    var bg_G = document.getElementById("bg_G").value;
    var bg_B = document.getElementById("bg_B").value;

    var paragraph = document.getElementById("paragraph");
    paragraph.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    paragraph.style.borderWidth = border_width
    paragraph.style.backgroundColor = `rgb(${bg_R},${bg_G},${bg_B})`;
}

function check_pswds() {
    var pswd1 = document.getElementById("pswd1").value;
    var pswd2 = document.getElementById("pswd2").value;

    if (pswd1 != pswd2) {
        alert("The two entered passwords don't match!")
    } 
    
    else if (pswd1.length < 8) {
        alert("The password is not 8 characters long.")
    }
    
    else {
        alert("Your password is valid")
    }
}
