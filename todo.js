
function addlist(addvalue, isdone, isfromstorage = false) {
    let list11 = document.getElementById("emp");
    if (!!list11) {
        list11.parentElement.removeChild(list11);
    }
    let target1 = document.querySelector("#list");
    let newspan = document.createElement("span");
    let newinp = document.createElement("input");
    newinp.setAttribute('type', 'button');


    if (isfromstorage == false) {
        addvalue = document.getElementById("item");
        if (!addvalue.value.trim()) {
            addvalue.style.border = '5px solid red';
        } else {
            createtime = new Date();
            createtime = `${createtime.getHours()}h:${createtime.getMinutes()}m`;
            addvalue.style.border = 'none';
            newinp.setAttribute("value", addvalue.value + ':  Created at ' + createtime);
            addStorage(newinp.value);
        }
    } else {
        newinp.setAttribute("value", addvalue);
    }


    target1.appendChild(newspan);
    newspan.appendChild(newinp);

    newspan.addEventListener("mouseenter", function () {
        newinp.onclick = function makeopacity() {
            if ((newinp.style.opacity == 0.8) || (newinp.type == 'text')) { return }
            endtime = new Date();
            endtime = `${endtime.getHours()}h:${endtime.getMinutes()}m`
            newinp.style.color = 'white';
            newinp.style.opacity = 0.8;
            
            if (newinp.style.opacity == 0.8) { newspan.removeChild(change); }
                newinp.setAttribute('value', newinp.value + ` DONE at  ${endtime}`);
                if (isfromstorage){
                    addStorage(newinp.value, true);
                }
            }
        delet = document.createElement("button");
        change = document.createElement('button');
        newspan.appendChild(change);
        newspan.appendChild(delet);
        let icon1 = document.createElement('i');
        delet.appendChild(icon1);
        let icon2 = document.createElement('i');
        change.appendChild(icon2);
        icon1.setAttribute('class', 'fas fa-trash-alt');
        if (newinp.style.opacity == 0.8) {
            hh = newspan.removeChild(change);
        } else {
            if (newinp.type == 'text') {
                icon2.setAttribute('class', "fas fa-check");

            } else {
                icon2.setAttribute('class', "fas fa-pen");
            }
        }
        delet.onclick = function () {
            localStorage.removeItem("text", newinp.value);
            target1.removeChild(newspan);
            
        }
        change.onclick = function edit() {
            if (icon2.className == "fas fa-pen") {
                newinp.setAttribute('type', 'text');
                icon2.setAttribute('class', "fas fa-check");
            } else if (icon2.className == "fas fa-check") {
                if (!newinp.value.trim()) {
                    newinp.style.border = '10px solid red';
                    return
                } else {
                    newinp.style.border = 'none';
                    newinp.setAttribute('type', 'button');
                }
                icon2.setAttribute('class', "fas fa-pen");
            }
        }
    })
    newspan.addEventListener("mouseleave", function () {
        newspan.removeChild(delet);
        let pen = document.getElementsByClassName("fas fa-pen")
        let ed = document.getElementsByClassName("fas fa-check")
        if (pen.length || ed.length) {
            newspan.removeChild(change);
        }
    })
}


function addStorage(text, isdone = false) {
    index = "index" + localStorage.length;
    let storeObj = {
        index: text,
        "done": isdone,
    }
    localStorage.setItem(index, JSON.stringify(storeObj));
}

function insertFromStorage() {
    let item
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            item = JSON.parse(localStorage.getItem(localStorage.key(i)));
            addlist(item.index, item.isdone, true);
        }
    }
}
