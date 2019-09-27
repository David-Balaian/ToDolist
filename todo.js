function addlist() {
    let list11 = document.getElementById("emp")
    if(!!list11){
        list11.parentElement.removeChild(list11);
    }
    let newspan = document.createElement("span");
    let newinp = document.createElement("input");
    let addvalue = document.getElementById("item");
    newinp.setAttribute('type', 'button');
    if (!addvalue.value.trim()) {
        addvalue.style.border = '5px solid red';
    } else {
        createtime = new Date();
        createtime = `${createtime.getHours()}h:${createtime.getMinutes()}m`
        addvalue.style.border = 'none';
        // let node = document.createTextNode(addvalue.value+':  Created at '+createtime);
        newinp.setAttribute("value", addvalue.value + ':  Created at ' + createtime)
        let job = newinp.value;
        let target = document.getElementById('list');
        target.appendChild(newspan);
        newspan.appendChild(newinp);

        newspan.addEventListener("mouseenter", function () {
            newinp.onclick = function () {
             
                if ((newinp.style.opacity == 0.8)||(newinp.type=='text')) { return }
                endtime = new Date();
                endtime = `${endtime.getHours()}h:${endtime.getMinutes()}m`
    
                newinp.style.color = 'white';
                newinp.style.opacity = 0.8;
                if(newinp.style.opacity == 0.8){ newspan.removeChild(change);}
                newinp.setAttribute('value', newinp.value + ` DONE at  ${endtime}`);
                // newinp.setAttribute('type','text');
    
    
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
            if(newinp.style.opacity==0.8){
                hh = newspan.removeChild(change);
           
 
            }else{
                if(newinp.type=='text'){
            icon2.setAttribute('class', "fas fa-check");

                }else{
                icon2.setAttribute('class', "fas fa-pen");
            }}
            delet.onclick = function () {
                target.removeChild(newspan);
            }        
        change.onclick = function edit () {
            if (icon2.className=="fas fa-pen") {
                newinp.setAttribute('type', 'text');
                icon2.setAttribute('class', "fas fa-check");
            }else if (icon2.className=="fas fa-check"){
                if(!newinp.value.trim()){
                    newinp.style.border = '10px solid red';
                    return
                }else{
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
            if(pen.length||ed.length){
            newspan.removeChild(change);
            }

        })
      

    }

}

