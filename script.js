let biblioteka = []
document.getElementById("pievienotPreci").addEventListener('click', Poga)
function Poga(){
    let prece = {nosaukums: nosaukums.value, daudzums: daudzums.value};
    nosaukums.value = "";
    daudzums.value=  "";
    
    biblioteka.push(prece);

}

function render() {
    
}