
document.addEventListener("keypress", (event)=>{
    console.log(event);
    var name = event.key
    var charcode = event.charCode

    let h1 = document.getElementById("head")
    let h2 = document.getElementById("head2")
    h1.innerHTML = `You Pressed <div class="innerdiv">     ${name}</div>`
    h2.innerHTML = charcode
})
