var a=document.getElementById("first");
var b=document.getElementById("last");
var c=document.getElementById("user");
var d=document.getElementById("email");
var e=document.getElementById("pass");
var f=document.getElementById("phone");
var val1=document.getElementById("val1");
var val2=document.getElementById("val2");
var val3=document.getElementById("val3");
var val4=document.getElementById("val4");
var val5=document.getElementById("val5");
var val6=document.getElementById("val6");
var st=document.getElementById("st");
var field=document.getElementById("field");
var demo=document.getElementById("demo");
// var user;
// var pass;
var count=0;
var count1=0;


function validate()
{

    var count=0;
    var reg1=/^([A-Za-z]+)$/;
    var reg2=/^([A-Za-z0-9]+)$/;
    var reg3=/^([A-Za-z0-9]+)@([A-Za-z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var reg4=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    var reg5=/^([0-9]{3,3})-([0-9]{3,3})-([0-9]{4,4})$/;
    var reg6=/^([0-9]{3,3}).([0-9]{3,3}).([0-9]{4,4})$/;
    var reg7=/^([0-9]{3,3}) ([0-9]{3,3}) ([0-9]{4,4})$/;
    var reg8=/^([0-9]{10,10})$/;
    // var reg5=/^([0-9]{10,})$/;
    
        // reg1.test(a.value.trim());
    if(a.value.trim()!="")
    {
    
        if((reg1.test(a.value.trim())))
        {
            val1.innerText="";
            a.style.border="";
            // return true;
            count++;
        }
        else
        {
            val1.innerText="Please enter Letters Only.";
            a.style.border="3px solid red";
            // return false;
        }
    }
    else
    {
    val1.innerText="First name can not be blank ";
    a.style.border="3px solid red";
    }

    if(b.value.trim()!="")
    {

        if((reg1.test(b.value.trim())))
        {
            val2.innerText="";
            b.style.border="";
            // return true;
            count++;
        }
        else
        {
            val2.innerText="Please enter Letters Only.";
            b.style.border="3px solid red";
            // return false;
        }
    }
    else
    {
    val2.innerText="Last name can not be blank ";
    b.style.border="3px solid red";
    }
    if(c.value.trim()!="")
    {

        if((reg2.test(c.value.trim())))
        {
            val3.innerText="";
            c.style.border="";
            // return true;
            count++;
        }
        else
        {
            val3.innerText="Please enter Letters and numbers only.";
            c.style.border="3px solid red";
            // return false;
        }
    }
    else
    {
    val3.innerText="User name can not be blank ";
    c.style.border="3px solid red";
    }
        // f.value=f.value.replace("-","");
        // f.value=f.value.replace("-","");
    //     f.value=f.value.replace(".","");
    //     f.value=f.value.replace(".","");
    // f.value=f.value.replace(" ","");
    // f.value=f.value.replace(" ","");
    if(f.value.trim()!="")
    {

        if( (reg8.test(f.value.trim())) || (reg5.test(f.value.trim())) || (reg6.test(f.value.trim())) || (reg7.test(f.value.trim())) )
        {
            val6.innerText="";
            f.style.border="";
            // return true;
            count++;
        }
        else
        {
            val6.innerText="supported format XXXXXXXXXX, XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX numbers only.";
            f.style.border="3px solid red";
            // return false;
        }
    }
    else
    {
    val6.innerText="Phone Number can not be blank ";
    f.style.border="3px solid red";
    }


    if(d.value.trim()!="")
    {

        if((reg3.test(d.value.trim())))
        {
            val4.innerText="";
            d.style.border="";
            // return true;
            count++;
        }
        else
        {
            val4.innerText="Please enter a valid Email Id.";
            d.style.border="3px solid red";
            // return false;
        }
    }
    else
    {
    val4.innerText="Email Id can not be blank ";
    d.style.border="3px solid red";
    }
    
    if(e.value.trim()!="")
    {
        if((reg4.test(e.value.trim())))
        {
            val5.innerText="";
            e.style.border="";
              count++;
        }
        else
        {
            val5.innerText="Password contains minimum 8 characters at least one uppercase ,one lowercase and one number";
            e.style.border="3px solid red";
        }
        
            

    }   
    else
    {
    val5.innerText="Password can not be blank ";
    e.style.border="3px solid red";
    }




   
    if(count==6)
    {
    //    var user=document.getElementById("user").value;
    //    var pass=document.getElementById("pass").value;
       return user,pass,true;
    }
    else
    {
        return false;
    }
}
function data()
{
    if (e.value.trim().length==0)
        {
            st.innerHTML="<div></div>";
        }
        else
        {
    if(e.value.trim().length < 8)
        {
            // st.innerText="poor strength";
            // st.style.color="red";
            st.innerHTML="<div class='container1'> <div class='skills poor'>Poor</div></div>";
        }
        else if ((e.value.trim().length >= 8)&&(e.value.trim().length <= 12) )
        {
            // val5.innerText="Password contains minimum 8 characters at least one uppercase ,one lowercase and one number";
            // e.style.border="3px solid red";
            // st.innerText="medium strength";
            // st.style.color="orange";
            st.innerHTML="<div class='container1'> <div class='skills medium'>Medium</div></div>";
        }

        else
        {
            // st.innerText="good strength";
            // st.style.color="green";
            st.innerHTML="<div class='container1'> <div class='skills strong'>Strong</div></div>";
        }
    }
}


function login()
{ 
    var count1=0;
    var x=document.getElementById("name1");
    var y=document.getElementById("pass1");
    var x1=document.getElementById("x1");
    var y1=document.getElementById("y1");
    var reg10=/^([A-Za-z0-9]+)$/;
    var reg11=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(x.value.trim()!="")
    {

        if((reg10.test(x.value.trim())))
        {
            x1.innerText="";
            x.style.border="";
            // return true;
            count1++;
        }
        else
        {
            x1.innerText="Please enter Letters and numbers only.";
            x.style.border="3px solid red";
            // return false;
        }
    }
    else
    {
    x1.innerText="User name can not be blank ";
    x.style.border="3px solid red";
    }
    if(y.value.trim()!="")
    {
        if((reg11.test(y.value.trim())))
        {
            y1.innerText="";
            y.style.border="";
              count1++;
        }
        else
        {
            y1.innerText="Password contains minimum 8 characters at least one uppercase ,one lowercase and one number";
            y.style.border="3px solid red";
        }
        
            

    }   
    else
    {
    y1.innerText="Password can not be blank ";
    y.style.border="3px solid red";
    }

    if(count1==2)
    {
    
       return true;
    }
    else
    {
        return false;
    }



    // if((x=="sar123") && (y=="ABCabc123"))
    // {
    //     return true;
    // }
    // else
    // {
    //     field.innerText="Entered User name or password is wrong";
    //     return false;
    // }

// var p=forms.['username'];
// var q=forms.['password'];
// alert(p);


//     if((x==p) && (y==q))
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
}