function musicalGroup(m){ 
    if (m <= 0) 
    { console.log("not a group") }
    if (m == 1) { console.log("solo") }
    if (m == 2) { console.log("duet") }
    if (m == 3) { console.log("trio") }
    if (m == 4) { console.log("quartret") }
    if (m >= 5) { console.log("this is a large group") } 
} 

console.log(musicalGroup(5))