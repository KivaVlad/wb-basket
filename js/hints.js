// Иконки удалени/добавить в избранное
const card1 = document.getElementById('card-1');
const icons1 = document.getElementById('icons-1');
const card2 = document.getElementById('card-2');
const icons2 = document.getElementById('icons-2');
const card3 = document.getElementById('card-3');
const icons3 = document.getElementById('icons-3');

const card4 = document.getElementById('card-4');
const icons4 = document.getElementById('icons-4');
const card5 = document.getElementById('card-5');
const icons5 = document.getElementById('icons-5');
const card6 = document.getElementById('card-6');
const icons6 = document.getElementById('icons-6');

card1.addEventListener('mouseenter', visibleIcons1);
card1.addEventListener('mouseleave', hiddenIcons1);
card2.addEventListener('mouseenter', visibleIcons2);
card2.addEventListener('mouseleave', hiddenIcons2);
card3.addEventListener('mouseenter', visibleIcons3);
card3.addEventListener('mouseleave', hiddenIcons3);

card4.addEventListener('mouseenter', visibleIcons4);
card4.addEventListener('mouseleave', hiddenIcons4);
card5.addEventListener('mouseenter', visibleIcons5);
card5.addEventListener('mouseleave', hiddenIcons5);
card6.addEventListener('mouseenter', visibleIcons6);
card6.addEventListener('mouseleave', hiddenIcons6);


function visibleIcons1() {
    icons1.classList.remove('basket-hidden-card-counter-icons');
    icons1.classList.add('basket-active-card-counter-icons');
}

function hiddenIcons1() {
    icons1.classList.remove('basket-active-card-counter-icons');
    icons1.classList.add('basket-hidden-card-counter-icons');
}

function visibleIcons2() {
    icons2.classList.remove('basket-hidden-card-counter-icons');
    icons2.classList.add('basket-active-card-counter-icons');
}

function hiddenIcons2() {
    icons2.classList.remove('basket-active-card-counter-icons');
    icons2.classList.add('basket-hidden-card-counter-icons');
}

function visibleIcons3() {
    icons3.classList.remove('basket-hidden-card-counter-icons');
    icons3.classList.add('basket-active-card-counter-icons');
}

function hiddenIcons3() {
    icons3.classList.remove('basket-active-card-counter-icons');
    icons3.classList.add('basket-hidden-card-counter-icons');
}

function visibleIcons4() {
    icons4.classList.remove('unactive-hidden-card-icons-container');
    icons4.classList.add('unactive-card-icons-container');
}

function hiddenIcons4() {
    icons4.classList.remove('unactive-card-icons-container');
    icons4.classList.add('unactive-hidden-card-icons-container');
}

function visibleIcons5() {
    icons5.classList.remove('unactive-hidden-card-icons-container');
    icons5.classList.add('unactive-card-icons-container');
}

function hiddenIcons5() {
    icons5.classList.remove('unactive-card-icons-container');
    icons5.classList.add('unactive-hidden-card-icons-container');
}

function visibleIcons6() {
    icons6.classList.remove('unactive-hidden-card-icons-container');
    icons6.classList.add('unactive-card-icons-container');
}

function hiddenIcons6() {
    icons6.classList.remove('unactive-card-icons-container');
    icons6.classList.add('unactive-hidden-card-icons-container');
}


// Всплывающая подсказка о компании
const companyInfo1 = document.getElementById('company-info-1');
const iconInfoCompany1 = document.getElementById('company-info-icon-1');
const companyInfo2 = document.getElementById('company-info-2');
const iconInfoCompany2 = document.getElementById('company-info-icon-2');
const companyInfo3 = document.getElementById('company-info-3');
const iconInfoCompany3 = document.getElementById('company-info-icon-3');

iconInfoCompany1.addEventListener('mouseenter', showHint1);
iconInfoCompany1.addEventListener('mouseleave', hiddenHint1);
companyInfo1.addEventListener('mouseenter', showHint1);
companyInfo1.addEventListener('mouseleave', hiddenHint1);

iconInfoCompany2.addEventListener('mouseenter', showHint2);
iconInfoCompany2.addEventListener('mouseleave', hiddenHint2);
companyInfo2.addEventListener('mouseenter', showHint2);
companyInfo2.addEventListener('mouseleave', hiddenHint2);

iconInfoCompany3.addEventListener('mouseenter', showHint3);
iconInfoCompany3.addEventListener('mouseleave', hiddenHint3);
companyInfo3.addEventListener('mouseenter', showHint3);
companyInfo3.addEventListener('mouseleave', hiddenHint3);


function showHint1() {
    companyInfo1.classList.remove('hidden');
}

function hiddenHint1() {
    companyInfo1.classList.add('hidden');
}

function showHint2() {
    companyInfo2.classList.remove('hidden');
}

function hiddenHint2() {
    companyInfo2.classList.add('hidden');
}

function showHint3() {
    companyInfo3.classList.remove('hidden');
}

function hiddenHint3() {
    companyInfo3.classList.add('hidden');
}


// Всплывающая подсказка о скидках
const discountContainer1 = document.getElementById('discount-container-1');
const discountInfo1 = document.getElementById('discount-info-1');
const discountContainer2 = document.getElementById('discount-container-2');
const discountInfo2 = document.getElementById('discount-info-2');
const discountContainer3 = document.getElementById('discount-container-3');
const discountInfo3 = document.getElementById('discount-info-3');

discountInfo1.addEventListener('mouseenter', showDiscount1);
discountInfo1.addEventListener('mouseleave', hiddenDiscount1);

discountInfo2.addEventListener('mouseenter', showDiscount2);
discountInfo2.addEventListener('mouseleave', hiddenDiscount2);

discountInfo3.addEventListener('mouseenter', showDiscount3);
discountInfo3.addEventListener('mouseleave', hiddenDiscount3);


function showDiscount1() {
    discountContainer1.classList.remove('hidden');
}

function hiddenDiscount1() {
    discountContainer1.classList.add('hidden');
}

function showDiscount2() {
    discountContainer2.classList.remove('hidden');
}

function hiddenDiscount2() {
    discountContainer2.classList.add('hidden');
}

function showDiscount3() {
    discountContainer3.classList.remove('hidden');
}

function hiddenDiscount3() {
    discountContainer3.classList.add('hidden');
}


// Всплывающая подсказка о бесплатной доставке
const deliveryText1 = document.getElementById('delivery-text');
const deliveryInfoWindow1 = document.getElementById('delivery-information');
const deliveryText2 = document.getElementById('delivery-text-2');
const deliveryInfoWindow2 = document.getElementById('delivery-information-2');

deliveryText1.addEventListener('mouseenter', showDeliveryInfoWindow1);
deliveryText1.addEventListener('mouseleave', hiddenDeliveryInforWindow1);
deliveryInfoWindow1.addEventListener('mouseenter', showDeliveryInfoWindow1);
deliveryInfoWindow1.addEventListener('mouseleave', hiddenDeliveryInforWindow1);

deliveryText2.addEventListener('mouseenter', showDeliveryInfoWindow2);
deliveryText2.addEventListener('mouseleave', hiddenDeliveryInforWindow2);
deliveryInfoWindow2.addEventListener('mouseenter', showDeliveryInfoWindow2);
deliveryInfoWindow2.addEventListener('mouseleave', hiddenDeliveryInforWindow2);

function showDeliveryInfoWindow1() {
    deliveryInfoWindow1.classList.remove('hidden');
}

function hiddenDeliveryInforWindow1() {
    deliveryInfoWindow1.classList.add('hidden');
}

function showDeliveryInfoWindow2() {
    deliveryInfoWindow2.classList.remove('hidden');
}

function hiddenDeliveryInforWindow2() {
    deliveryInfoWindow2.classList.add('hidden');
}