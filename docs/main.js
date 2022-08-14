(() => {
    let e = "";
    window.onload = function () {
        async function t() {
            ! function () {
                fetch("https://api.thedogapi.com/v1/breeds").then((e => e.json())).then((e => {
                    this.data = e
                }))
            }(), e = "";
            let t = await fetch("https://web2-courseproject-retake.herokuapp.com/dogs");
            (await t.json()).forEach((t => {
                e += `<div class="row dog dogCard" \n            id="${t._id}"> \n            <div class="col-10">\n                <img src="./images/dog.jpg" class="cardImg" alt="Girl in a jacket" width="250" height="180">\n                <p><h3>${t.name}</h3> ${t.generation} - ${t.breed}</p>\n            </div>\n            \n            </div>\n            \n        </div>`
            })), document.getElementById("dogList").innerHTML = e
        }
        document.getElementById("uploadForm").addEventListener("submit", (e => {
            e.preventDefault(), async function (e) {
                let n = document.getElementById("name").value,
                    o = document.getElementById("generation").value,
                    a = document.getElementById("breed").value;
                fetch("https://web2-courseproject-retake.herokuapp.com/dogs", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: n,
                        generation: o,
                        breed: a
                    })
                }).then((e => e.json())).then((async e => {
                    console.log("Success:", e), await t()
                }))
            }()
        })), document.getElementById("dogList").addEventListener("click", (e => {
            const t = e.target.closest(".dog").id;
            console.log(e.target), t && (-1 !== e.target.className.indexOf("edit") && console.log("edit"), -1 !== e.target.className.indexOf("trash") && console.log("trash"), -1 !== e.target.className.indexOf("heart") && console.log("favorite"))
        })), t()
    }, $.get("https://dog.ceo/api/breeds/list/all", (e => {
        const t = e.message;
        console.log(e.message);
        const n = document.getElementById("breed");
        for (const e in t)
            if (t.hasOwnProperty(e)) {
                const t = document.createElement("option");
                t.value = e, t.innerHTML = e, n.appendChild(t)
            }
    }))
})();