$("#receive").click(() => {
    $.ajax({
        url: '/survey',
        method: 'POST',
        success: (data) => {

            $.each(data, function (index, value) {
                let type = $('#' + index).prop("type")
                if (type === "checkbox") $('#' + index).prop('checked', true);
                else if(index === "radio") $('#' + value).prop('checked', true);
                else if(type === "select-one") $('#' + index).prepend('<option>' + value + '</option>');
                else  $('#' + index).val(value)
            });
            console.log("Показан первоначальный массив");
        },
        error: () => {
            console.log("Произошла ошибка");
        },
    });
});