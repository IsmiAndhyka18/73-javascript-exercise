/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var myElement = document.getElementById("target");

    // create elemnts for table in body  elment
    
    var myTable = document.createElement("table");
    var tableBody = document.createElement("tBody");
    

    //create elements for row 


    for (var i=0; i < 10 ; i++){
        var row = document.createElement("tr");

        var cell = document.createElement("td");
        row.appendChild(cell);
        tableBody.appendChild(row);

        for (var j = 0; j < 9; j++) {
        var cell = document.createElement("td");
        row.appendChild(cell);
        tableBody.appendChild(row);


        }
      


    }

    myTable.appendChild(tableBody);
    myElement.appendChild(myTable);

    

})();
