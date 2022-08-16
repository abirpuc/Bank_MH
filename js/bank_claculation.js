// depost 
document.getElementById('deposit').addEventListener('click',function(){
    const totalDeposit = document.getElementById('deposit-total');
    const previousTotalDepositAmountString = totalDeposit.innerText;
    const previousTotalDepositAmount = parseFloat(previousTotalDepositAmountString);
    // console.log(totalDepositAmount);
    const deposit_ammount = document.getElementById('diposit-ammount');
    const newDepositString = deposit_ammount.value;
    const newDeposit = parseFloat(newDepositString);
    const depositTotal = previousTotalDepositAmount + newDeposit 
    totalDeposit.innerText = depositTotal;



    const totalBalance = document.getElementById('total-amounts');
    const previourBalance = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previourBalance);
    
    const totalAmount = depositTotal + previousTotalBalance;
    console.log(totalAmount);
    totalBalance.innerText = totalAmount;

    deposit_ammount.value='';
   
})

//withdrow
document.getElementById('withdrow').addEventListener('click', function(){
    const totalWithdrowAmount = document.getElementById('withdrow-total');
    const previourWithdrowTotal = totalWithdrowAmount.innerText;
    const newWithdrowTotal = parseFloat(previourWithdrowTotal);

    const withdrowAmmount = document.getElementById('withdrow-ammount');
    const withdrowStirng = withdrowAmmount.value;
    const newWithdrow = parseFloat(withdrowStirng)
    const previousTotalWithdrowAmount = newWithdrowTotal + newWithdrow;
    totalWithdrowAmount.innerText = previousTotalWithdrowAmount;


    const totalBalance = document.getElementById('total-amounts');
    const previourBalance = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previourBalance);
    const totalAmount = previousTotalBalance - newWithdrow;
    console.log(totalAmount);
    totalBalance.innerText = totalAmount;

    withdrowAmmount.value = '';
   
})