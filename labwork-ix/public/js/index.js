$(document).ready(function () {
    $('#addBtn').click(function () {
        $.ajax({
            url: "/",
            method: "POST",
            data: {
                sender: $("#sender").val(),
                receiver: $("#receiver").val(),
                date: $("#date").val(),
                type: $("#type").is(':checked'),
                id: id
            },
            success: () => {
                console.log("Данные успешно отправлены");
            },
            error: () => {
                console.log("Произошла ошибка");
            },
        })
    })
    $('#removeBtn').click(function () {
        let checkboxes = []
        $("input[name='delete-letter']").each(function () {
            if ($(this).is(":checked")) {
                checkboxes.push($(this).val())
            }
        })
        if (checkboxes.length !== 0) {
            if (checkboxes.length === 1) {
                $.ajax({
                    url: "/remove",
                    method: "POST",
                    data: {
                        position: checkboxes,
                    },
                    success: () => {
                        location.reload()
                    },
                    error: () => {
                        console.log("Произошла ошибка");
                    },
                })
            } else {

                $.ajax({
                    url: "/remove",
                    method: "POST",
                    data: {
                        positions: checkboxes,
                    },
                    success: () => {
                        location.reload()
                    },
                    error: () => {
                        console.log("Произошла ошибка");
                    },
                })

            }
        }

    })
    $('#updateBtn').click(function () {
        let id = ""
        $("input[name='update-letter']").each(function () {
            if ($(this).is(":checked")) {
                id = $(this).val()
            }
        })
        if (id === "") return

        window.location.href = '/update?id=' + id;

    })
    $('#filterBtn').click(() => {
        let date = $('#dateFilter').val()
        if (date) {
            $.ajax({
                url: "/filterByDate",
                method: "POST",
                data: {
                    date: date
                },
                success: (data) => {

                    let select = $('#displaySenders')
                    if (data != "") {
                        let senders = ""
                        data.forEach(sender => senders += "<option>" + sender + "</option>")
                        select.html(senders)
                        select.removeClass("display-none")
                    } else {
                        select.html("")
                        select.addClass("display-none")
                    }
                },
                error: () => {
                    console.log("Произошла ошибка");
                },
            })
        }
    })
    $('#filterTypeBtn').click(() => {
        let type = $('#typeFilter').is(':checked')
        $.ajax({
            url: "/filterByType",
            method: "POST",
            data: {
                type: type
            },
            success: (data) => {

                let select = $('#displayReceivers')
                if (data != "") {
                    let receivers = ""
                    data.forEach(receiver => receivers += "<option>" + receiver + "</option>")
                    select.html(receivers)
                    select.removeClass("display-none")
                } else {
                    select.html("")
                    select.addClass("display-none")
                }
            },
            error: () => {
                console.log("Произошла ошибка");
            },
        })

    })
})

const params = new URLSearchParams(window.location.search);
let id = params.get('id')
if (id) {
    $.ajax({
        url: "/update",
        method: "POST",
        data: {
            id: id,
        },
        success: (data) => {
            $("#sender").val(data.sender)
            $("#receiver").val(data.receiver)
            $("#date").val(data.date)
            if (data.type) $("#type").prop('checked', true);
        },
        error: () => {
            console.log("Произошла ошибка");
        },
    })
}