let preces = []

window.addEventListener('load', () => {
    preces = JSON.parse(localStorage.getItem("preces") || "[]");
    console.log(preces)
    render();
});

document.getElementById("pievienotPreci").addEventListener('click', Poga)
function Poga(){
    if (nosaukums.value === ""){
        alert("Jūs neievadijāt produkta nosaukumu")
    };
    if (daudzums.value === ""){
        alert("Jūs neievadijāt produkta dauduzumu")
    } else {
        let prece = {nosaukums: nosaukums.value, daudzums: daudzums.value};
        nosaukums.value = "";
        daudzums.value = "";
    
        preces.push(prece);

        render();
    }

}

function render() {
    let saraksts = document.getElementById('saraksts');
    saraksts.innerHTML = "";

    for(let i = 0; i < preces.length; i++) {

        let prece = `
    <li class="prece">
        <h3>Prece: ${preces[i].nosaukums}</h3>⠀⠀⠀<h4>Daudzums: ${preces[i].daudzums}</h4>⠀⠀⠀⠀
        <button class="del">Dzēst</button>
    </li>`;
    saraksts.innerHTML += prece;
    }

    localStorage.setItem("preces", JSON.stringify(preces)) 
}

const list = document.querySelector('#saraksts')

list.addEventListener('click', (e) => {
    if(e.target.className == 'del'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
      preces.splice(li, 1);
      localStorage.setItem('preces',JSON.stringify(preces));
    }
  });