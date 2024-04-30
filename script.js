const button = document.getElementById('btnpergunta')


const consultaGemini = (question) => {

    const keyGoogle = 'AIzaSyBZaybh57iVi23jcLvzuIrabNG4f3td60A'

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + keyGoogle;


    const requestData = {
        contents: [
            {
                parts: [
                    {
                        text: `${question}`
                    }
                ]
            }
        ]
    }

    const requestOptions = {
        method:'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(requestData)
    }

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        const responseTextIa = data.candidates[0].content.parts[0].text
        respostaIa(responseTextIa)
    })
    .catch(error => console.error('Error: ', error))
}


const respostaIa = (responseTextIa) => {
    const textAreaPt = document.getElementById('resposta')
    textAreaPt.value = responseTextIa
}


button.addEventListener('click', () => {
    const question = document.getElementById('pergunta').value
    consultaGemini(question)
})



//PARTE DA TRADUÇÃO

//pergunta placeholder onde vai a pergunta
//resposta lugar da resposta


// const resposta = document.querySelector("#resposta");
// const resposta = document.querySelector("#resposta");
// const btntraduzir = document.querySelector("#btntraduzir");
// const selects = document.querySelectorAll("select");


// const countries = {
//   "en-GB": "Inglês",
//   "pt-BR": "Português",
// };


// selects.forEach((tag) => {
//   for (let country in countries) {
//     let selected;
//     if (tag.className.includes("selectFrom") && country == "pt-BR") {
//       selected = "selected";
//     } else if (tag.className.includes("selectTo") && country == "en-GB") {
//       selected = "selected";
//     }

//     const option = `<option value="${country}" ${selected}>${countries[country]}</option>`;

//     tag.insertAdjacentHTML("beforeend", option);
//   }
// });


// btntraduzir.addEventListener("click", () => {
//   if (textareaFrom.value) {
//     loadTranslation();
//   } else {
//     resposta.value = "";
//   }
// });


// function loadTranslation() {
//   fetch(
//     `https://api.mymemory.translated.net/get?q=${textareaFrom.value}&langpair=${selects[0].value}|${selects[1].value}`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//         resposta.value = data.responseData.translatedText;
//     });
// }