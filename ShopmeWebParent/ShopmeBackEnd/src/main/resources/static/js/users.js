let baseUrl = window.location.origin+"/ShopmeAdmin/users";

$(document).ready(function () {
    getUsers();
    $('#btn-save').click(function (e) {
        saveUser();
    })

})

function getUsers() {
    $.ajax({
        url: baseUrl + "/list",
        type: "GET",
        dataType: "json",
        success: function (data) {
            let tableBody = $('#userTable tbody');
            if (data.length !== 0) {
                tableBody.empty();
            }
            $.each(data, function (index, user) {
                tableBody.append('<tr><td>' +
                    user.id +
                    '</td><td></td><td>' +
                    user.email +
                    '</td><td>' +
                    user.firstName +
                    '</td><td>' +
                    user.lastName +
                    '</td><td>' +
                    user.firstName +
                    '</td><td>' +
                    user.roles +
                    '</td><td>' +
                    user.enabled +
                    '</td><td>' +
                    'Edit &nbsp; Delete' +
                    '</td>' + '</tr>'
                );
            });
        },
        error: function (error) {
            alert(error);
        }
    });
}


function saveUser() {
    let user = {};

    user.id = $('#id').val();
    user.email = $('#email').val();
    user.firstName = $('#firstName').val();
    user.lastName = $('#lastName').val();
    user.password = $('#password').val();
    user.roles = $('#roles').val();
    user.enabled = $('#enabled').val();

    let userJSON = JSON.stringify(user);

    $.ajax({
        url: baseUrl + "/save",
        type: "POST",
        data: userJSON,
        contentType: "application/json; charset=utf-8",
        success: function () {
            getUsers();
            $("#addModal").modal('hide');
        },
        error: function (error) {
            alert(error);
        }
    })
}