class EmployeeService {
  static addEmployee(event){

    var name = document.getElementById("id_name").value;
    var email = document.getElementById("id_e-mail").value;
    var role = document.getElementById("id_role").value;
    var id = new Date().getTime();

    var employee = new Employee(id, name, email, role);

    console.log(employee);

  var alle_zeilen = document.getElementById("alle vorhanden zeilen");
  alle_zeilen + neue Zeile
  add als innerHTML

    var row =
      "<div id="1" class='row'>"+
      "<div class='col'>" + employee.id + "</div>"+
      "<div class='col'>" + employee.name + "</div>"+
      "<div class='col'>" + employee.email + "</div>"+
      "<div class='col'>" + employee.role + "</div>"+
      "<div class='col'>" +  + "</div>"+
      "</div>"

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
