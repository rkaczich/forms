class EmployeeService {

  static init(){
    var myLocalStorage = window.localStorage;
    console.log(myLocalStorage);

  for (var key in myLocalStorage) {
    // hole json string aus local storage
    var employee = myLocalStorage.getItem(key);
    //console.log(employee);
    // parse json string to class Emplyee
    try {
      var empl = JSON.parse(employee);
      var newEmployee = new Employee(empl.id, empl.name, empl.email, empl.role);
      if(newEmployee instanceof Employee){
        console.log("JO Mitarbeiter wiederhergestellt");
         EmployeeService.createEmployeeLine(newEmployee);
      }
    } catch (e) {
      console.log(e);
    }
  }
  }


  static processForm(event){
    var empl = JSON.parse(window.localStorage.getItem(event.target.id));
    document.getElementById("id_dialog_name").value = empl.name;
  }

static createEmployeeLine(employee){
  var alle_zeilen = document.getElementById("userContent").innerHTML;
  var row = "<div id="+ employee.id +" class='row'>"+
     "<div class='col'>" + employee.id + "</div>"+
     "<div class='col'>" + employee.name + "</div>"+
     "<div class='col'>" + employee.email + "</div>"+
     "<div class='col'>" + employee.role + "</div>"+
     "<div class='col'>"+
        "<button class='button' onClick='EmployeeService.deleteEmployee(event)'><i id="+employee.id+" class='fa fa-trash'></i></button>"+
        "<button class='button' data-bs-toggle='modal' data-bs-target='#exampleModal' onClick='EmployeeService.processForm(event)'><i id="+employee.id+" class='fa fa-wrench'></i></button>"+
        "</div>"+
     "</div>"

     console.log(document);
  alle_zeilen = alle_zeilen + row;
  document.getElementById("userContent").innerHTML = alle_zeilen;
}

  static deleteEmployee(event){
    console.log("Event:"+event.target.id);

    var myLocalStorage = window.localStorage;
    myLocalStorage.removeItem(event.target.id);

    var idToDelete = event.target.id;
    var myobj = document.getElementById(idToDelete);
    myobj.remove();
  }

  static addEmployee(event){

    var name = document.getElementById("id_name").value;
    var email = document.getElementById("id_e-mail").value;
    var role = document.getElementById("id_role").value;
    var id = new Date().getTime();

    var employee = new Employee(id, name, email, role);
    console.log(employee);

    var myLocalStorage = window.localStorage;
    myLocalStorage.setItem(employee.id, JSON.stringify(employee) );

   EmployeeService.createEmployeeLine(employee);

/**
    var div = document.createElement("div");
    div.setAttribute("class", "row");

    var col = document.createElement("div");
    col.setAttribute("class", "col");
    col.innerHTML = employee.id;
      div.appendChild(col);

    var col2 = document.createElement("div");
    col2.setAttribute("class", "col");
    col2.innerHTML = employee.name;
    div.appendChild(col2);

    var col3 = document.createElement("div");
    col3.setAttribute("class", "col");
    col3.innerHTML = employee.email;
    div.appendChild(col3);

    var col4 = document.createElement("div");
    col4.setAttribute("class", "col");
    col4.innerHTML = employee.role;
    div.appendChild(col4);

    var col5 = document.createElement("div");
    col5.setAttribute("class", "col");
    col5.innerHTML = "<input type='button' value='Löschen'>";
    div.appendChild(col5);

    var table = document.getElementById("table");
    table.appendChild(div);
**/
    //document.body.insertBefore(document.getElementById("userContent"), div);
    //document.getElementById("userContent").innerHTML = row;
  }

  static roleChange(event){
    console.log(event.target.value);
  }

  static valueChange(event){
    console.log(event.target.value);
  }
}
