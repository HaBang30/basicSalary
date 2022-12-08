let data = [];

function add() {
    let ordinal = document.getElementById('ordinal').value;
    let fullname = document.getElementById('fullname').value;
    let basicsalaryValue = document.getElementById('basicsalary').value;
    let officeValue = document.getElementById('office').value;
    let seniorValue = document.getElementById('senior').value;
    let allowanceValue = document.getElementById('allowance').value;
    let insuranceValue = document.getElementById('insurance').value;
    let salarytotal = document.getElementById('salarytotal').value;
    let total = document.getElementById('total').value;

    let basicsalary = parseInt(basicsalaryValue * 1490000);
    let office = parseInt(officeValue * 1490000);
    let senior = parseInt((basicsalary + office) * (seniorValue/100));
    let allowance = parseInt((basicsalary + office) * (allowanceValue)/100);
    let insurance = parseInt((basicsalary + office + senior)*(insuranceValue/100));
        salarytotal = parseInt(basicsalary + office + senior + allowance)
        total = parseInt(salarytotal - insurance)

    let getValue = {
        Ordinal: ordinal,
        Fullname: fullname,
        Basicsalary: basicsalary,
        Office: office,
        Senior: senior,
        Allowance: allowance,
        Insurance: insurance,
        Salarytotal:salarytotal,
        Total: total
    };
    
    let index = data.findIndex((x) => x.Ordinal == getValue.Ordinal);
    if(index >=0) {
        data.splice(index, 1, getValue);
    } else{
        data.push(getValue);
    }
    render();
    clearInput()

}

function render() {
    table = 
    `<tr>
    <th>Ordinal</th>
    <th>Full Name</th>
    <th>Basic Salary</th>
    <th>Office</th>
    <th>Sernior</th>
    <th>Service Allowance</th>
    <th>Society Insurance</th>
    <th>Salary Total</th>
    <th>Salary Total Received</th>
    <th>Active</th>
    </tr>`
    for (i = 0; i < data.length; i++) {
        table += 
            `<tr>
            <td>${data[i].Ordinal}</td>
            <td>${data[i].Fullname}</td>
            <td>${data[i].Basicsalary}</td>
            <td>${data[i].Office}</td>
            <td>${data[i].Senior}</td>
            <td>${data[i].Allowance}</td>
            <td>${data[i].Insurance}</td>
            <td>${data[i].Salarytotal}</td>
            <td>${data[i].Total}</td>
            
            <td>
            <button id = "btn" onclick="editValue(${data[i].Ordinal})">Edit</button>
            <button id = "btn" onclick="deleteValue(${data[i].Ordinal})">Delete</button>
            </td>
            </tr>`
    }
    document.getElementById("render").innerHTML = table;
}

function clearInput() {
    document.getElementById("ordinal").value = "";
    document.getElementById("fullname").value = "";
    document.getElementById("basicsalary").value = "";
    document.getElementById("office").value = "";
    document.getElementById("senior").value = "";
    document.getElementById("allowance").value = "";
    document.getElementById("insurance").value = "";
    document.getElementById("salarytotal").value = "";
    document.getElementById("total").value = "";
}

function deleteValue(ordinal) {
    if (confirm("Are you sure delete?")) {
        for (i = 0; i < data.length; i++) {
            if (data[i].Ordinal == ordinal || data[i].Ordinal == ''){
                data.splice(0,1);
                render();
            }
        }
    
    } else{
    } 
}
function editValue(ordinal) {
    for (i = 0; i < data.length; i++) {
        if (data[i].Ordinal == ordinal){
            document.getElementById("ordinal").value = data[i].Ordinal;
            document.getElementById("fullname").value = data[i].Fullname;
            document.getElementById("basicsalary").value = data[i].Basicsalary/1490000;
            document.getElementById("office").value = (data[i].Office/1490000).toFixed(1);
            document.getElementById("senior").value = ((data[i].Senior * 100)/(data[i].Basicsalary + data[i].Office)).toFixed(0);
            document.getElementById("allowance").value = ((data[i].Allowance * 100)/(data[i].Basicsalary + data[i].Office)).toFixed(0);
            document.getElementById("insurance").value = ((data[i].Insurance * 100)/(data[i].Basicsalary + data[i].Office + data[i].Senior)).toFixed(0);
            document.getElementById("salarytotal").value = data[i].Salarytotal;
            document.getElementById("total").value = data[i].Total;
        }
    }

}