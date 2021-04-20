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

    for(let i = 0; i < biblioteka.clientHeight; i++) {
        let prece = `
    <div class="prece">
        <h3>Prece: dators</h3>
        <h4>Daudzums: 5</h4>
    </div>`;
    biblioteka.innerHTML = prece;
    }
    
}