const url = 'http://localhost:3000/etudiant';
const addTobody = (etudiant) => {
    // creation dynamique des elements
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    // laison des elements
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    // remplissage des elements
    td1.innerText = etudiant.id;
    td2.innerText = etudiant.nom;
    td3.innerText = etudiant.prenom;
    td4.innerText = etudiant.moyenne;

    td5.innerText = etudiant.moyenne >= 10 ? 'accepted' : 'not accepted';
    td5.style.color = etudiant.moyenne >= 10 ? 'green' : 'red';
    // ajout de la ligne au tableau
    document.getElementById('tbody').appendChild(tr);
}

const load = () => {
    fetch(url)
        .then(response => response.json())
        .then(datas => datas.forEach(etudiant => {
            addTobody(etudiant)
        }))
}


const addEtudiant = () => {
    let td = document.createElement('td');
    td.innerText = etudiant.id;
    document.getElementById('tbody').appendChild(td);
}
load();

// post
const add = () => {
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let moyenne = document.getElementById('moyenne').value;
    let etudiant = { nom, prenom, moyenne };
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(etudiant)
    })
        .then(response => response.json() )
        .then(data => {
            addTobody(data)  
        })
}

// add event listener
const button = document.getElementsByClassName('button')[0];
button.addEventListener('click', () => {
    add();
})

// validation des champs
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const moyenne = document.getElementById('moyenne');
    const form = document.getElementById('form');
    
    form.addEventListener('keyup', () => {
    
        let nom = document.getElementById('nom').value;
        let prenom = document.getElementById('prenom').value;
        let moyenne = document.getElementById('moyenne').value;
        
        document.getElementById('nom').setAttribute("class", "invalid");
        document.getElementById('prenom').setAttribute("class", "invalid");
        document.getElementById('moyenne').setAttribute("class", "invalid");
    
        button.setAttribute('disabled', '');
for(let i=0;i<nom.length;i++)
    {
        if(/[a-zA-Z]/.test(nom[i])==false)
        {
            document.getElementById("error").innerHTML="les chiffres et caracteres speciaux ne sont pas autorises"
            return;
        }
    }
        if (nom.length < 3) {
            document.getElementById('nom').style.border = '1px solid red';
            document.getElementById('nom').style.color = 'red';
            document.getElementById('error').style.color = 'red';
            document.getElementById('error').innerHTML = 'nom doit contenir au moins 3 caractères';
            return;
        }else{
            document.getElementById('nom').setAttribute("class", "valid");
            document.getElementById('nom').style.border = '2px solid green';
            document.getElementById('nom').style.color = '';
            document.getElementById('error').innerHTML = '';
        }
        
        if (prenom.length < 3) {
            document.getElementById('prenom').style.border = '1px solid red';
            document.getElementById('prenom').style.color = 'red';
            document.getElementById('error').style.color = 'red';
            document.getElementById('error').innerHTML = 'prenom doit contenir au moins 3 caractères';
            return;
        }else{
            document.getElementById('prenom').setAttribute("class", "valid");
            document.getElementById('prenom').style.border = '2px solid green';
            document.getElementById('prenom').style.color = '';
            document.getElementById('error').innerHTML = '';
        }

        if (moyenne === '' || moyenne < 0 || moyenne > 20) {
            document.getElementById('moyenne').style.border = '2px solid red';
            document.getElementById('moyenne').style.color = 'red';
            document.getElementById('error').style.color = 'red';
            document.getElementById('error').innerHTML = 'moyenne doit être entre 0 et 20';
            return;
        }else{
            document.getElementById('moyenne').setAttribute("class", "valid");
            document.getElementById('moyenne').style.border = '2px solid green';
            document.getElementById('moyenne').style.color = '';
            document.getElementById('error').innerHTML = '';
        }
        button.removeAttribute('disabled');
    })    


