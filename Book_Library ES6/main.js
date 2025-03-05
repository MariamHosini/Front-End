import {Book} from"./Book.js";
//#region get elements
let bookNo = document.getElementsByClassName("bookNumber")[0];
let btnOK  = document.getElementsByClassName("okbtn")[0];
let btnNext  = document.getElementsByClassName("nextBook")[0];
let booknoStatment  = document.getElementsByClassName("bookno")[0];
let tblbody = document.getElementsByTagName("tbody")[0];
let tbl = document.getElementsByTagName("table")[0];
let body=document.getElementsByTagName("body")[0];
//#endregion


//#region input validation
let bookName  = document.getElementById("bookName");
let bookPrice  = document.getElementById("bookPrice");
let authName  = document.getElementById("authName");
let authEmail  = document.getElementById("authEmail");
//#endregion

//#region Errors
let error  = document.getElementsByTagName("p")[0];
let bookNameError  = document.getElementById("bookNameError");
let bookPriceError  = document.getElementById("bookPriceError");
let authEmailError  = document.getElementById("authEmailError");
let authNameError  = document.getElementById("authNameError");
//#endregion
//
//#region  containers
let Fcontainer  = document.getElementById("Fcontainer");
let Scontainer  = document.getElementById("Scontainer");
let Thcontainer  = document.getElementById("Thcontainer");
//#endregion

let test = false;
let countOfBooks;
let data  =[];

btnOK.addEventListener("click", function(){
    if(isNaN(bookNo.value)){
        error.textContent = "Please enter a valid number";
        error.style.display = "block";
        bookNo.value = "";
    }
    else if((bookNo.value == "") || (bookNo.value.trim() == "")){
        error.textContent = "Please enter a number";
        error.style.display = "block";
        bookNo.value = "";
    }
    else{
        Fcontainer.style.display = "none";
        error.style.display = "none";
        Scontainer.style.display = "block";
         countOfBooks = 1;
        booknoStatment.textContent="Book no."+countOfBooks;
    }
});

//#region validation functions
function bookNameValidation(name,error){
    test = false;
    if(isFinite(name.value)){
        error.textContent = "Please enter valid book name";
        error.style.display = "block";
        name.value = "";
    }
    else{
        test = true;
        error.style.display = "none";
    }
    return  test;
}
function bookPriceValidation(price,error){
    test = false;
    if(isNaN(price.value)){
        error.textContent = "Please enter valid price";
        error.style.display = "block";
        price.value = "";
    }
    else if((price.value == "") || (price.value.trim() == "")){
        error.textContent = "Please enter price";
        error.style.display = "block";
        price.value = "";
    }
    else{
        test = true;
        error.style.display = "none";
    }

    return test;
}
function authorNameValidation(author_name,error){
    test = false;
    if(isFinite(author_name.value)){
        error.textContent = "Please enter valid author name";
        error.style.display = "block";
        author_name.value = "";
    }
    else{
        test = true;
        error.style.display = "none";
    }
    return test;
}
function authorEmailValidation(email,error){
    test = false;
    let emailRegex =/^[a-zA-Z0-9._%+-]+@gmail.com$/;
    if(email.value == "" || (email.value.trim() == "")){
        error.textContent = "Please enter valid Email";
        error.style.display = "block";
        }
    else if(!emailRegex.test(email.value)){
        error.textContent = "Please enter valid Email";
        error.style.display = "block";
        email.value = "";
    }
    else{
        test = true;
        error.style.display = "none";
    }
    return test;
}
//#endregion


//#region  adding book
btnNext.addEventListener("click", function(){

    if(bookNameValidation(bookName,bookNameError)&&bookPriceValidation(bookPrice,bookPriceError)&&authorNameValidation(authName,authNameError)&&authorEmailValidation(authEmail,authEmailError))
    {
        let bookObj = new Book();
        bookObj.bookName              = bookName.value;
        bookObj.bookPrice             = bookPrice.value;
        bookObj.author.authorName     = authName.value;
        bookObj.author.authorEmail    = authEmail.value;
        data.push(bookObj);
        bookName.value="";
        bookPrice.value="";
        authName.value = "";
        authEmail.value = "";
        if(countOfBooks == bookNo.value){
            Scontainer.style.display ="none";
            Thcontainer.style.display = "block"
            for(let i = 0 ;i<countOfBooks;i++){
                createTable(i);
               
            }
        }
        countOfBooks++;
    booknoStatment.textContent="Book no."+countOfBooks;
    }   
});
//#endregion

function createTable(i){
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let btnedit = document.createElement("button"); 
    let btnedelete = document.createElement("button");
    btnedit.textContent = "Edit";
    btnedelete.textContent="Delete";
    btnedit.classList.add("okbtn");
    btnedelete.classList.add("okbtn");
    td1.innerText   = data[i].bookName;
    td2.textContent = data[i].bookPrice;
    td3.textContent = data[i].author.authorName;
    td4.textContent = data[i].author.authorEmail;
    td5.appendChild(btnedit);
    td6.appendChild(btnedelete);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tblbody.appendChild(tr);
//delete button
    btnedelete.addEventListener("click",function(){ 
    let index = getChildIndex(this.parentNode.parentNode);
    tblbody.deleteRow(index);   
    data.splice(index,1);
    console.log(data);
    
    if(tblbody.children.length==0){
            Thcontainer.style.display = "none";
            let  Fourthcontainer = document.createElement("div");
            Fourthcontainer.classList.add("Fourthcontainer");
            let h2 = document.createElement("h2");
            let h3 = document.createElement("h3");
            let btn_click = document.createElement("button");
            btn_click.textContent="Click Here";
            btn_click.classList.add("okbtn");
            h2.textContent = "OOPs, You have deleted all books";
            h3.textContent = "If you want to add new list of books please Click here";
            btn_click.style.marginLeft  =  "300px";
            Fourthcontainer.appendChild(h2);
            Fourthcontainer.appendChild(h3);
            Fourthcontainer.appendChild(btn_click);
            body.append(Fourthcontainer);
            Fourthcontainer.style.display="block"
            btn_click.addEventListener("click",function(){
                bookNo.value = "";
                Fourthcontainer.style.display = "none";
                Fcontainer.style.display = "block";
            });
        }
    });
    //edit button
    btnedit.addEventListener("click",function(){
        
        let index = getChildIndex(this.parentNode.parentNode);
        EditButton(this.parentNode.parentNode,index);
    });
}

function getChildIndex(child) {
    let children = Array.from(tblbody.children);
    return children.indexOf(child);
}

function EditButton(element,index){
    //#region Creating eleemnt
    let td1 = element.children[0];
    let td2 = element.children[1];
    let td3 = element.children[2];
    let td4 = element.children[3];
    let td5 = element.children[4];
    let td6 = element.children[5];
    let btnSave = document.createElement("button"); 
    let btnCancel = document.createElement("button");   
    let editbtn = td5.firstChild;
    console.log(editbtn);
    
    let deletbtn = td6.firstChild;

    //#endregion

    //#region declare element
    btnSave.textContent = "Save";
    btnCancel.textContent = "Cancel";
    btnSave.classList.add("okbtn");
    btnCancel.classList.add("okbtn");
    let input1 = document.createElement("input"); 
    let input2 = document.createElement("input"); 
    let input3 = document.createElement("input"); 
    let input4 = document.createElement("input"); 
    let error1 = document.createElement("p"); 
    let error2 = document.createElement("p"); 
    let error3 = document.createElement("p"); 
    let error4 = document.createElement("p"); 
    input1.classList.add("input");
    input2.classList.add("input");
    input3.classList.add("input");
    input4.classList.add("input");
    error1.classList.add("error");
    error2.classList.add("error");
    error3.classList.add("error");
    error4.classList.add("error");
    input1.type = "text";
    input2.type = "text";
    input3.type = "text";
    input4.type = "text";

    input1.value = td1.textContent;
    input2.value = td2.textContent;
    input3.value = td3.textContent;
    input4.value = td4.textContent;  
    //#endregion
    
//#region  reseting
    td1.textContent="";
    td2.textContent="";
    td3.textContent="";
    td4.textContent="";
    td5.removeChild(td5.firstChild);
    td6.removeChild(td6.firstChild);
    //#endregion

    //#region  appending
    td1.appendChild(input1);
    td2.appendChild(input2);
    td3.appendChild(input3);
    td4.appendChild(input4);
    td1.appendChild(error1);
    td2.appendChild(error2);
    td3.appendChild(error3);
    td4.appendChild(error4);
    td5.appendChild(btnSave);
    td6.appendChild(btnCancel);
    //#endregion

    btnSave.addEventListener("click",function(){

        if(bookNameValidation(input1,error1)&&bookPriceValidation(input2,error2)&&authorNameValidation(input3,error3)&&authorEmailValidation(input4,error4))
        {
            td1.textContent=input1.value;
            td2.textContent=input2.value;
            td3.textContent=input3.value;
            td4.textContent=input4.value;
            td5.removeChild(td5.firstChild);
            td6.removeChild(td6.firstChild);
            td5.appendChild(editbtn);
            td6.appendChild(deletbtn);
            //edit the array of objects
            data[index].bookName = td1.textContent;
            data[index].bookPrice = td2.textContent;
            data[index].author.authorName = td3.textContent;
            data[index].author.authorEmail = td4.textContent;
    }
    });
    //#region Save Data
    let arr =[];
        arr[0] = input1.value;
        arr[1] = input2.value;
        arr[2] = input3.value;
        arr[3] = input4.value;
    //#endregion
    btnCancel.addEventListener("click",function(){
        td1.textContent=arr[0];
        td2.textContent=arr[1];
        td3.textContent=arr[2];
        td4.textContent=arr[3];
        td5.removeChild(td5.firstChild);
        td6.removeChild(td6.firstChild);
        td5.appendChild(editbtn);
        td6.appendChild(deletbtn);
    });
}