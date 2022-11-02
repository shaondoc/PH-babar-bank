document.getElementById('deposite-button').addEventListener('click', function () {

    const deposit= document.getElementById('deposite-amount');
    const depositAmount= deposit.value;
    const myDeposite=document.getElementById('my-deposite');
    const curDepoAmn= myDeposite.innerText;
    console.log(curDepoAmn);
    const totalDepo= parseFloat(curDepoAmn) + parseFloat(depositAmount);

    myDeposite.innerText=totalDepo;
    deposit.value='';
    //console.log(deposit);

    // update account blance 
    const myblncdiv = document.getElementById('total-blnc');
    const myblance= myblncdiv.innerText;
    const totalblance= parseFloat(myblance) + parseFloat(depositAmount);
    myblncdiv.innerText= totalblance;

    console.log(totalblance);
})


// withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdraw = document.getElementById('withdraw-input');
    const withdrawIn = withdraw.value;

    const myWithdraw = document.getElementById('withdraw-total');
    const prewithdraw = myWithdraw.innerText;

    myWithdraw.innerText= parseFloat(withdrawIn) + parseFloat(prewithdraw);
    withdraw.value='';

    // upadate balace

    const wblance = document.getElementById('total-blnc');
    const preWblance = wblance.innerText;
    const neWblance = parseFloat(preWblance)- parseFloat(withdrawIn);
    wblance.innerText =neWblance;

    console.log(neWblance);
})

