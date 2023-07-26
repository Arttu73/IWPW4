import "./styles.css";

const submitButton = document.getElementById("submit-data");
const inputText = document.getElementById("input-show");
const url = "https://api.tvmaze.com/search/shows?q=";
const body = document.getElementById("body")

submitButton.addEventListener("click", async function() {

  const url2 = url + inputText.value;

  try {
    const dataPromise = await fetch(url2);
    const dataJSON = await dataPromise.json();

    dataJSON.forEach((data) => {
      const imgURL = data.show.image?.medium;
      const summary = data.show.summary;
      const title = data.show.name;
  
      const div1 = document.createElement("div");
      const img = document.createElement("img");
      const div2 = document.createElement("div");
      const h1 = document.createElement("h1");
      const summaryP = document.createElement("p");

      img.src = imgURL;
      div1.className = "show-data";
      div2.className = "show-info";
      h1.innerText = title;
      summaryP.innerHTML = summary;

      div1.appendChild(img);
      div2.appendChild(h1);
      div2.appendChild(summaryP);
      div1.appendChild(div2);

      body.appendChild(div1);


    });
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
});

