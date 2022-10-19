let table = document.querySelector("#mytable");
let output = "";
for (let i = 0; i <= 10; i++) {
  output += "<tr>";
  for (let j = 0; j <= 10; j++) {
    if (i === 0 && j === 0) {
      output += "<th> </th>";
    } else if (i === 0) {
      output += "<th>" + j + "</th>";
    } else if (j === 0) {
      output += "<th>" + i + "</th>";
    } else if (i > 0 && j > 0) {
      output += "<td>" + i * j + "</td>";
    }
  }
  output += "</tr>";
}
table.innerHTML = output;
