// function input value 
function inputValue(inputId){
    const input= document.getElementById(inputId);
    const inputAmount= parseFloat(input.value);
    console.log(inputAmount)
    if(isNaN(inputAmount) || inputAmount< 0){
        return alert("Use Positive value");
    }
    else{
        return inputAmount;
        ;
    
    }
}
// calculate Button

document.getElementById('cal-btn').addEventListener('click',function(){
    const income =inputValue("income");
    const food =inputValue("food");
    const rent = inputValue("rent");
    const clothes=inputValue("clothes");

    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
        alert("Use Positive value")
    }
    else{
        
        const totalExpense=food+rent+clothes;
        const balance =income-totalExpense;
        if(totalExpense<= income){
            document.getElementById("totalExpenses").innerText=totalExpense;
            document.getElementById("balance").innerText=balance;
        }
        else{
            alert("Sorry Total Expenses is bigger than your ")
        }
    }
 
});
 

// Saving calculate Button