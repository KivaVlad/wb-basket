// Глобальные переменные
let button = document.getElementById('button');
const body = document.querySelector('body');

const items = [
    { 
        id: 1, 
        name: 'Футболка UZcotton мужская', 
        params: { 
            color: 'белый', 
            size: 56, 
            place: 'Коледино WB',
            company: 'OOO Вайлдберриз'
        },
        company_info: {
            company_name: 'OOO «Вайлдберриз»',
            company_ogrn: 'ОГРН: 5167746237148',
            company_address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
        },
        total: 3, 
        price: 522,
        old_price: 1051,
        selected_products: 1,
    },
    {
        id: 2, 
        name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe', 
        params: { 
            color: 'прозрачный',  
            place: 'Коледино WB',
            company: 'OOO Мегапрофстиль'
        },
        company_info: {
            company_name: 'OOO «МЕГАПРОФСТИЛЬ»',
            company_ogrn: 'ОГРН: 5167746237148',
            company_address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
        },
        total: 300, 
        price: 10500.235,
        old_price: 11500.235,
        selected_products: 200,
    },
    {
        id: 3, 
        name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell', 
        params: {  
            place: 'Коледино WB',
            company: 'OOO Вайлдберриз'
        },
        company_info: {
            company_name: 'OOO «Вайлдберриз»',
            company_ogrn: 'ОГРН: 5167746237148',
            company_address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
        },
        total: 4, 
        price: 247,
        old_price: 475,
        selected_products: 2,
    },
]

// Расчеты количества товаров и общая сумма
function sum(a, b, c) {
    return a + b + c;
}

function substraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

let totalPriceSum = sum(
    multiplication(items[0].price, items[0].selected_products), 
    multiplication(items[1].price, items[1].selected_products),
    multiplication(items[2].price, items[2].selected_products),    
);
let totalWithoutDiscountSum = sum(
    multiplication(items[0].old_price, items[0].selected_products), 
    multiplication(items[1].old_price, items[1].selected_products),
    multiplication(items[2].old_price, items[2].selected_products),    
);
let totalItemsSum = sum(items[0].selected_products, items[1].selected_products, items[2].selected_products);
let totalDiscountSum = substraction(totalWithoutDiscountSum, totalPriceSum);

let totalItem = document.querySelectorAll('#total-items');
let totalPrice = document.querySelectorAll('#total-price');
let sumWithoutDiscount = document.getElementById('sum-without-discount');
let totalDiscount = document.getElementById('total-discount');

totalItem.forEach((item) => item.innerHTML = totalItemsSum);
totalPrice.forEach((item) => item.innerHTML = totalPriceSum);
sumWithoutDiscount.innerHTML = totalWithoutDiscountSum;
totalDiscount.innerHTML = totalDiscountSum;


// Отображение товаров 

// Карточка 1
let firstCardName = document.querySelectorAll('#card-1-name');
let firstCardColor = document.querySelectorAll('#card-1-color');
let firstCardSize = document.querySelectorAll('#card-1-size');
let firstCardPlace = document.querySelectorAll('#card-1-place');
let firstCardCompanyName = document.getElementById('card-1-company');
let firstCardCompanyInfoName = document.getElementById('card-1-company-info-name');
let firstCardCompanyInfoOgrn = document.getElementById('card-1-company-info-ogrn');
let firstCardCompanyInfoAddress = document.getElementById('card-1-company-info-address');
let firstCardSelectedProducts = document.querySelectorAll('#card-1-selected-products');
let firstCardTotalItems = document.querySelectorAll('#card-1-total-items');
let firstCardPrice = document.querySelectorAll('#card-1-price');
let firstCardOldPrice = document.querySelectorAll('#card-1-old-price');
let firstCardDeliveryImg = document.getElementById('delivery-item-image-1');

firstCardName.forEach((item) => item.innerHTML = items[0].name);
firstCardColor.forEach((item) => item.innerHTML = items[0].params.color);
firstCardSize.forEach((item) => item.innerHTML = items[0].params.size);
firstCardPlace.forEach((item) => item.innerHTML = items[0].params.place);
firstCardCompanyName.innerHTML = items[0].params.company;
firstCardCompanyInfoName.innerHTML = items[0].company_info.company_name;
firstCardCompanyInfoOgrn.innerHTML = items[0].company_info.company_ogrn;
firstCardCompanyInfoAddress.innerHTML = items[0].company_info.company_address;
firstCardSelectedProducts.forEach((item) => item.innerHTML = items[0].selected_products);
firstCardTotalItems.forEach((item) => item.innerHTML = substraction(items[0].total, items[0].selected_products));
firstCardPrice.forEach((item) => item.innerHTML = multiplication(items[0].price, items[0].selected_products));
firstCardOldPrice.forEach((item) => item.innerHTML = multiplication(items[0].old_price, items[0].selected_products));

// Карточка 2
let secondCardName = document.querySelectorAll('#card-2-name');
let secondCardColor = document.querySelectorAll('#card-2-color');
let secondCardPlace = document.querySelectorAll('#card-2-place');
let secondCardCompanyName = document.getElementById('card-2-company');
let secondCardCompanyInfoName = document.getElementById('card-2-company-info-name');
let secondCardCompanyInfoOgrn = document.getElementById('card-2-company-info-ogrn');
let secondCardCompanyInfoAddress = document.getElementById('card-2-company-info-address');
let secondCardSelectedProducts = document.querySelectorAll('#card-2-selected-products');
let secondCardPrice = document.querySelectorAll('#card-2-price');
let secondCardOldPrice = document.querySelectorAll('#card-2-old-price');
let secondCardDeliveryImg = document.querySelectorAll('#delivery-item-image-2');

secondCardName.forEach((item) => item.innerHTML = items[1].name);
secondCardColor.forEach((item) => item.innerHTML = items[1].params.color);
secondCardPlace.forEach((item) => item.innerHTML = items[1].params.place);
secondCardCompanyName.innerHTML = items[1].params.company;
secondCardCompanyInfoName.innerHTML = items[1].company_info.company_name;
secondCardCompanyInfoOgrn.innerHTML = items[1].company_info.company_ogrn;
secondCardCompanyInfoAddress.innerHTML = items[1].company_info.company_address;
secondCardSelectedProducts.forEach((item) => item.innerHTML = items[1].selected_products);
secondCardPrice.forEach((item) => item.innerHTML = multiplication(items[1].price, items[1].selected_products));
secondCardOldPrice.forEach((item) => item.innerHTML = multiplication(items[1].old_price, items[1].selected_products));

// Карточка 3
let thirdCardName = document.querySelectorAll('#card-3-name');
let thirdCardPlace = document.querySelectorAll('#card-3-place');
let thirdCardCompanyName = document.getElementById('card-3-company');
let thirdCardCompanyInfoName = document.getElementById('card-3-company-info-name');
let thirdCardCompanyInfoOgrn = document.getElementById('card-3-company-info-ogrn');
let thirdCardCompanyInfoAddress = document.getElementById('card-3-company-info-address');
let thirdCardSelectedProducts = document.querySelectorAll('#card-3-selected-products');
let thirdCardTotalItems = document.querySelectorAll('#card-3-total-items');
let thirdCardPrice = document.querySelectorAll('#card-3-price');
let thirdCardOldPrice = document.querySelectorAll('#card-3-old-price');
let thirdCardDeliveryImg = document.getElementById('delivery-item-image-3');

thirdCardName.forEach((item) => item.innerHTML = items[2].name);
thirdCardPlace.forEach((item) => item.innerHTML = items[2].params.place);
thirdCardCompanyName.innerHTML = items[2].params.company;
thirdCardCompanyInfoName.innerHTML = items[2].company_info.company_name;
thirdCardCompanyInfoOgrn.innerHTML = items[2].company_info.company_ogrn;
thirdCardCompanyInfoAddress.innerHTML = items[2].company_info.company_address;
thirdCardSelectedProducts.forEach((item) => item.innerHTML = items[2].selected_products);
thirdCardTotalItems.forEach((item) => item.innerHTML = substraction(items[2].total, items[2].selected_products)); 
thirdCardPrice.forEach((item) => item.innerHTML = multiplication(items[2].price, items[2].selected_products));
thirdCardOldPrice.forEach((item) => item.innerHTML = multiplication(items[2].old_price, items[2].selected_products));


// Счетчик добавить/убрать товар

// Счетчик 1 карточки
let firstCardCounterUnactiveMinus = document.querySelectorAll('#card-1-counter-unactive-minus');
let firstCardCounterActiveMinus = document.querySelectorAll('#card-1-counter-active-minus');
let firstCardCounterUnactivePlus = document.querySelectorAll('#card-1-counter-unactive-plus');
let firstCardCounterActivePlus = document.querySelectorAll('#card-1-counter-active-plus');

let allPriceFirstCard = multiplication(items[0].price, items[0].selected_products);
let allOldPriceFirstCard = multiplication(items[0].old_price, items[0].selected_products);
let allSelectedItemsFirstCard = items[0].selected_products;
let allTotalItemsFirstCard = substraction(items[0].total, items[0].selected_products);

firstCardCounterActivePlus.forEach((item) => item.addEventListener('click', addOneItemFromCard1));
firstCardCounterActiveMinus.forEach((item) => item.addEventListener('click', removeOneItemFromCard1));


function addOneItemFromCard1() {
    let price = allPriceFirstCard += items[0].price;
    let oldPrice = allOldPriceFirstCard += items[0].old_price;
    let selectedItems = allSelectedItemsFirstCard += 1;
    let total = allTotalItemsFirstCard -= 1;
    let allTotal = totalItemsSum += 1;
    let allPrice = Math.floor(totalPriceSum += items[0].price);

    firstCardPrice.forEach((item) => item.innerHTML = price);
    firstCardOldPrice.forEach((item) => item.innerHTML = oldPrice);
    firstCardSelectedProducts.forEach((item) => item.innerHTML = selectedItems);
    firstCardTotalItems.forEach((item) => item.innerHTML = total);
    totalItem.forEach((item) => item.innerHTML = allTotal);
    totalPrice.forEach((item) => item.innerHTML = allPrice);

    if (total === 0) {
        firstCardCounterActivePlus.forEach((item) => item.classList.add('hidden'));
        firstCardCounterUnactivePlus.forEach((item) => item.classList.remove('hidden'));
        firstCardCounterUnactiveMinus.forEach((item) => item.classList.add('hidden'));
        firstCardCounterActiveMinus.forEach((item) => item.classList.remove('hidden'));
    } else if (total > 0) {
        firstCardCounterUnactiveMinus.forEach((item) => item.classList.add('hidden'));
        firstCardCounterActiveMinus.forEach((item) => item.classList.remove('hidden'));
    } else {
        return
    }
}

function removeOneItemFromCard1() {
    let price = allPriceFirstCard -= items[0].price;
    let oldPrice = allOldPriceFirstCard -= items[0].old_price;
    let selectedItems = allSelectedItemsFirstCard -= 1;
    let total = allTotalItemsFirstCard += 1;
    let allTotal = totalItemsSum -= 1;
    let allPrice = Math.floor(totalPriceSum -= items[0].price);

    firstCardPrice.forEach((item) => item.innerHTML = price);
    firstCardOldPrice.forEach((item) => item.innerHTML = oldPrice);
    firstCardSelectedProducts.forEach((item) => item.innerHTML = selectedItems);
    firstCardTotalItems.forEach((item) => item.innerHTML = total);
    totalItem.forEach((item) => item.innerHTML = allTotal);
    totalPrice.forEach((item) => item.innerHTML = allPrice);

    if (total !== 0) {
        firstCardCounterActivePlus.forEach((item) => item.classList.remove('hidden'));
        firstCardCounterUnactivePlus.forEach((item) => item.classList.add('hidden'));
    }
    
    if (selectedItems === 1) {
        firstCardCounterUnactiveMinus.forEach((item) => item.classList.remove('hidden'));
        firstCardCounterActiveMinus.forEach((item) => item.classList.add('hidden'));
    }
}


// Счетчик второй карточки
let secondCardCounterUnactiveMinus = document.querySelectorAll('#card-2-counter-unactive-minus');
let secondCardCounterActiveMinus = document.querySelectorAll('#card-2-counter-active-minus');
let secondCardCounterUnactivePlus = document.querySelectorAll('#card-2-counter-unactive-plus');
let secondCardCounterActivePlus = document.querySelectorAll('#card-2-counter-active-plus');

let allPriceSecondCard = multiplication(items[1].price, items[1].selected_products);
let allOldPriceSecondCard = multiplication(items[1].old_price, items[1].selected_products);
let allSelectedItemsSecondCard = items[1].selected_products;

secondCardCounterActivePlus.forEach((item) => item.addEventListener('click', addOneItemFromCard2));
secondCardCounterActiveMinus.forEach((item) => item.addEventListener('click', removeOneItemFromCard2));

function addOneItemFromCard2() {
    let price = Math.floor(allPriceSecondCard += items[1].price);
    let oldPrice = Math.floor(allOldPriceSecondCard += items[1].old_price);
    let selectedItems = allSelectedItemsSecondCard += 1;
    let allTotal = totalItemsSum += 1;
    let allPrice = Math.floor(totalPriceSum += items[1].price);

    secondCardPrice.forEach((item) => item.innerHTML = price);
    secondCardOldPrice.forEach((item) => item.innerHTML = oldPrice);
    secondCardSelectedProducts.forEach((item) => item.innerHTML = selectedItems);
    totalItem.forEach((item) => item.innerHTML = allTotal);
    totalPrice.forEach((item) => item.innerHTML = allPrice);
}

function removeOneItemFromCard2() {
    let price = Math.floor(allPriceSecondCard -= items[1].price);
    let oldPrice = Math.floor(allOldPriceSecondCard -= items[1].old_price);
    let selectedItems = allSelectedItemsSecondCard -= 1;
    let allTotal = totalItemsSum -= 1;
    let allPrice = Math.floor(totalPriceSum -= items[1].price);

    secondCardPrice.forEach((item) => item.innerHTML = price);
    secondCardOldPrice.forEach((item) => item.innerHTML = oldPrice);
    secondCardSelectedProducts.forEach((item) => item.innerHTML = selectedItems);
    totalItem.forEach((item) => item.innerHTML = allTotal);
    totalPrice.forEach((item) => item.innerHTML = allPrice);
}


// Счетчик 3 карточки
let thirdCardCounterUnactiveMinus = document.querySelectorAll('#card-3-counter-unactive-minus');
let thirdCardCounterActiveMinus = document.querySelectorAll('#card-3-counter-active-minus');
let thirdCardCounterUnactivePlus = document.querySelectorAll('#card-3-counter-unactive-plus');
let thirdCardCounterActivePlus = document.querySelectorAll('#card-3-counter-active-plus');

let allPriceThirdCard = multiplication(items[2].price, items[2].selected_products);
let allOldPriceThirdCard = multiplication(items[2].old_price, items[2].selected_products);
let allSelectedItemsThirdCard = items[2].selected_products;
let allTotalItemsThirdCard = substraction(items[2].total, items[2].selected_products);

thirdCardCounterActivePlus.forEach((item) => item.addEventListener('click', addOneItemFromCard3));
thirdCardCounterActiveMinus.forEach((item) => item.addEventListener('click', removeOneItemFromCard3));


function addOneItemFromCard3() {
    let price = allPriceThirdCard += items[2].price;
    let oldPrice = allOldPriceThirdCard += items[2].old_price;
    let selectedItems = allSelectedItemsThirdCard += 1;
    let total = allTotalItemsThirdCard -= 1;
    let allTotal = totalItemsSum += 1;
    let allPrice = Math.floor(totalPriceSum += items[2].price);

    thirdCardPrice.forEach((item) => item.innerHTML = price);
    thirdCardOldPrice.forEach((item) => item.innerHTML = oldPrice);
    thirdCardSelectedProducts.forEach((item) => item.innerHTML = selectedItems);
    thirdCardTotalItems.forEach((item) => item.innerHTML = total);
    totalItem.forEach((item) => item.innerHTML = allTotal);
    totalPrice.forEach((item) => item.innerHTML = allPrice);

    if (total === 0) {
        thirdCardCounterActivePlus.forEach((item) => item.classList.add('hidden'));
        thirdCardCounterUnactivePlus.forEach((item) => item.classList.remove('hidden'));
        thirdCardCounterUnactiveMinus.forEach((item) => item.classList.add('hidden'));
        thirdCardCounterActiveMinus.forEach((item) => item.classList.remove('hidden'));
    } else if (total > 0) {
        thirdCardCounterUnactiveMinus.forEach((item) => item.classList.add('hidden'));
        thirdCardCounterActiveMinus.forEach((item) => item.classList.remove('hidden'));
    } else {
        return
    }
}

function removeOneItemFromCard3() {
    let price = allPriceThirdCard -= items[2].price;
    let oldPrice = allOldPriceThirdCard -= items[2].old_price;
    let selectedItems = allSelectedItemsThirdCard -= 1;
    let total = allTotalItemsThirdCard += 1;
    let allTotal = totalItemsSum -= 1;
    let allPrice = Math.floor(totalPriceSum -= items[2].price);

    thirdCardPrice.forEach((item) => item.innerHTML = price);
    thirdCardOldPrice.forEach((item) => item.innerHTML = oldPrice);
    thirdCardSelectedProducts.forEach((item) => item.innerHTML = selectedItems);
    thirdCardTotalItems.forEach((item) => item.innerHTML = total);
    totalItem.forEach((item) => item.innerHTML = allTotal);
    totalPrice.forEach((item) => item.innerHTML = allPrice);

    if (total !== 0) {
        thirdCardCounterActivePlus.forEach((item) => item.classList.remove('hidden'));
        thirdCardCounterUnactivePlus.forEach((item) => item.classList.add('hidden'));
    }
    
    if (selectedItems === 1) {
        thirdCardCounterUnactiveMinus.forEach((item) => item.classList.remove('hidden'));
        thirdCardCounterActiveMinus.forEach((item) => item.classList.add('hidden'));
    }
}

// Чекбоксы карточек
const allSelectCheckbox = document.getElementById('all-items-checkbox');
const fakeAllSelectCheckbox = document.getElementById('all-items-checkbox-fake');
const checkboxItem1 = document.querySelectorAll('#item1-checkbox');
const fakeCheckboxItem1 = document.querySelectorAll('#item1-checkbox-fake');
const checkboxItem2 = document.querySelectorAll('#item2-checkbox');
const fakeCheckboxItem2 = document.querySelectorAll('#item2-checkbox-fake');
const checkboxItem3 = document.querySelectorAll('#item3-checkbox');
const fakeCheckboxItem3 = document.querySelectorAll('#item3-checkbox-fake');

const deliveryDateContainer1 = document.getElementById('devivery-first-date');
const deliveryDateContainer2 = document.getElementById('devivery-second-date');

let isAllChecked = true;
let isItem1Checked = true;
let isItem2Checked = true;
let isItem3Checked = true;

allSelectCheckbox.addEventListener('click', unCheckedActiveItems);
fakeAllSelectCheckbox.addEventListener('click', checkedAllActiveItems);
checkboxItem1.forEach((item) => item.addEventListener('click', unCheckFirstItem));
fakeCheckboxItem1.forEach((item) => item.addEventListener('click', checkFirstItem));
checkboxItem2.forEach((item) => item.addEventListener('click', unCheckSecondItem));
fakeCheckboxItem2.forEach((item) => item.addEventListener('click', checkSecondItem));
checkboxItem3.forEach((item) => item.addEventListener('click', unChechThirdItem));
fakeCheckboxItem3.forEach((item) => item.addEventListener('click', checkThirdItem));

function checkedAllActiveItems() {
    isAllChecked = true;

    fakeAllSelectCheckbox.classList.add('hidden');
    allSelectCheckbox.classList.remove('hidden');
    checkboxItem1.forEach((item) => item.classList.remove('hidden'));
    fakeCheckboxItem1.forEach((item) => item.classList.add('hidden'));
    checkboxItem2.forEach((item) => item.classList.remove('hidden'));
    fakeCheckboxItem2.forEach((item) => item.classList.add('hidden'));
    checkboxItem3.forEach((item) => item.classList.remove('hidden'));
    fakeCheckboxItem3.forEach((item) => item.classList.add('hidden'));

    totalPriceSum = sum(
        multiplication(items[0].price, items[0].selected_products), 
        multiplication(items[1].price, items[1].selected_products),
        multiplication(items[2].price, items[2].selected_products),    
    );
    totalPrice.forEach((item) => item.innerHTML = totalPriceSum);
    totalItem.forEach((item) => item.innerHTML = totalItemsSum);
    sumWithoutDiscount.innerHTML = totalWithoutDiscountSum;
    totalDiscount.innerHTML = totalDiscountSum;

    deliveryDateContainer1.style.display = 'flex';
    deliveryDateContainer2.style.display = 'flex';

    // Закрываем чекбокс "Списать оплату сразу"
    getUncheckPayment();
}

function unCheckedActiveItems() {
    isAllChecked = false;
    isItem1Checked = false;
    isItem2Checked = false;
    isItem3Checked = false;

    allSelectCheckbox.classList.add('hidden');
    fakeAllSelectCheckbox.classList.remove('hidden');
    fakeCheckboxItem1.forEach((item) => item.classList.remove('hidden'));
    checkboxItem1.forEach((item) => item.classList.add('hidden'));
    fakeCheckboxItem2.forEach((item) => item.classList.remove('hidden'));
    checkboxItem2.forEach((item) => item.classList.add('hidden'));
    checkboxItem3.forEach((item) => item.classList.add('hidden'));
    fakeCheckboxItem3.forEach((item) => item.classList.remove('hidden'));
    totalPrice.forEach((item) => item.innerHTML = 0);
    totalItem.forEach((item) => item.innerHTML = 0);
    sumWithoutDiscount.innerHTML = 0;
    totalDiscount.innerHTML = 0;
    totalPriceSum = 0;

    deliveryDateContainer1.style.display = 'none';
    deliveryDateContainer2.style.display = 'none';

    // Закрываем чекбокс "Списать оплату сразу"
    getUncheckPayment();

}


function unCheckFirstItem() {
    isItem1Checked = false;
    allSelectCheckbox.classList.add('hidden');
    fakeAllSelectCheckbox.classList.remove('hidden');

    checkboxItem1.forEach((item) => item.classList.add('hidden'));
    fakeCheckboxItem1.forEach((item) => item.classList.remove('hidden'));
    firstCardDeliveryImg.classList.add('hidden');

    totalItemsSum = items[1].selected_products + items[2].selected_products;
    totalPriceSum = multiplication(items[1].price, items[1].selected_products) + multiplication(items[2].price, items[2].selected_products);
    totalWithoutDiscountSum = multiplication(items[1].old_price, items[1].selected_products) + multiplication(items[2].old_price, items[2].selected_products);
    totalDiscountSum = substraction(totalWithoutDiscountSum, totalPriceSum);

    totalPrice.forEach((item) => item.innerHTML = totalPriceSum);
    totalItem.forEach((item) => item.innerHTML = totalItemsSum);
    sumWithoutDiscount.innerHTML = totalWithoutDiscountSum;
    totalDiscount.innerHTML = totalDiscountSum;
    checked();
    getUncheckPayment();
}

function checkFirstItem() {
    isItem1Checked = true;
    fakeCheckboxItem1.forEach((item) => item.classList.add('hidden'));
    checkboxItem1.forEach((item) => item.classList.remove('hidden'));
    firstCardDeliveryImg.classList.remove('hidden');
    deliveryDateContainer1.style.display = 'flex';

    if (isItem2Checked && isItem3Checked) {
        totalPriceSum = sum(
            multiplication(items[0].price, items[0].selected_products), 
            multiplication(items[1].price, items[1].selected_products),
            multiplication(items[2].price, items[2].selected_products),    
        );
        totalWithoutDiscountSum = sum(
            multiplication(items[0].old_price, items[0].selected_products), 
            multiplication(items[1].old_price, items[1].selected_products),
            multiplication(items[2].old_price, items[2].selected_products),
        );
        totalItemsSum = sum(items[0].selected_products, items[1].selected_products, items[2].selected_products);
        totalDiscountSum = substraction(totalWithoutDiscountSum, totalPriceSum);
    } else if (!isItem2Checked && isItem3Checked) {
        totalPriceSum = multiplication(items[0].price, items[0].selected_products) + multiplication(items[2].price, items[2].selected_products);
        totalWithoutDiscountSum = multiplication(items[0].old_price, items[0].selected_products) + multiplication(items[2].old_price, items[2].selected_products);
        totalItemsSum = items[0].selected_products + items[2].selected_products;
        totalDiscountSum = substraction(totalWithoutDiscountSum, totalPriceSum);
    } else if (isItem2Checked && !isItem3Checked) {
        totalPriceSum = multiplication(items[0].price, items[0].selected_products) + multiplication(items[1].price, items[1].selected_products);
        totalWithoutDiscountSum = multiplication(items[0].old_price, items[0].selected_products) + multiplication(items[1].old_price, items[1].selected_products);
        totalItemsSum = items[0].selected_products + items[1].selected_products;
        totalDiscountSum = substraction(totalWithoutDiscountSum, totalPriceSum);
    } else if (!isItem2Checked && !isItem3Checked) {
        totalPriceSum = multiplication(items[0].price, items[0].selected_products);
        totalWithoutDiscountSum = multiplication(items[0].old_price, items[0].selected_products);
        totalItemsSum = items[0].selected_products;
        totalDiscountSum = substraction(totalWithoutDiscountSum, totalPriceSum);
    } else {
        return
    }

    totalPrice.forEach((item) => item.innerHTML = totalPriceSum);
    totalItem.forEach((item) => item.innerHTML = totalItemsSum);
    sumWithoutDiscount.innerHTML = totalWithoutDiscountSum;
    totalDiscount.innerHTML = totalDiscountSum;
    checked();
    getUncheckPayment();
}

function unCheckSecondItem() {
    isItem2Checked = false;
    allSelectCheckbox.classList.add('hidden');
    fakeAllSelectCheckbox.classList.remove('hidden');

    checkboxItem2.forEach((item) => item.classList.add('hidden'));
    fakeCheckboxItem2.forEach((item) => item.classList.remove('hidden'));
    secondCardDeliveryImg.forEach((img) => img.classList.add('hidden'));
    deliveryDateContainer2.style.display = 'none';

    totalItemsSum = items[0].selected_products + items[2].selected_products;
    totalPriceSum = multiplication(items[0].price, items[0].selected_products) + multiplication(items[2].price, items[2].selected_products);
    totalWithoutDiscountSum = multiplication(items[0].old_price, items[0].selected_products) + multiplication(items[2].old_price, items[2].selected_products);
    totalDiscountSum = substraction(totalWithoutDiscountSum, totalPriceSum);

    totalPrice.forEach((item) => item.innerHTML = totalPriceSum);
    totalItem.forEach((item) => item.innerHTML = totalItemsSum);
    sumWithoutDiscount.innerHTML = totalWithoutDiscountSum;
    totalDiscount.innerHTML = totalDiscountSum;
    checked();
    getUncheckPayment();
}

function checkSecondItem() {
    isItem2Checked = true;
    fakeCheckboxItem2.forEach((item) => item.classList.add('hidden'));
    checkboxItem2.forEach((item) => item.classList.remove('hidden'));
    secondCardDeliveryImg.forEach((img) => img.classList.remove('hidden'));
    deliveryDateContainer2.style.display = 'flex';
    deliveryDateContainer1.style.display = 'flex';

    if (isItem1Checked && isItem3Checked) {
        totalPriceSum = sum(
            multiplication(items[0].price, items[0].selected_products), 
            multiplication(items[1].price, items[1].selected_products),
            multiplication(items[2].price, items[2].selected_products),    
        );
        totalWithoutDiscountSum = sum(
            multiplication(items[0].old_price, items[0].selected_products), 
            multiplication(items[1].old_price, items[1].selected_products),
            multiplication(items[2].old_price, items[2].selected_products),
        );
        totalItemsSum = sum(items[0].selected_products, items[1].selected_products, items[2].selected_products);
        totalDiscountSum = substraction(totalWithoutDiscountSum, totalPriceSum);
    } else if (!isItem1Checked && isItem3Checked) {
        totalPriceSum = multiplication(items[1].price, items[1].selected_products) + multiplication(items[2].price, items[2].selected_products);
        totalWithoutDiscountSum = multiplication(items[1].old_price, items[1].selected_products) + multiplication(items[2].old_price, items[2].selected_products);
        totalItemsSum = items[1].selected_products + items[2].selected_products;
        totalDiscountSum = substraction(totalWithoutDiscountSum, totalPriceSum);
    } else if (isItem1Checked && !isItem3Checked) {
        totalPriceSum = multiplication(items[0].price, items[0].selected_products) + multiplication(items[1].price, items[1].selected_products);
        totalWithoutDiscountSum = multiplication(items[0].old_price, items[0].selected_products) + multiplication(items[1].old_price, items[1].selected_products);
        totalItemsSum = items[0].selected_products + items[1].selected_products;
        totalDiscountSum = substraction(totalWithoutDiscountSum, totalPriceSum);
    } else if (!isItem1Checked && !isItem3Checked) {
        totalPriceSum = multiplication(items[1].price, items[1].selected_products);
        totalWithoutDiscountSum = multiplication(items[1].old_price, items[1].selected_products);
        totalItemsSum = items[1].selected_products;
        totalDiscountSum = substraction(totalWithoutDiscountSum, totalPriceSum);
    } else {
        return
    }

    totalPrice.forEach((item) => item.innerHTML = totalPriceSum);
    totalItem.forEach((item) => item.innerHTML = totalItemsSum);
    sumWithoutDiscount.innerHTML = totalWithoutDiscountSum;
    totalDiscount.innerHTML = totalDiscountSum;
    checked();
    getUncheckPayment();
}

function unChechThirdItem() {
    isItem3Checked = false;
    allSelectCheckbox.classList.add('hidden');
    fakeAllSelectCheckbox.classList.remove('hidden');

    checkboxItem3.forEach((item) => item.classList.add('hidden'));
    fakeCheckboxItem3.forEach((item) => item.classList.remove('hidden'));
    thirdCardDeliveryImg.classList.add('hidden');

    totalItemsSum = items[0].selected_products + items[1].selected_products;
    totalPriceSum = multiplication(items[0].price, items[0].selected_products) + multiplication(items[1].price, items[1].selected_products);
    totalWithoutDiscountSum = multiplication(items[0].old_price, items[0].selected_products) + multiplication(items[1].old_price, items[1].selected_products);
    totalDiscountSum = substraction(totalWithoutDiscountSum, totalPriceSum);

    totalPrice.forEach((item) => item.innerHTML = totalPriceSum);
    totalItem.forEach((item) => item.innerHTML = totalItemsSum);
    sumWithoutDiscount.innerHTML = totalWithoutDiscountSum;
    totalDiscount.innerHTML = totalDiscountSum;
    checked();
    getUncheckPayment();
}

function checkThirdItem() {
    isItem3Checked = true;
    checkboxItem3.forEach((item) => item.classList.remove('hidden'));
    fakeCheckboxItem3.forEach((item) => item.classList.add('hidden'));
    thirdCardDeliveryImg.classList.remove('hidden');
    deliveryDateContainer1.style.display = 'flex';

    let totalPriceSum = sum(
        multiplication(items[0].price, items[0].selected_products), 
        multiplication(items[1].price, items[1].selected_products),
        multiplication(items[2].price, items[2].selected_products),    
    );
    let totalWithoutDiscountSum = sum(
        multiplication(items[0].old_price, items[0].selected_products), 
        multiplication(items[1].old_price, items[1].selected_products),
        multiplication(items[2].old_price, items[2].selected_products),
    );
    let totalItemsSum = sum(items[0].selected_products, items[1].selected_products, items[2].selected_products);
    let totalDiscountSum = substraction(totalWithoutDiscountSum, totalPriceSum);

    totalPrice.forEach((item) => item.innerHTML = totalPriceSum);
    totalItem.forEach((item) => item.innerHTML = totalItemsSum);
    sumWithoutDiscount.innerHTML = totalWithoutDiscountSum;
    totalDiscount.innerHTML = totalDiscountSum;

    checked();
    getUncheckPayment();
    
}

function checked() {
    if (isItem1Checked && isItem2Checked && isItem3Checked) {
        checkedAllActiveItems();
    } else if (!isItem1Checked && !isItem2Checked && !isItem3Checked) {
        fakeAllSelectCheckbox.classList.remove('hidden');
        allSelectCheckbox.classList.add('hidden');
        deliveryDateContainer1.style.display = 'none';
        deliveryDateContainer2.style.display = 'none';
        totalPrice.forEach((item) => item.innerHTML = 0);
        totalItem.forEach((item) => item.innerHTML = 0);
        sumWithoutDiscount.innerHTML = 0;
        totalDiscount.innerHTML = 0;
        totalPriceSum = 0;
    }
}


// Чекбокс "Списать оплату сразу"
button.innerHTML = 'Заказать';
const fakePaymentChech = document.getElementById('payment-uncheck');
const paymentCheck = document.getElementById('payment-check');

fakePaymentChech.addEventListener('click', getCheckPayment);
paymentCheck.addEventListener('click', getUncheckPayment);

function getCheckPayment() {
    paymentCheck.classList.remove('hidden');
    fakePaymentChech.classList.add('hidden');
    button.innerHTML = `Оплатить ${totalPriceSum} com`;
}

function getUncheckPayment() {
    paymentCheck.classList.add('hidden');
    fakePaymentChech.classList.remove('hidden');
    button.innerHTML = 'Заказать';
} 


// Открытие/закрытие блока с активными товарами
const arrowOpenActiveItems = document.getElementById('open-active-basket-items');
const arrowCloseActiveItems = document.getElementById('close-active-basket-items');
const activeBasket = document.querySelector('.active-basket')
const totalActiveBasketItems = document.getElementById('total-active-items');

arrowOpenActiveItems.addEventListener('click', openActiveBasket);
arrowCloseActiveItems.addEventListener('click', closeActiveBasket);

function openActiveBasket() {
    totalActiveBasketItems.classList.remove('visible');
    activeBasket.classList.remove('hidden');
    totalActiveBasketItems.classList.add('hidden');
    activeBasket.classList.add('visible');
}

function closeActiveBasket() {
    totalActiveBasketItems.classList.remove('hidden');
    totalActiveBasketItems.classList.add('visible');
    activeBasket.classList.add('hidden');
}


// Открытие/закрытие блока с неактивными товарами
const arrowOpenUnActive = document.getElementById('unactive-arrow-down');
const arrowCloseUnActive = document.getElementById('unactive-arrow-up');
const unActiveBasket = document.getElementById('unactive-basket-wrapper');
const unActiveContainer = document.getElementById('unactive-container');

arrowCloseUnActive.addEventListener('click', closeUnActiveBasket);
arrowOpenUnActive.addEventListener('click', openUnactiveBasket);

function closeUnActiveBasket() {
    arrowCloseUnActive.classList.add('hidden');
    arrowOpenUnActive.classList.remove('hidden');
    unActiveBasket.classList.add('hidden');
    unActiveContainer.classList.add('unactive-total-items-container-active');
    unActiveContainer.classList.remove('unactive-total-items-container');
}

function openUnactiveBasket() {
    arrowOpenUnActive.classList.add('hidden');
    arrowCloseUnActive.classList.remove('hidden');
    unActiveBasket.classList.remove('hidden');
    unActiveContainer.classList.remove('unactive-total-items-container-active');
    unActiveContainer.classList.add('unactive-total-items-container');
}


// Отправка данных
const form = document.getElementById('form');
let userName = document.getElementById('username');
let userSurname = document.getElementById('user-surname');
let email = document.getElementById('user-mail');
let phone = document.getElementById('user-phone');
let inn = document.getElementById('user-inn');

button.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    validateInputs();
    console.log(`Имя: ${userName.value}, Фамилия: ${userSurname.value}, Почта: ${email.value}, Телефон: ${phone.value}, ИНН: ${inn.value}`);
}

function validateInputs() {
    validateName();
    validateSurname();
    validateEmail();
    vilidatePhone();
    vilidationInn();
}

// Валидация имени
function validateName() {
    let errorUserNameField = document.getElementById('error-username');
    let errorUserNameText = document.getElementById('error-text-name');
    let referalName = new RegExp(/^[а-яА-ЯёЁ]+$/);

    if (!userName.value.trim()) {
        userName.classList.remove('recipient-input');
        userName.classList.add('recipient-input-not-valid');
        errorUserNameField.classList.remove('hidden');
        errorUserNameText.innerHTML = 'Укажите имя';
        return;
    } else if (!referalName.test(userName.value)) {
        userName.classList.remove('recipient-input');
        userName.classList.add('recipient-input-not-valid');
        errorUserNameField.classList.remove('hidden');
        errorUserNameText.innerHTML = 'Укажите имя';
        return;
    } else {
        userName.classList.add('recipient-input');
        userName.classList.remove('recipient-input-not-valid');
        errorUserNameField.classList.add('hidden');
        return;
    }
}

// Валидация фамилии
function validateSurname() {
    let errorSurname = document.getElementById('error-user-surname');
    let errorSurnameText = document.getElementById('error-text-surname');
    let referalSurname = new RegExp(/^[а-яА-ЯёЁ]+$/);

    if (!userSurname.value.trim()) {
        userSurname.classList.remove('recipient-input');
        userSurname.classList.add('recipient-input-not-valid');
        errorSurname.classList.remove('hidden');
        errorSurnameText.innerHTML = 'Введите фамилию';
        return;
    } else if (!referalSurname.test(userSurname.value)) {
        userSurname.classList.remove('recipient-input');
        userSurname.classList.add('recipient-input-not-valid');
        errorSurname.classList.remove('hidden');
        errorSurnameText.innerHTML = 'Введите фамилию';
        return;
    } else {
        userSurname.classList.add('recipient-input');
        userSurname.classList.remove('recipient-input-not-valid');
        errorSurname.classList.add('hidden');
        return;
    }
}

// Валидация почты
function validateEmail() {
    let errorMail = document.getElementById('error-user-mail');
    let errorMailText = document.getElementById('error-mail-text');
    let referalEmail = new RegExp(/^[a-zA-z](([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu)

    if (!email.value.trim()) {
        email.classList.remove('recipient-input');
        email.classList.add('recipient-input-not-valid');
        errorMail.classList.remove('hidden');
        errorMailText.innerHTML = 'Укажите электронную почту';
        return;
    } else if (!referalEmail.test(email.value)) {
        email.classList.remove('recipient-input');
        email.classList.add('recipient-input-not-valid');
        errorMail.classList.remove('hidden');
        errorMailText.innerHTML = 'Проверьте адрес электронной почты';
        return;
    } else {
        email.classList.add('recipient-input');
        email.classList.remove('recipient-input-not-valid');
        errorMail.classList.add('hidden');
        return;
    }
}

// Валидация телефона
function vilidatePhone() {
    let errorPhone = document.getElementById('error-user-phone');
    let errorPhoneText = document.getElementById('error-phone-text');
    let referalPhone = new RegExp(/^[\d\+][\d\(\)\ -]{4,14}\d$/);
    const MAX_TEL_NUM = 12;

    if (!phone.value.trim()) {
        phone.classList.remove('recipient-input');
        phone.classList.add('recipient-input-not-valid');
        errorPhone.classList.remove('hidden');
        errorPhoneText.innerHTML = 'Укажите номер телефона';
        return;
    } else if (!referalPhone.test(phone.value) || phone.value.length !== MAX_TEL_NUM) {
        phone.classList.remove('recipient-input');
        phone.classList.add('recipient-input-not-valid');
        errorPhone.classList.remove('hidden');
        errorPhoneText.innerHTML = 'Формат: +9 999 999 99 99';
        return;
    } else {
        phone.classList.remove('recipient-input-not-valid');
        phone.classList.add('recipient-input');
        errorPhone.classList.add('hidden');
        return;
    }
}

// Валидация ИНН
function vilidationInn() {
    let errorInn = document.getElementById('error-user-inn');
    let errorInnText = document.getElementById('error-inn-text');
    let innTextHint = document.getElementById('inn-hint-text');
    const MAX_NUMBERS = 14;

    if (!inn.value.trim()) {
        inn.classList.remove('recipient-input');
        inn.classList.add('recipient-input-not-valid');
        innTextHint.classList.add('hidden');
        errorInn.classList.remove('hidden');
        errorInnText.innerHTML = 'Укажите ИНН';
        return;
    } else if (inn.value.length !== MAX_NUMBERS) {
        inn.classList.remove('recipient-input');
        inn.classList.add('recipient-input-not-valid');
        innTextHint.classList.add('hidden');
        errorInn.classList.remove('hidden');
        errorInnText.innerHTML = 'Проверьте ИНН';
        return;
    } else {
        inn.classList.remove('recipient-input-not-valid');
        inn.classList.add('recipient-input');
        innTextHint.classList.remove('hidden');
        errorInn.classList.add('hidden');
        return;
    }
}