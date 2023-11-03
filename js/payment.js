// --- Оплата ---
const userCards = [
    {id: 1, number: 1234567890005555, exspire: '01/30', pay: 'mir'},
    {id: 2, number: 1234567890001265, exspire: '04/26', pay: 'visa'},
    {id: 3, number: 1234567890003344, exspire: '08/24', pay: 'master_card'},
    {id: 4, number: 1234567890007987, exspire: '10/25', pay: 'union_pay'},
]

// Выводим данные карты
let currentCard = userCards[0];
let cardNumber = document.querySelectorAll('#card-number');
let cardExspire = document.getElementById('card-exspire');

function transformCardNumber(cardNum) {
    let oldCardNumber = cardNum.toString();
    let modifiedNumber = oldCardNumber.replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
    let firstNumbers = modifiedNumber.slice(0, 7) + "&#8226".repeat(2);
    let lastNumbers = "&#8226".repeat(4) + modifiedNumber.slice(14, 19);

    return firstNumbers + ' ' + lastNumbers;
}

cardNumber.forEach((num) => num.innerHTML = transformCardNumber(currentCard.number));
cardExspire.innerHTML = currentCard.exspire;


// --- Модальное окно Изменить способ оплаты ---
const closePaymentModalButton = document.getElementById('close-payment-modal');
const paymentModal = document.getElementById('payment-modal');
const openPaymentModalButton = document.querySelectorAll('#open-payment-modal');

closePaymentModalButton.addEventListener('click', closePaymentModal);
paymentModal.addEventListener('click', handlePaymentOutside);
openPaymentModalButton.forEach((item) => item.addEventListener('click', openPaymentModal));

function openPaymentModal() {
    paymentModal.style.display = 'flex';
    body.style.overflow = 'hidden';
}

function handlePaymentOutside(e) {
    const isClickOutside = !!e.target.closest('.paymemt-method-modal-container');
    
    if (!isClickOutside) {
        closePaymentModal();
    }
}

function closePaymentModal() {
    paymentModal.style.display = 'none';
    body.style.overflow = 'visible';
}

// Номера карт
let cardNum1 = document.getElementById('card-number-1');
let cardNum2 = document.getElementById('card-number-2');
let cardNum3 = document.getElementById('card-number-3');
let cardNum4 = document.getElementById('card-number-4');

cardNum1.innerHTML = transformCardNumber(userCards[0].number);
cardNum2.innerHTML = transformCardNumber(userCards[1].number);
cardNum3.innerHTML = transformCardNumber(userCards[2].number);
cardNum4.innerHTML = transformCardNumber(userCards[3].number);

// Чекбоксы карт
let checkActiveCard1 = document.getElementById('payment-card-check-radio-1');
let checkFakeCard1 = document.getElementById('payment-card-check-radio-fake-1');
let checkActiveCard2 = document.getElementById('payment-card-check-radio-2');
let checkFakeCard2 = document.getElementById('payment-card-check-radio-fake-2');
let checkActiveCard3 = document.getElementById('payment-card-check-radio-3');
let checkFakeCard3 = document.getElementById('payment-card-check-radio-fake-3');
let checkActiveCard4 = document.getElementById('payment-card-check-radio-4');
let checkFakeCard4 = document.getElementById('payment-card-check-radio-fake-4');

checkActiveCard1.addEventListener('click', unCheckCard1);
checkFakeCard1.addEventListener('click', checkCard1);
checkActiveCard2.addEventListener('click', unCheckCard2);
checkFakeCard2.addEventListener('click', checkCard2);
checkActiveCard3.addEventListener('click', unCheckCard3);
checkFakeCard3.addEventListener('click', checkCard3);
checkActiveCard4.addEventListener('click', unCheckCard4);
checkFakeCard4.addEventListener('click', checkCard4);

function unCheckCard1() {
    checkActiveCard1.classList.add('hidden');
    checkFakeCard1.classList.remove('hidden');
}

function checkCard1() {
    checkActiveCard1.classList.remove('hidden');
    checkFakeCard1.classList.add('hidden');
    unCheckCard2();
    unCheckCard3();
    unCheckCard4();
    currentCard = userCards[0];
}

function unCheckCard2() {
    checkActiveCard2.classList.add('hidden');
    checkFakeCard2.classList.remove('hidden');
}

function checkCard2() {
    checkActiveCard2.classList.remove('hidden');
    checkFakeCard2.classList.add('hidden');
    unCheckCard1();
    unCheckCard3();
    unCheckCard4();
    currentCard = userCards[1];
}

function unCheckCard3() {
    checkActiveCard3.classList.add('hidden');
    checkFakeCard3.classList.remove('hidden');
}

function checkCard3() {
    checkActiveCard3.classList.remove('hidden');
    checkFakeCard3.classList.add('hidden');
    unCheckCard1();
    unCheckCard2();
    unCheckCard4();
    currentCard = userCards[2];
}

function unCheckCard4() {
    checkActiveCard4.classList.add('hidden');
    checkFakeCard4.classList.remove('hidden');
}

function checkCard4() {
    checkActiveCard4.classList.remove('hidden');
    checkFakeCard4.classList.add('hidden');
    unCheckCard1();
    unCheckCard2();
    unCheckCard3();
    currentCard = userCards[3];
}


// Меняем иконки карт
const mirIcons = document.querySelectorAll('#paymemt-mir-icon');
const visaIcons = document.querySelectorAll('#paymemt-visa-icon');
const msIcons = document.querySelectorAll('#paymemt-ms-icon');
const unionIcons = document.querySelectorAll('#paymemt-union-icon');

function selectPayIcon() {
    if (currentCard === userCards[0]) {
        mirIcons.forEach((icon) => icon.classList.remove('hidden'));
        visaIcons.forEach((icon) => icon.classList.add('hidden'));
        msIcons.forEach((icon) => icon.classList.add('hidden'));
        unionIcons.forEach((icon) => icon.classList.add('hidden'));
        return;
    } else if (currentCard === userCards[1]) {
        mirIcons.forEach((icon) => icon.classList.add('hidden'));
        visaIcons.forEach((icon) => icon.classList.remove('hidden'));
        msIcons.forEach((icon) => icon.classList.add('hidden'));
        unionIcons.forEach((icon) => icon.classList.add('hidden'));
        return;
    } else if (currentCard === userCards[2]) {
        mirIcons.forEach((icon) => icon.classList.add('hidden'));
        visaIcons.forEach((icon) => icon.classList.add('hidden'));
        msIcons.forEach((icon) => icon.classList.remove('hidden'));
        unionIcons.forEach((icon) => icon.classList.add('hidden'));
        return;
    } else if (currentCard === userCards[3]) {
        mirIcons.forEach((icon) => icon.classList.add('hidden'));
        visaIcons.forEach((icon) => icon.classList.add('hidden'));
        msIcons.forEach((icon) => icon.classList.add('hidden'));
        unionIcons.forEach((icon) => icon.classList.remove('hidden'));
    } else {
        return
    }
}


// Выбираем способ оплаты
document.getElementById('select-payment-card').addEventListener('click', submitCurrentCard);

function submitCurrentCard() {
    if (currentCard) {
        cardNumber.forEach((num) => num.innerHTML = transformCardNumber(currentCard.number));
        cardExspire.innerHTML = currentCard.exspire;
        selectPayIcon();
        closePaymentModal();
    }
}