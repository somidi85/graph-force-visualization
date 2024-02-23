// read a CSV file and parse it with d3.csvParse
import * as d3 from "d3";

export async function csv2tree(csvFile) {
  // read the input csv file and parse it
  const data = await fetch(csvFile)
    .then((response) => response.text())
    .then((text) => {
      d3.csvParse(text);
    });

  return data;
}

// Path: components/graph/basic-tree-topology.js
