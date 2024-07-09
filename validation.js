
const submitEvent = () =>{

    let firstName=document.getElementById("first-name").value;
    let middleName=document.getElementById("middle-name").value;
    let lastName=document.getElementById("last-name").value;
    let emailId=document.getElementById("email-id").value;
    let mobileNo=document.getElementById("mobile-no").value;
    let gender=document.getElementsByClassName("gender");

    let alphabet_regex= /^[a-zA-Z]+$/;
    let email_regex= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let mobile_regex=/^\d{10}$/

    let firstName_valid=alphabet_regex.test(firstName);
    let lastName_valid=alphabet_regex.test(lastName);
    let middleName_valid=alphabet_regex.test(middleName);
    let emailId_valid=email_regex.test(emailId);
    let mobileNo_valid=mobile_regex.test(mobileNo);


    let gender_valid=false;

    for(let index=0;index<gender.length;index++){
        if(gender[index].checked==true){
            gender_valid=true;
        }
    }

    if(!firstName_valid)
    alert("Please enter first name");
    else if(!middleName_valid)
    alert("Please enter middle name");
    else if(!lastName_valid)
    alert("Please enter last name");
    else if(!mobileNo_valid)
    alert("Please enter mobile no");
    else if(!gender_valid)
    alert("Please enter your gender");
    else if(!emailId_valid)
    alert("Enter the valid emailId");
    else
    alert("Form submitted sucessfully");

}