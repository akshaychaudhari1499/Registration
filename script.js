

function validate() {

    let fname = document.getElementById('fullname').value
    let gender = document.getElementById('gender').value
    
    var hobby=document.forms[0];
    var str="";
    
    for(let i=0;i<hobby.length;i++){
           if(hobby[i].checked){
            str=str+hobby[i].value+" and ";
                }
            }      
   
   
    let error = false
    
    // console.log(fname)
    if (fname.length >= 5) {
        document.getElementById('full-name-valid').style.display = 'block'
        document.getElementById('full-name-invalid').style.display = 'none'
    } else {
        document.getElementById('full-name-invalid').style.display = 'block'
        document.getElementById('full-name-valid').style.display = 'none'
        error = true
    }
    if (gender != 'None') {
        document.getElementById('gender-valid').style.display = 'block'
        document.getElementById('gender-invalid').style.display = 'none'
    } else {
        document.getElementById('gender-invalid').style.display = 'block'
        document.getElementById('gender-valid').style.display = 'none'
        error = true
    }
    

    if (str != '') {
        document.getElementById('hobbies-valid').style.display = 'block'
        document.getElementById('hobbies-invalid').style.display = 'none'
    } else {
        document.getElementById('hobbies-invalid').style.display = 'block'
        document.getElementById('hobbies-valid').style.display = 'none'
        error = true
    }
     


        if (!error) {
            alert(`Hobbies of ${fname} (${gender}) are ${str}`)
            document.getElementById('registration-form').reset()         
          

            let validFeedbacks = document.getElementsByClassName('valid-feedback')
            for (let i = 0; i < validFeedbacks.length; i++) {
                validFeedbacks[i].style.display = 'none'
            }
            let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
            for (let i = 0; i < invalidFeedbacks.length; i++) {
                invalidFeedbacks[i].style.display = 'none'
            }
        }
    }
