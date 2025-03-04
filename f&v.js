
 
 function pay(buttonId,inputId,priceId,divId){
    let button=document.getElementById(buttonId);
    let input=document.getElementById(inputId);
    let price=document.getElementById(priceId);
    let t_price=document.createElement("p");
    let div=document.getElementById(divId);
    button.dataset.originalText=button.textContent;
    button.dataset.originalStyle=button.style;


  button.addEventListener("click",function(event){
    event.preventDefault();
    const amount=input.value;
    const cost=parseInt(price.textContent);
    let total=cost*amount;
    if (amount.trim()===""|| amount<=0) {
        alert("Please enter a valid amount")
        button.textContent="Invalid Input";
        button.style.backgroundColor="red";
        {once:true}
    }

    else{
        button.textContent="Remove Item";
        button.style.backgroundColor="tomato";
        t_price.textContent="Total Price: Shs."+total
        button.addEventListener("click",function(){
            input.value="";
            t_price.textContent="";
            button.textContent=button.dataset.originalText;
            button.style=button.dataset.originalStyle;
        },
        {once:true}

    );
    div.appendChild(t_price);
    }
  });
 }

pay('button','input','price','div');
pay('button_a1','input_a1','price_a1','div_a1');
pay('button_a2','input_a2','price_a2','div_a2');
pay('button_a3','input_a3','price_a3','div_a3');
pay('button_a4','input_a4','price_a4','div_a4');
pay('button_a5','input_a5','price_a5','div_a5');
pay('button_a6','input_a6','price_a6','div_a6');
pay('button_a7','input_a7','price_a7','div_a7');
pay('button_b1','input_b1','price_b1','div_b1');
pay('button_b2','input_b2','price_b2','div_b2');
pay('button_b3','input_b3','price_b3','div_b3');
pay('button_b4','input_b4','price_b4','div_b4');
pay('button_b5','input_b5','price_b5','div_b5');
pay('button_b6','input_b6','price_b6','div_b6');
pay('button_b7','input_b7','price_b7','div_b7');
pay('button_b8','input_b8','price_b8','div_b8');
pay('button_b9','input_b9','price_b9','div_b9');
pay('button_b10','input_b10','price_b10','div_b10');
pay('button_c1','input_c1','price_c1','div_c1');
pay('button_c2','input_c2','price_c2','div_c2');
pay('button_c3','input_c3','price_c3','div_c3');
pay('button_c4','input_c4','price_c4','div_c4');
pay('button_c5','input_c5','price_c5','div_c5');
pay('button_c6','input_c6','price_c6','div_c6');
pay('button_c7','input_c7','price_c7','div_c7');
pay('button_c8','input_c8','price_c8','div_c8');

