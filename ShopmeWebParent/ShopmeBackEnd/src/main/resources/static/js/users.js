let baseUrl = window.location.origin+"/ShopmeAdmin";

$(document).ready(function () {
    getUsers();
    $('#btn-save').click(function (e) {
        saveUser();
    });
});



function getUsers() {
    $.ajax({
        url: baseUrl + "/save",
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
                    user.roles +
                    '</td><td>' +
                    user.enabled +
                    '</td><td>' +
                    'Edit &nbsp; Delete' +
                    '</td>' + '</tr>'
                );
             })
        },
        error: function (error) {
            alert(error);
        }
    })
}




function saveUser() {

    let user = {};
    let roles1 = [];

    $("input:checkbox[name=roles]:checked").each(function(){

        let objRoles = {};

        objRoles['id'] = $(this).val();
        objRoles['name'] = $(this).attr('id');
        roles1.push(objRoles);

    });


   // user.id = $('#id').val();
    user.email = $('#email').val();
    user.firstName = $('#firstName').val();
    user.lastName = $('#lastName').val();
    user.password = $('#password').val();
    user.roles = roles1;
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

// function get_selected_checkboxes_array(){
//
//     let roleArray=[];
//
//     $("input:checkbox[name=roles]:checked").each(function(){
//         roleArray.push( $(this).val() );
//     });
//
//
//
//     return roleArray;
// }