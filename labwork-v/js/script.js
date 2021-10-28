

var db = openDatabase('BuildingTools','1.0','test',200000)
db.transaction((tx) => {
    tx.executeSql('CREATE TABLE BuildingTools (ID INTEGER primary key , name TEXT NOT NULL, price REAL NOT NULL, weight REAL NOT NULL)', [])
}, err => console.error("Не могу создать базу!", err), () =>  console.error("могу создать базу!"));






function insertValue()
{
    hideTable()

    var newTools = new BuildingTools(document.getElementById("name").value,
        document.getElementById("price").value,
        document.getElementById("weight").value)
    var map = new Map()
    map.set(1, newTools)
    if(document.cookie === "") {

        db.transaction((tx) => {
                tx.executeSql('INSERT INTO BuildingTools (name, price, weight) VALUES (?, ?, ?);', [map.get(1).name, map.get(1).price, map.get(1).weight])
            },
            () => alert("ошибка добавления"),
            () => alert("запись успешно добавлена1"))
    }
else
    {

        map.get(1).customerAddress = document.getElementById("customerAddress").value

        db.transaction((tx) => {
                tx.executeSql('INSERT INTO BuildingTools (name, price, weight, customerAddress) VALUES (?, ?, ?, ?);', [map.get(1).name, map.get(1).price, map.get(1).weight, map.get(1).customerAddress])
            },
            () => alert("ошибка добавления"),
            () => alert("запись успешно добавлена2"))
    }

    addOption()

}
function addOption() {

    var index = document.getElementById("number")

    db.transaction(function (tx) {
        tx.executeSql('SELECT MAX(ID) FROM BuildingTools', [], function (tx, result) {


            var option = document.createElement('option');
            option.text = result.rows.item(0)["MAX(ID)"];
            index.add(option);

        }, () => alert("ошибка выборки"))
    })
}
function fillSelect() {

    var index = document.getElementById("number")


    db.transaction(function (tx) {
        tx.executeSql('SELECT ID FROM BuildingTools', [], function (tx, result) {
            var len = result.rows.length;
            if(len !== 0) {
                for (i = 0; i < len; i++) {

                    var option = document.createElement('option');
                    option.text = result.rows.item(i).ID;
                    index.add(option)


                }
            }
        }, () => alert("ошибка выборки"))
    })
}

function showTable()
{
    hideTable()
    addOption()
    var table = document.getElementById("table")

    while(table.rows.length !== 1)  table.deleteRow(1);


    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM BuildingTools', [], function(tx, result) {
            var len = result.rows.length;
            for (i = 0; i < len; i++) {
                var tr = document.createElement('tr');

                tr.innerHTML = "<td>" + result.rows.item(i).ID + "</td>" + "<td>" + result.rows.item(i).name
                    + "</td>" + "<td>" + result.rows.item(i).price + "</td>" + "<td>" + result.rows.item(i).weight + "</td>";
                if(document.cookie !== "" && result.rows.item(i).customerAddress)
                {
                    tr.innerHTML += "<td>" + result.rows.item(i).customerAddress + "</td>"
                }
                table.append(tr)
            }
        }, () => alert("ошибка выборки"))
        });

        document.getElementById("data").classList.remove("display-none")


}

function hideTable() {
    document.getElementById("data").classList.add("display-none")
    var table = document.getElementById("table")
    var rowCount = table.rows.length;
    while (rowCount !== 1) table.deleteRow(1);
}

fillSelect()


function deleteValue()
{
    hideTable()
    var id = document.getElementById("number").value
    if(id === "") return
    db.transaction((tx) => { tx.executeSql('DELETE FROM BuildingTools where ID = ?', [id])  },
        () => alert("ошибка удаления"),
        () => alert("запись успешно удалена"))

    var number = document.getElementById("number")
    while(number.options.length !== 0) number.options.remove(0)
    fillSelect()

}

function clearForm()
{
    hideTable()

    document.getElementById("name").value = ""
    document.getElementById("price").value = ""
    document.getElementById("weight").value = ""
}
function showMinWeight()
{
    db.transaction(function (tx) {
        tx.executeSql('SELECT MIN(weight), name FROM BuildingTools', [], function (tx, result) {
            if(result.rows.item(0)["MIN(weight)"] === null) return
            alert("инструмент с минимальным весом " + result.rows.item(0)["MIN(weight)"] +
                "кг имеет название " + result.rows.item(0)["name"])

        }, () => alert("ошибка выборки"))
    })
}
function addCustomerAddress()
{
    db.transaction((tx) => { tx.executeSql('ALTER TABLE BuildingTools ADD customerAddress TEXT NULL', [])  },
        () => alert("ошибка изменения таблицы"),
        () => {
        alert("таблица успешно изменена")
            document.cookie = "address=1; expires=Tue, 19 Jan 2038 03:14:07 GMT"
            addTableColumn()
        })
}

function  addTableColumn()
{
    document.getElementById("customerAddress").hidden = false
    var table = document.getElementById("table")
    var tr = document.createElement('tr');
    tr.innerHTML = "<th>ID</th><th>name</th><th>price</th><th>weight</th><th>customer address</th>";
    table.rows.item(0).before(tr)
    table.deleteRow(1)

   // hideTable()


}
