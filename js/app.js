var i = 0;
var txt = `Welcome \${${navigator.productSub}}`; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

$("#content").hide();

document.getElementById("hardware").innerHTML = `${navigator.platform} ${navigator.product}[${navigator.productSub}]`;

async function typeWriter() {
    if (i < txt.length) {
        document.getElementById("test").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        await new Promise(resolve => setTimeout(resolve, 3000));
        $("#overlay").fadeOut(1000);
        await new Promise(resolve => setTimeout(resolve, 300));
        $("#content").fadeIn(4000);
    }
}

$('#startButton').click(function(){
    var win = window.open('http://stackoverflow.com/', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
});

typeWriter();