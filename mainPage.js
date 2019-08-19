"use strict";

var myObj;
var myObj_el1;
var obJoint = [];


function getDoc() {
    document.getElementById("firstButton").disabled = true;
    let x = new XMLHttpRequest();
    x.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            showAjax(myObj.links);
        }
    };
    x.open("GET", "https://avito.dump.academy/", true);
    x.send();
};

function showAjax(elem) {
    for (var prop in elem) {
        document.getElementById("first").appendChild(a);
        a.innerHTML = elem[prop];
        showInsides(a.innerHTML);
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
            if (myObj_el1.data != undefined && x.responseURL.search('products') != -1) {
                showAjax2(myObj_el1.data);
            }
        }
    };
    x.open("GET", elem, true);
    x.send();
};

function showAjax2(elem) {
    for (let i = 0; i < elem.length; i++) {
        const PRODUCT_BLOCK = document.createElement("div");
        const CATEGORY = document.createElement("p");
        const TITLE = document.createElement("p");
        const PRICE = document.createElement("p");
        const BODY_TYPE = document.createElement("p");
        const GEARBOX = document.createElement("p");
        const YEAR = document.createElement("p");
        const ID = document.createElement("p");
        PRODUCT_BLOCK.id = i + "_PRODUCT";
        PRODUCT_BLOCK.style.display = 'flex';
        PRODUCT_BLOCK.style.flexDirection = 'column';
        PRODUCT_BLOCK.style.flexWrap = 'wrap';
        document.getElementById("second").appendChild(PRODUCT_BLOCK);


        for (var prop in elem[i].address) {
            const address = document.createElement("p");
            address.innerHTML = "address " + elem[i].address[prop];
            address.id = prop.toUpperCase() + "_ADDRESS";
            document.getElementById(i + "_PRODUCT").appendChild(address);
        }

        CATEGORY.innerHTML = "CATEGORY " + elem[i].category;
        document.getElementById(i + "_PRODUCT").appendChild(CATEGORY);

        TITLE.innerHTML = "TITLE " + elem[i].title;
        document.getElementById(i + "_PRODUCT").appendChild(TITLE);

        PRICE.innerHTML = "PRICE " + elem[i].price;
        document.getElementById(i + "_PRODUCT").appendChild(PRICE);

        for (var prop in elem[i].pictures) {
            const pictures = document.createElement("img");
            pictures.innerHTML = "address " + elem[i].pictures[prop];
            pictures.src = elem[i].pictures[prop];
            pictures.id = prop.toUpperCase() + "_ADDRESS";
            document.getElementById(i + "_PRODUCT").appendChild(pictures);
            function setNativeSize(url) {
                var img = new Image();
                img.src = url;
                img.onload = function() {
                    pictures.width = this.width;
                }
            }
            setNativeSize(pictures.src);
        }

        BODY_TYPE.innerHTML = "BODY_TYPE " + elem[i].BODY_TYPE;
        document.getElementById(i + "_PRODUCT").appendChild(BODY_TYPE);

        GEARBOX.innerHTML = "GEARBOX " + elem[i].GEARBOX;
        document.getElementById(i + "_PRODUCT").appendChild(GEARBOX);

        YEAR.innerHTML = "YEAR " + elem[i].YEAR;
        document.getElementById(i + "_PRODUCT").appendChild(YEAR);

        for (var prop in elem[i].relationships) {
            const relationships = document.createElement("p");
            relationships.innerHTML = "relationships " + elem[i].relationships[prop];
            relationships.id = prop.toUpperCase() + "_RELATIONSHIPS";
            document.getElementById(i + "_PRODUCT").appendChild(relationships);
        }

        ID.innerHTML = "id " + elem[i].id;
        document.getElementById(i + "_PRODUCT").appendChild(ID);
    }

};

function clearFirst() {
    document.getElementById("first").innerHTML = null;
    document.getElementById("firstButton").disabled = false;
    document.getElementById("second").innerHTML = null;
    console.clear();
};