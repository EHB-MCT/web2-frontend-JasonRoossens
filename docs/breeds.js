(async()=>{const e=await fetch("https://api.thedogapi.com/v1/breeds");(e=>{const t=document.querySelector(".breed-select");e.map((e=>{const t=document.createElement("option");return t.text=e.name,t.value=e.id,t})).forEach((e=>{t.appendChild(e)}))})(await e.json())})();