// for heart increase
function increaseHeart(id){
    const heartclick = parseInt(document.getElementById(id).innerText);
    const heartTotal = heartclick + 1;
    document.getElementById(id).innerText = heartTotal;
}
function setHeart(id){
    document.getElementById(id).addEventListener('click', function(e) {
        e.preventDefault();
        increaseHeart('availableHeart');
    });
}
setHeart('heartIcon1');
setHeart('heartIcon2');
setHeart('heartIcon3');
setHeart('heartIcon4');
setHeart('heartIcon5');
setHeart('heartIcon6');
setHeart('heartIcon7');
setHeart('heartIcon8');
setHeart('heartIcon9');
// end heart increase
//for transactions history
const transactionHistory = [];
const container = document.getElementById('transactionContainer');
const clearBTN = document.getElementById('clear');
function renderTransactions(){
    container.innerHTML = '';
    for(const data of transactionHistory){
        const div  = document.createElement('div');
        div.innerHTML = `
        <div class="flex justify-between items-center rounded-lg p-3 bg-[#fafafa] mt-4">
                        <div class="">
                            <h2 class="font-inter font-normal text-lg text-[#111] mb-2">${data.name}</h2>
                            <p class="font-hind font-normal text-base text-[#5c5c5c]">${data.number}</p>
                        </div>
                        <div class="">
                            <p class="font-hind font-normal text-lg text-[#111]">${data.time}</p>
                        </div>
        </div>
                        
        `
        container.appendChild(div);
    }
}
//for clear the history
document.getElementById('clear').addEventListener('click', function(e) {
    e.preventDefault();
    transactionHistory.length = 0;
    renderTransactions();
});

//call button
function decreaseCoin(id,name,number){
    document.getElementById(id).addEventListener('click', function(e) {
        e.preventDefault();
    const phoneNumber = parseInt(document.getElementById('availableCoin').innerText);
    const serviceName = document.getElementById(name).innerText;
    const serviceNumber = document.getElementById(number).innerText;
    if(phoneNumber < 20){
        alert('You have no coins to call. Please recharge your account.');
        document.getElementById('availableCoin').innerText = 0;
        return;
    }
    const totalPhone = phoneNumber - 20;
    document.getElementById('availableCoin').innerText = totalPhone;
    alert('Calling ' + serviceName + ' on ' + serviceNumber);

    transactionHistory.push({
            name: serviceName,
            number: serviceNumber,
            time: new Date().toLocaleTimeString()
    }); 
    renderTransactions();
 });
}
decreaseCoin('callButton1', 'servicename1', 'serviceNumber1');
decreaseCoin('callButton2', 'servicename2', 'serviceNumber2');
decreaseCoin('callButton3', 'servicename3', 'serviceNumber3');
decreaseCoin('callButton4', 'servicename4', 'serviceNumber4');
decreaseCoin('callButton5', 'servicename5', 'serviceNumber5');
decreaseCoin('callButton6', 'servicename6', 'serviceNumber6');
decreaseCoin('callButton7', 'servicename7', 'serviceNumber7');
decreaseCoin('callButton8', 'servicename8', 'serviceNumber8');
decreaseCoin('callButton9', 'servicename9', 'serviceNumber9');
//end call button

//for copy button
let countCopy = 0;
function copyButton(id, numberId){
    document.getElementById(id).addEventListener('click', function(e) {
        e.preventDefault();
        const copyText = document.getElementById(numberId).innerText;
        navigator.clipboard.writeText(copyText).then(function() {
            countCopy += 1;
            document.getElementById('countCopy').innerText = countCopy;
            alert('Number is coppied ' + copyText);
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    });
}
copyButton('copyBtn1', 'serviceNumber1');
copyButton('copyBtn2', 'serviceNumber2');
copyButton('copyBtn3', 'serviceNumber3');
copyButton('copyBtn4', 'serviceNumber4');
copyButton('copyBtn5', 'serviceNumber5');
copyButton('copyBtn6', 'serviceNumber6');
copyButton('copyBtn7', 'serviceNumber7');
copyButton('copyBtn8', 'serviceNumber8');
copyButton('copyBtn9', 'serviceNumber9');
//end copy button
