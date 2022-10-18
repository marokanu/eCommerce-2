$(function() {
    $("#userList").click(function() {
        fetchList("user");
    });

});

function addForm(type) {
    modifyData(type+"/form");
}

function editForm(type, id) {
    modifyData(type+"/edit/"+id);
}

function fetchList(type) {
    modifyData(type+"/list");
}

function modifyData(suffix) {
    $.ajax({
        type : "GET",
        url : "/ShopmeAdmin/"+suffix,
        success : function(data) {
            $(".users.js").html(data);
        }
    });
}