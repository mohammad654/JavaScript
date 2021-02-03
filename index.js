
    // console.log('');
    //alert('');
    // var line =console.log;
    var my_div=document.getElementById("my_div");
    var my_div2=document.getElementById("my_div2");
    var button_item1=document.querySelectorAll("button")[0];
    var in_put=document.querySelectorAll("input")[0];



    // var in_put=document.getElementById("in_put");
    in_put.addEventListener('change',()=>{


    });
    button_item1.addEventListener('click',()=>{
// window.confirm();
      my_div.removeAttribute("class",'Mo');
        if (  my_div.getAttribute("id")){
            alert('1');

        }else {
            alert('0');
        }
    });

