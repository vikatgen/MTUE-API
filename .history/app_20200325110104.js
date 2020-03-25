// http://andmebaas.stat.ee/sdmx-json/data/PA633/74+DBL113+DBL200+DBL245+DBL432.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions

let occupations = {
  DBL200: { name: "Fotograaf", rate: 0 },
  DBL432: { name: "Köögiabiline", rate: 0 },
  74: { name: "Kutseõpetaja", rate: 0 },
  DBL113: { name: "Psühholoog", rate: 0 },
  DBL245: { name: "Kokk", rate: 0 }
};

fetch(
  "http://andmebaas.stat.ee/sdmx-json/data/PA633/74+DBL113+DBL200+DBL245+DBL432.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions"
)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
