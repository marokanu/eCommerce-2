let isNew = true;
let studId = null;


    getall();

    function addStudent()
    {

        if($("#userTable").valid())
    {
        let url = "";
        let data = "";
        let method;


        if(isNew == true)
    {
        url = contextPath + "User/save";
        data = $("#userTable").serialize();
        method = 'POST'
    }

        $.ajax({

        type: method,
        url : url,
        dataType : "JSON",
        data : data,

        success:function(data)
    {
        $('#email').val("");
        $('#fistName').val("");
        $('#lastName').val("");
        $('#roles').val("");
        $('#enabled').val("");
        console.log(data);
        getall();

        if(data.status === "success")
    {
        alert("Record Added");
    }
        else
    {
        alert("Error");
    }


    }

    });

    }



    }


    function getall()
    {
        $('#userTable').dataTable().fnDestroy();
        $.ajax({

        url: contextPath + "User/list",
        type: "GET",
        dataType: "JSON",
        success:function(data)
    {
        $("#userTable").dataTable({
        "data": data,
        "columns": [
    { data: 'E-mail' },
    { data: '' },
    { data: 'fee' },
    {
        data: null,
        render : function(data, type, full, meta)
    {
        return '<button class="btn btn-success" onclick="get_details('+ data.id  + ')">Edit</button>';
    }
    },
    {
        data: null,
        render : function(data, type, full, meta)
    {
        return '<button class="btn btn-danger" onclick="get_Delete('+ data.id  + ')">Delete</button>';
    }
    }

        ]
    });
    }
    });

    }
