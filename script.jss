function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}






function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}


window.onload = typeWriter
window.onload = typeWriter
<div class="btn" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1800">
    <button onclick="window.location.href='Hire Me.html'">Hire Me</button>
</div>

<script>
    const form = document.getElementById("form");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        const formData = new FormData(form);
        e.preventDefault();
        var object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        var json = JSON.stringify(object);
        result.innerHTML = "Please wait...";

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = json.message;
                    result.classList.remove("text-gray-500");
                    result.classList.add("text-green-500");
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                    result.classList.remove("text-gray-500");
                    result.classList.add("text-red-500");
                }
            })
            .catch((error) => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function () {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 5000);
            });
    });
</script>




script.js


Displaying script.js.
