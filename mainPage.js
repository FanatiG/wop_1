var myObj;
var myObj_el1;
var a = document.createElement("a");
var obJoint = [];
document.getElementById("first").innerHTML = '';
document.getElementById("second").innerHTML = '';

function getDoc() {
    document.getElementById("firstButton").disabled = true;
    let x = new XMLHttpRequest();
    x.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            // console.log(myObj.links);
            showAjax(myObj.links);
        }
    };
    x.open("GET", "https://avito.dump.academy/", true);
    x.send();
};

function showAjax(elem) {
    for (var prop in elem) {
        // document.getElementById("first").innerHTML = document.getElementById("first").innerHTML + prop + ': \"' + elem[prop] + '\"' + "<br>";
        // document.getElementById("first").innerHTML = document.getElementById("first").innerHTML;
        document.getElementById("first").appendChild(a);
        a.innerHTML = elem[prop];
        showInsides(a.innerHTML);
        a.href = elem[prop];
        a.style.textDecoration = 'none';
        a.style.color = 'white';
        document.getElementById("first").innerHTML = document.getElementById("first").innerHTML + "<br>";
    }
};

function showInsides(elem) {
    let x = new XMLHttpRequest();
    x.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj_el1 = JSON.parse(this.responseText);
            if(myObj_el1.data != undefined) {
                showAjax2(myObj_el1.data);
                // console.log(myObj_el1);
                // obJoint.push(myObj_el1.data);
                obJoint = obJoint.concat(myObj_el1.data);
                // console.log(myObj_el1);
                // console.log(myObj_el1.data);
                console.log(obJoint);
            }
        }
    };
    x.open("GET", elem, true);
    x.send();
};

function showAjax2(elem) {
    for (var prop in elem) {
        // document.getElementById("first").innerHTML = document.getElementById("first").innerHTML + prop + ': \"' + elem[prop] + '\"' + "<br>";
        // document.getElementById("first").innerHTML = document.getElementById("first").innerHTML;
        
        //в elem кидается объект, надо его разбить по строкам/хтмл элементам в свойсвта объекта============
        document.getElementById("second").appendChild(a);
        a.innerHTML = JSON.stringify(elem[prop]);
        a.href = elem[prop];
        a.style.textDecoration = 'none';
        a.style.color = 'white';
        document.getElementById("second").innerHTML = document.getElementById("second").innerHTML + "<br>";
        // showInsides(a.innerHTML);
    }
};

function clearFirst() {
    document.getElementById("first").innerHTML = null;
    document.getElementById("firstButton").disabled = false;
    document.getElementById("second").innerHTML = null;
    console.clear();
};
