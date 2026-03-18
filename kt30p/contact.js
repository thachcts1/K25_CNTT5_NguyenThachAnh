const form = document.getElementById("contact-form");
const tbody = document.getElementById("contact-tbody");

const ten = document.getElementById("contact-name");
const sdt = document.getElementById("contact-phone");
const email = document.getElementById("contact-email");

const nut = document.querySelector(".btn-add");

let danhSach = [];
let viTriSua = -1;

function layDuLieuBanDau() {
  const rows = tbody.querySelectorAll("tr");

  for (let i = 0; i < rows.length; i++) {
    const cols = rows[i].querySelectorAll("td");

    let obj = {
      ten: cols[1].innerText,
      sdt: cols[2].innerText,
      email: cols[3].innerText
    };

    danhSach.push(obj);
  }
}

function kiemTra(tenVal, sdtVal, emailVal) {

  if (tenVal === "") {
    alert("Họ tên không được để trống!");
    return false;
  }

  if (tenVal.length < 2) {
    alert("Họ tên phải có ít nhất 2 ký tự!");
    return false;
  }

  let regexTen = /^[a-zA-ZÀ-ỹ\s]+$/;
  if (!regexTen.test(tenVal)) {
    alert("Họ tên không hợp lệ!");
    return false;
  }

  if (sdtVal === "") {
    alert("Số điện thoại không được để trống!");
    return false;
  }

  let regexSdt = /^(0|\+84)[0-9]{9,10}$/;
  if (!regexSdt.test(sdtVal)) {
    alert("Số điện thoại không hợp lệ!");
    return false;
  }

  if (emailVal === "") {
    alert("Email không được để trống!");
    return false;
  }

  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(emailVal)) {
    alert("Email không hợp lệ!");
    return false;
  }

  // kiểm tra trùng email khi thêm
  if (viTriSua === -1) {
    for (let i = 0; i < danhSach.length; i++) {
      if (danhSach[i].email === emailVal) {
        alert("Email đã tồn tại!");
        return false;
      }
    }
  }

  return true;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let tenVal = ten.value.trim();
  let sdtVal = sdt.value.trim();
  let emailVal = email.value.trim();

  if (!kiemTra(tenVal, sdtVal, emailVal)) return;

  let obj = {
    ten: tenVal,
    sdt: sdtVal,
    email: emailVal
  };

  if (viTriSua === -1) {
    danhSach.push(obj);
    alert("Thêm liên hệ thành công!");
  } else {
    danhSach[viTriSua] = obj;
    viTriSua = -1;
    nut.textContent = "Thêm";
    alert("Cập nhật liên hệ thành công!");
  }

  form.reset();
  hienThi();
});

function hienThi() {
  tbody.innerHTML = "";

  if (danhSach.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="empty-state">
          <p>Chưa có dữ liệu</p>
        </td>
      </tr>
    `;
    return;
  }

  for (let i = 0; i < danhSach.length; i++) {
    let db = danhSach[i];

    let row = `
      <tr>
        <td>${i + 1}</td>
        <td>${db.ten}</td>
        <td>${db.sdt}</td>
        <td>${db.email}</td>
        <td>
          <div class="action-buttons">
            <button class="btn-edit" onclick="sua(${i})">Sửa</button>
            <button class="btn-delete" onclick="xoa(${i})">Xóa</button>
          </div>
        </td>
      </tr>
    `;

    tbody.innerHTML += row;
  }
}

function xoa(index) {
  if (confirm("Bạn có chắc muốn xóa không?")) {
    danhSach.splice(index, 1);
    alert("Xóa liên hệ thành công!");
    hienThi();
  }
}

function sua(index) {
  let db = danhSach[index];

  ten.value = db.ten;
  sdt.value = db.sdt;
  email.value = db.email;

  viTriSua = index;
  nut.textContent = "Cập nhật";
}

layDuLieuBanDau();
hienThi();~