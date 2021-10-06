var i = 0;
var txt = `Welcome \${${navigator.productSub}}`; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

$("#content").hide();
<<<<<<< HEAD
$("#New").hide();
$("#Title").hide();
$("#hardware").hide();
=======
>>>>>>> 8503f3c97764a07207ef60598d3b5f60b2bab6bb

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
<<<<<<< HEAD
        $("#New").fadeIn(4000);
        $("#Title").fadeIn(4000);
        $("#hardware").fadeIn(4000);
    }
}

=======
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

>>>>>>> 8503f3c97764a07207ef60598d3b5f60b2bab6bb
typeWriter();