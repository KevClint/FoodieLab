var logo = document.getElementById("logo-clintlab");

logo.onclick = function() {
    document.body.classList.toggle("dark-theme");
}


// ==== ==== ====
// If you will decide to put an icon that changes whenever you click 
// it (like ex. a cresent icon (light mode) to moon icon (darkmode))
// ==== ==== ====

// logo.onclick = function() {
//     document.body.classList.toggle("dark-theme");
    
//     if  (document.body.classList.contains("dark-theme")) {
//         icon.src = "image/cresent"
//     }
//     else {
//         icon.src = "image/moon"
//     }
// }

