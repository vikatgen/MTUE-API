// http://andmebaas.stat.ee/sdmx-json/data/PA633/74+DBL113+DBL200+DBL245+DBL432.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions

fetch(
  "http://andmebaas.stat.ee/sdmx-json/data/PA633/74+DBL113+DBL200+DBL245+DBL432.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions"
).then(response => {
  console.log(response);
});
