function deleteValue(){
    var select = document.getElementById("select")

    var option = document.createElement('option');
    option.value = select.value;
    document.getElementById("datalist").appendChild(option)

    var table = document.getElementById("table")
    var tr = document.createElement('tr');
    var index = select.selectedIndex
    index += 1
    tr.innerHTML = "<td>" + table.rows.length + "</td>" + "<td>" + select.value + "</td>" + "<td>" + index + "</td>";
    table.append(tr);

    select.options[select.selectedIndex].remove()
}

function insertValue(){
    var select = document.getElementById("select")
    var value = document.getElementById("newEl").value

    var option = document.createElement("option");
    option.text = value;

    if(select.childElementCount <= 2) select.add(option)
    else select[1].after(option)

}

function showValue()
{
    var table = document.getElementById("table")

    table.className = ""
    switch(document.getElementById("select-style").value)
    {
        case "1": table.classList.add("first"); break;
        case "2": table.classList.add("second"); break;
        case "3": table.classList.add("third"); break;
    }
    var div = document.getElementById("deleted-area")
    div.classList.remove("display-none")

}

