
let list = (search) => {
    let url = "https://restcountries.com/v3.1/all";
    let searchValue = document.getElementById('searchInput').value;

    if (search) {
        url = `https://restcountries.com/v3.1/name/${searchValue}`
    }


    fetch(url, {
        method: "GET"
    })
        .then((response) => response.json())
        .then((data) => {

            let html = "";
            let row = document.querySelector(".row");
            for (let index = 0; index < data.length; index++) {
                const country = data[index];
                //nome = country.translations.bre.common
                //imagem = country.flags.png
                //região = country.region
                //população = country.population

                html += `
                    <div class="col-4">
                        <div class="card mb-5" style="width: 18rem;">
                            <img src="${country.flags.png}" class="card-img-top" alt="bandeira">
                            <div class="card-body">
                            <h5 class="card-title">${country.translations.por.common}</h5>

                            <p class="card-text">
                                Região: ${country.region}
                            </p>

                            <p class="card-text">
                                População: ${country.population}
                            </p>

                            </div>
                        </div>
                    </div>
                    `
            }
            row.innerHTML = html;
            console.log(html);
        });
}

list();


