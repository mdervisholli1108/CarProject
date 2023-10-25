const imageSources = ["https://cdn.dealeraccelerate.com/rkm/1/5230/372569/1920x1440/1966-ford-mustang-gt", "https://cdn.dealeraccelerate.com/rkm/1/7147/462295/1920x1440/1969-ford-mustang", "https://cdn.dealeraccelerate.com/rkm/1/7573/500986/1920x1440/1970-chevrolet-chevelle-ss"];
const carNames = ["1966 Ford Mustang GT", "1969 Ford Mustang GTO", "1970 Chevy Chevelle SS"];
let index = 0;
setInterval(function () {
    if (index === imageSources.length) {
        index = 0;
    }
    document.getElementById("image1").src = imageSources[index];
    document.getElementById('title1').innerText = carNames[index];
    index++;
}, 3000);


// let finalAmount = document.getElementById("cost").placeholder;
// function totalPrice(value) {
//     let amount = document.getElementById("interval").value;
//     document.getElementById("cost").innerText = amount * 10;
// }



function totalPrice(passedInValue) {
    // let o1 = document.querySelector("#option1").value;
    const o1 = document.getElementById("option1");
    const o2 = document.getElementById("o2");
    const o3 = document.getElementById("o3");
    const o4 = document.getElementById("o4");
    let cost = document.getElementById("cost");
    console.log(o1);
    if (passedInValue === o1.value) {
        // cost.placeholder = "$100.00"
        cost.setAttribute("value", "$100.00")
    } else if (passedInValue === o2.value) {
        cost.setAttribute("value", "$150.00")
    } else if (passedInValue === o3.value) {
        cost.setAttribute("value", "$200.00")
    } else if (passedInValue === o4.value) {
        cost.setAttribute("value", "$250.00")
    }
}


