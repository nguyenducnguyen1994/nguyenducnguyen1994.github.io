const API = "http://localhost:3000/users";


// lấy dữ liệu đổ vào bảng.
$(function () {
    $.ajax({
        url: API,
        method: "GET",
    })
        .done(function (dataUsers) {
            htmlString = "";
            for (let i = 0; i < dataUsers.length; i++) {
                htmlString += `<tr>
                        <td>${dataUsers[i].name}</td>
                        <td>${dataUsers[i].birthday}</td>
                        <td>${dataUsers[i].email}</td>
                        <td>${dataUsers[i].phone}</td>
                        <td class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-info" data-toggle="modal" data-target="#form-edit"  onclick="renderInfoUser(${dataUsers[i].id})"><i class="far fa-edit"> Chỉnh sửa</i></button><span>|</span>
                            <button class="btn btn-danger" data-toggle="modal" data-target="#modal-delete"><i class="far fa-trash-alt" onclick="renderInfoUser(${dataUsers[i].id})"> Xóa</i></button>
                        </td>
                </tr>`;
            }
            $('#list-users').html(htmlString);
        });
});


// Tạo mới user
function createUserAPI(user) {
    $.ajax({
        method: 'POST',
        url: API,
        data: user
    }).done(function () {
        location.reload();
    })
}
// Lấy dữ liệu ô input
function createUser() {
    const user = {
        name: $('#name').val(),
        birthday: $('#year').val(),
        email: $('#email').val(),
        phone: $('#phone').val()
    }
    createUserAPI(user);
}


// gửi request lên server lấy thông tin id
function renderInfoUser(id) {
    $.ajax({
        method: "GET",
        url: API + "/" + id,
    }).done(function (item) {
        if (renderContentEdit) {
            renderContentEdit(item);
        }
        if (renderContentDelete) {
            renderContentDelete(item);
        }
    });
}

// Xóa thông tin user
function renderContentDelete(item) {
    // Tạo nút xóa và gán sự kiện xóa (truyền vào id của user)
    let btnDelete = "";
    btnDelete += `<button type="button" onclick="deleteUserApi(${item.id})" class="btn btn-danger"><i class="far fa-trash-alt"></i> Xóa</button>`;
    $(".btn-delete").html(btnDelete);
}

function deleteUserApi(id) {
    $.ajax({
        method: "DELETE",
        url: API + "/" + id,
        dataType: "json",
    }).done(function () {
        // Load lại table
        location.reload();
        // Tắt modal
        $("#modal-delete").modal("hide");
    });
}




// Chỉnh sửa user
function renderContentEdit(item) {
    // Lấy thông tin user cần update
    $("#editName").val(item.name);
    $("#editBirthday").val(item.birthday);
    $("#editEmail").val(item.email);
    $("#editPhone").val(item.phone);

    // Render button lưu và ván sự kiện
    let btnUpdate = "";
    btnUpdate +=
        ' <button type="button" onclick="editInfoUserApi(' +
        item.id +
        ')"  class="btn btn-primary"><i class="far fa-save"></i> Lưu</button>';
    $(".btn-update-user").html(btnUpdate);
}


// Lấy thông tin đã chỉnh sửa lưu lại vào bảng
function editInfoUserApi(id) {
    $.ajax({
        method: "PUT",
        url: API + "/" + id,
        contentType: "application/json",
        data: JSON.stringify({
            name: $("#editName").val(),
            birthday: $("#editBirthday").val(),
            email: $("#editEmail").val(),
            phone: $("#editPhone").val(),
        }),
    }).done(function () {
        // Load lại table
        location.reload();
        // Ẩn modal update
        $("#form-edit").modal("hide");
    });
}

