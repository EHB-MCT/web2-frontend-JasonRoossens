function fetchDogs() {

    fetch('https://api.thedogapi.com/v1/breeds')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.data = data;

        });
}

(() => {
    let e = "";
    window.onload = function () {
        async function n() {
            e = "";
            let n = await fetch("https://web2-courseproject-jason.herokuapp.com/dogs");
            (await n.json()).forEach((n => {
                e += `<div class="column show id="${n._id} ">   \n   <img src="./IMAGES/max.png" alt="Mountains" style="width:100%">\n         <h1>${n.name}</h1> <h2>${n.breed} - ${n.generation}</h2>\n     <button>wijzig</button>    <button>verwijder</button   </div>\n                          \n                 </div>`, `<div id="${n._id}">   \n   <img src="./IMAGES/max.png" alt="Mountains" style="width:100%">\n         <h1>${n.name}</h1> <h2>${n.breed} -${n.generation}</h2>\n            </div>\n           </div>`
            })), document.getElementById("challengeList").innerHTML = e
        }
        document.getElementById("uploadForm").addEventListener("submit", (e => {
            e.preventDefault(), async function (e) {
                let t = document.getElementById("name").value,
                    a = document.getElementById("generation").value,
                    s = document.getElementById("breed").value
                fetch("https://web2-courseproject-jason.herokuapp.com/dogs", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: t,
                        generation: a,
                        breed: s,
                    })
                }).then((e => e.json())).then((async e => {
                    console.log("Success:", e), await n()
                }))
            }()
        })), document.getElementById("challengeList").addEventListener("click", (e => {
            const n = e.target.closest(".challenge").id;
            console.log(e.target), n && (-1 !== e.target.className.indexOf("edit") && console.log("edit"), -1 !== e.target.className.indexOf("trash") && console.log("trash"))
        })), n(), fetchDogs();
    }
})();