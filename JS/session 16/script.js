const listEmployees = [];

let inputName = document.getElementById("fullName");
let inputEmail = document.getElementById("email");
let inputBirthDay = document.getElementById("dateOfBirth");
let inputPos = document.getElementById("position");
let buttonAdd = document.getElementById("submit-btn");
let errorFullName = document.getElementById("error-fullName");
let errorEmail = document.getElementById("error-email");
let errorBirthDay = document.getElementById("error-dateOfBirth");
let errorPosition = document.getElementById("error-position");
let buttonConfirmUpdate = document.getElementById("submit-update")
let buttonCancel = document.getElementById("cancel-edit-btn");
let numOfEmployees= document.getElementById("footer-count")


const renderEmployees = () => {
  let list = document.getElementById("employee-tbody");
    list.innerHTML=""
  listEmployees.forEach((el) => {
    let tr = document.createElement("tr");

    tr.innerHTML = `
                <td>${el.id}</td>
                <td>${el.name}</td>
                <td>${el.email}</td>
                <td>${el.birthDay}</td>
                <td>${el.position}</td>
                <td><button class="btn-edit btn btn-sm" onclick="updateEmployee(${el.id})">Sửa</button> <button class="btn-delete btn btn-sm" onclick="deleteEmployee(${el.id})">Xóa</button></td>
                `;
    list.appendChild(tr)
  });
};


let idOrigin = 0;
const addEmployee = () => {
  errorFullName.innerText = "";
  errorEmail.innerText = "";
  errorBirthDay.innerText = "";
  errorPosition.innerText = "";
  if (inputName.value == "") {
    errorFullName.innerText = "Họ và tên không được để trống";
  }
  let arrayValueEmail = inputEmail.value.split("@");
  let validEmail = true;
  if (inputEmail.value == "") {
    errorEmail.innerText = "Email không được để trống";
  } else if (arrayValueEmail[1] != "gmail.com" || arrayValueEmail[0] == "") {
    errorEmail.innerText = "Email không hợp lệ";
    validEmail = false;
  } else if (inputEmail.value.includes(" ")) {
    errorEmail.innerText = "Email không hợp lệ";
    validEmail = false;
  } else {
    errorEmail.innerText = "";
  }
  let yearInput = inputBirthDay.value.split("-")[0];
  let yearCurrent = new Date().getFullYear() - yearInput;
  let validYear = true;
  if (inputBirthDay.value == "") {
    errorBirthDay.innerText = "Ngày sinh không được để trống";
    validYear = false;
  } else if (yearCurrent < 0) {
    errorBirthDay.innerText = "Ngày sinh không hợp lệ";
    validYear = false;
  } else if (yearCurrent < 18) {
    errorBirthDay.innerText = "Chưa đủ 18 tuổi";
    validYear = false;
  }
  if (inputPos.value == "") {
    errorPosition.innerText = "Chức vụ không được để trống";
  }

  if (inputPos.value != "" && inputBirthDay.value != "" && inputEmail.value != "" && inputName.value != "" && validEmail && validYear
  ) {
    idOrigin++;
    let employee = {
      id: idOrigin,
      name: inputName.value,
      email: inputEmail.value,
      birthDay: inputBirthDay.value.split("-").reverse().join("/"),
      position: inputPos.value,
    };
    listEmployees.push(employee);
    inputName.value = ""
    inputEmail.value = ""
    inputBirthDay.value = ""
    inputPos.value = ""
    renderEmployees();
  }
  statisticsEmployees()
};

buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();
  addEmployee();
});


    const updateEmployee=(idUpdate)=>{
        let indexUpdate=listEmployees.findIndex((employee)=>{
            return employee.id==idUpdate
        })
        inputName.value=listEmployees[indexUpdate].name
        inputEmail.value=listEmployees[indexUpdate].email
        inputBirthDay.value=listEmployees[indexUpdate].birthDay.split("/").reverse().join("-")
        inputPos.value=listEmployees[indexUpdate].position
        buttonConfirmUpdate.style.display="inline"
        buttonAdd.style.display="none"
        buttonCancel.style.display="inline"

        buttonConfirmUpdate.addEventListener("click",(e)=>{
            e.preventDefault()
            listEmployees[indexUpdate].name=inputName.value
            listEmployees[indexUpdate].email=inputEmail.value
            listEmployees[indexUpdate].birthDay=inputBirthDay.value.split("-").reverse().join("/")
            listEmployees[indexUpdate].position=inputPos.value
            inputName.value = ""
            inputEmail.value = ""
            inputBirthDay.value = ""
            inputPos.value = ""
            buttonConfirmUpdate.style.display="none"
            buttonAdd.style.display="inline"
            buttonCancel.style.display="none"
            renderEmployees()
        })
        buttonCancel.addEventListener("click",()=>{
            inputName.value = ""
            inputEmail.value = ""
            inputBirthDay.value = ""
            inputPos.value = ""
            buttonConfirmUpdate.style.display="none"
            buttonAdd.style.display="inline"
            buttonCancel.style.display="none"
            renderEmployees()
        })
        statisticsEmployees()
    }

    const deleteEmployee=(idDelete)=>{
        let indexDelete=listEmployees.findIndex((employee)=>{
            return employee.id===idDelete
        })
        if(confirm(`Bạn có chắc muốn xóa nhân viên ${listEmployees[indexDelete].name} không?`)){
            listEmployees.splice(indexDelete,1)
            renderEmployees()
        }else{
            alert("Đã hủy xóa")
        }
        statisticsEmployees()
    }
    const statisticsEmployees=()=>{
        let totalEmployees=listEmployees.length
        numOfEmployees.innerText=`Tổng số nhân viên: ${totalEmployees}`
    }