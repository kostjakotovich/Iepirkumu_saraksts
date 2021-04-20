let preces = []
document.getElementById("pievienotPreci").addEventListener('click', Poga)
function Poga(){
    let prece = {nosaukums: nosaukums.value, daudzums: daudzums.value};
    nosaukums.value = "";
    daudzums.value=  "";
    
    preces.push(prece);

    render();

}

function render() {
    let biblioteka = document.getElementById('biblioteka');
    biblioteka.innerHTML = "";

    for(let i = 0; i < preces.length; i++) {

        let prece = `
    <div class="prece">
        <h3>Prece: ${preces[i].nosaukums}</h3>
        <h4>Daudzums: ${preces[i].daudzums}</h4>
    </div>`;
    biblioteka.innerHTML += prece;
    }
    
}