document.addEventListener('DOMContentLoaded', function() {})
var numCase = 0
fetch('data.json').then(function(response) {
    response.json().then(function(data){
        for (let numCase = 0; numCase < data.length; numCase++) {
            const element = data[numCase]
            console.log(numCase)
            console.log(element.anl)
            document.querySelector('section').innerHTML = document.querySelector('section').innerHTML+ "<div class='image"+ numCase + "' id='analogie"+ numCase + "'>" + "<div class='fond"+ numCase + "' class='justify'>" + '<h2>' +'Si j\'étais '+ element.anl + ' je serais ' + element.valeuranl + '</h2>'+ '<br>' + '<p>' + element.justify + '</p>' + '</div>' + '</div>'
        }
    })
  })

//fenêtre modale
var overlay = document.getElementById("overlay", "modal");

document.querySelector("#show-modal-btn").addEventListener("click", () => {
    overlay.style.display = "block";
});

document.querySelector("#close-modal-btn").addEventListener("click", () => {
    overlay.style.display = "none";
});

var visible = true

document.querySelector('footer h3').addEventListener('click', function(){
document.querySelectorAll('.mention').forEach(function(element){
    if (visible == true){
        element.style.display = 'none'
        
    }         
    else {
        element.style.display = 'block'
    }
 })

 visible = !visible
})

document.querySelector('#analogie').addEventListener('keyup',function(e){
    console.log(document.querySelector('#analogie').value)
})

document.querySelector('#valeuranalogie').addEventListener('keyup',function(e){
    console.log(document.querySelector('#valeuranalogie').value)
})

document.querySelector('#justify').addEventListener('keyup',function(e){
    console.log(document.querySelector('#justify').value)
})

document.querySelector('#img').addEventListener('keyup',function(e){
    console.log(document.querySelector('#img').value)
})

document.querySelector('#sub').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#toi').innerHTML+= "<div class='imagetoi'>" + "<div class='fond' class='justify'>" + '<h2>' +'Si j\'étais '+ document.querySelector("#analogie").value + ' je serais ' + document.querySelector("#valeuranalogie").value + '</h2>'+ '<br>' + '<p>' + document.querySelector("#justify").value + '</p>' + '</div>' + '</div>'
//API
    fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php&format=json&login=nkodiadiabate&courriel=" + document.querySelector("#mail").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ",je serais " + document.querySelector("#valeurAnalogie").value + "Parce que " + document.querySelector("#justify").value).then(function (response) {
        response.json().then(function (data) {
            if (data.status == "success") {
                document.querySelector("#message").innerHTML = "Votre message a bien été reçu";
                console.log('message bien envoyé')
            } else {
                document.querySelector("#message").innerHTML = "Problème : votre message n'a pas été reçu";
                console.log('message échoué')
            }
        })
    })
});
