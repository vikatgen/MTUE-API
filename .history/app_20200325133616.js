// http://andmebaas.stat.ee/sdmx-json/data/PA633/74+DBL113+DBL200+DBL245+DBL432.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions

let occupations = {
  DBL200: { name: "Fotograaf", rate: 0 },
  DBL432: { name: "Köögiabiline", rate: 0 },
  74: { name: "Kutseõpetaja", rate: 0 },
  DBL113: { name: "Psühholoog", rate: 0 },
  DBL245: { name: "Kokk", rate: 0 }
};

const occupationSelect = document.querySelector("#occupation-select");
const hourInput = document.querySelector("#hour-input");

for (const key in occupations) {
  let option = document.createElement("option");
  option.value = key;
  option.text = occupations[key].name;
}

fetch(
  "http://andmebaas.stat.ee/sdmx-json/data/PA633/74+DBL113+DBL200+DBL245+DBL432.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions"
)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);

    data.structure.dimensions.observation[0].values.forEach((el, i) => {
      console.log(el.id);
      const key = i + ":0:0:0";
      const occupationRate = data.dataSets[0].observations[key][0];
      occupations[el.id].rate = occupationRate;
    });
    console.log(occupations);
  });
