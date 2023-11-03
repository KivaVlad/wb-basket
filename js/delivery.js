// --- Адреса ---
const pickAddress = [
    { 
        id: 1, 
        name: 'Пункт выдачи',
        description: 'Пункт выдачи',
        description_delivery: 'Доставка в пункт выдачи',
        place: {
            city: 'г. Бишкек,',
            street: 'улица Ахматбека Суюмбаева, 12/1'
        }, 
        rating: 4.99,
        working_hours: 'Ежедневно с 10 до 21',
    },
    { 
        id: 2, 
        name: 'Пункт выдачи',
        description: 'Пункт выдачи',
        description_delivery: 'Доставка в пункт выдачи',
        place: {
            city: 'г. Бишкек, микрорайон Джал,',
            street: 'улица Ахунбаева Исы, д. 67/1'
        }, 
        rating: 4.99,
        working_hours: 'Ежедневно с 10 до 21',
    },
    { 
        id: 3, 
        name: 'Пункт выдачи',
        description: 'Пункт выдачи',
        description_delivery: 'Доставка в пункт выдачи',
        place: {
            city: 'г. Бишкек,',
            street: 'улица Табышалиева, д. 57'
        }, 
        rating: 4.99,
        working_hours: 'Ежедневно с 10 до 21',
    }
];

const userAddress = [
    {
        id: 1,
        place: {
            city: 'Бишкек,',
            street: 'улица Табышалиева, 57',
        },
        description: 'Курьером',
        description_delivery: 'Доставка курьером',
    },
    {
        id: 2,
        place: {
            city: 'Бишкек,',
            street: 'улица Жукеева-Пудовкина, 77/1',
        },
        description: 'Курьером',
        description_delivery: 'Доставка курьером',
    },
    {
        id: 3,
        place: {
            city: 'Бишкек, микрорайон Джал,',
            street: 'улица Ахунбаева Исы, 67/1',
        },
        description: 'Курьером',
        description_delivery: 'Доставка курьером',
    },
]


// --- Модальное окно Изменить место доставки ---

// Отображение способа доставки
let selectedPickAdress = pickAddress[0];
let deliveryMethod1 = document.getElementById('delivery-method-1');
let deliveryMethod2 = document.getElementById('delivery-method-2');

deliveryMethod1.innerHTML = pickAddress[0].description;
deliveryMethod2.innerHTML = pickAddress[0].description_delivery;


// Пункт выдачи-1
let modalDeliveryPickAddress1 = document.getElementById('delivery-pick-address-1');
let modalDeliveryRating1 = document.getElementById('delivery-pick-rating-1');
let modalDeliveryPickName1 = document.getElementById('delivery-pick-name-1');

modalDeliveryPickAddress1.innerHTML = `${pickAddress[0].place.city} ${pickAddress[0].place.street}`;
modalDeliveryRating1.innerHTML = pickAddress[0].rating;
modalDeliveryPickName1.innerHTML = pickAddress[0].name;


// Пункт выдачи-2
let modalDeliveryPickAddress2 = document.getElementById('delivery-pick-address-2');
let modalDeliveryRating2 = document.getElementById('delivery-pick-rating-2');
let modalDeliveryPickName2 = document.getElementById('delivery-pick-name-2');

modalDeliveryPickAddress2.innerHTML = `${pickAddress[1].place.city} ${pickAddress[1].place.street}`;
modalDeliveryRating2.innerHTML = pickAddress[1].rating;
modalDeliveryPickName2.innerHTML = pickAddress[1].name;


// Пункт выдачи-3
let modalDeliveryPickAddress3 = document.getElementById('delivery-pick-address-3');
let modalDeliveryRating3 = document.getElementById('delivery-pick-rating-3');
let modalDeliveryPickName3 = document.getElementById('delivery-pick-name-3');

modalDeliveryPickAddress3.innerHTML = `${pickAddress[2].place.city} ${pickAddress[2].place.street}`;
modalDeliveryRating3.innerHTML = pickAddress[2].rating;
modalDeliveryPickName3.innerHTML = pickAddress[2].name;


// Чекбоксы пунктов выдачи
let checkActivePickAddress1 = document.getElementById('checkbox-addresss-1');
let checkFakePickAdress1 = document.getElementById('checkbox-fake-addresss-1');
let checkActivePickAddress2 = document.getElementById('checkbox-addresss-2');
let checkFakePickAdress2 = document.getElementById('checkbox-fake-addresss-2');
let checkActivePickAddress3 = document.getElementById('checkbox-addresss-3');
let checkFakePickAdress3 = document.getElementById('checkbox-fake-addresss-3');

checkActivePickAddress1.addEventListener('click', unCheckActivePickItem1);
checkFakePickAdress1.addEventListener('click', checkActivePickItem1);
checkActivePickAddress2.addEventListener('click', unCheckActivePickItem2);
checkFakePickAdress2.addEventListener('click', checkActivePickItem2);
checkActivePickAddress3.addEventListener('click', unCheckActivePickItem3);
checkFakePickAdress3.addEventListener('click', checkActivePickItem3);

function unCheckActivePickItem1() {
    checkActivePickAddress1.classList.add('hidden');
    checkFakePickAdress1.classList.remove('hidden');
}

function checkActivePickItem1() {
    checkActivePickAddress1.classList.remove('hidden');
    checkFakePickAdress1.classList.add('hidden');
    unCheckActivePickItem2();
    unCheckActivePickItem3();
    selectedPickAdress = pickAddress[0];
    unCheckActiveUserAddress2();
    unCheckActiveUserAddress3();
    unCheckActiveUserAddress1();
}

function unCheckActivePickItem2() {
    checkActivePickAddress2.classList.add('hidden');
    checkFakePickAdress2.classList.remove('hidden');
}

function checkActivePickItem2() {
    checkActivePickAddress2.classList.remove('hidden');
    checkFakePickAdress2.classList.add('hidden');
    unCheckActivePickItem1();
    unCheckActivePickItem3();
    selectedPickAdress = pickAddress[1];
    unCheckActiveUserAddress2();
    unCheckActiveUserAddress3();
    unCheckActiveUserAddress1();
}

function unCheckActivePickItem3() {
    checkActivePickAddress3.classList.add('hidden');
    checkFakePickAdress3.classList.remove('hidden');
}

function checkActivePickItem3() {
    checkActivePickAddress3.classList.remove('hidden');
    checkFakePickAdress3.classList.add('hidden');
    unCheckActivePickItem1();
    unCheckActivePickItem2();
    selectedPickAdress = pickAddress[2];
    unCheckActiveUserAddress2();
    unCheckActiveUserAddress3();
    unCheckActiveUserAddress1();
}


// Адреса пользователя
const userAdress1 = document.getElementById('user-address-1');
const userAdress2 = document.getElementById('user-address-2');
const userAdress3 = document.getElementById('user-address-3');

userAdress1.innerHTML = `${userAddress[0].place.city} ${userAddress[0].place.street}`;
userAdress2.innerHTML = `${userAddress[1].place.city} ${userAddress[1].place.street}`;
userAdress3.innerHTML = `${userAddress[2].place.city} ${userAddress[2].place.street}`;


// Чекбоксы адресов пользователя
let userAddressCheck1 = document.getElementById('user-address-checkbox-1');
let userAddressFakeCheck1 = document.getElementById('user-address-fake-checkbox-1');
let userAddressCheck2 = document.getElementById('user-address-checkbox-2');
let userAddressFakeCheck2 = document.getElementById('user-address-fake-checkbox-2');
let userAddressCheck3 = document.getElementById('user-address-checkbox-3');
let userAddressFakeCheck3 = document.getElementById('user-address-fake-checkbox-3');

userAddressCheck1.addEventListener('click', unCheckActiveUserAddress1);
userAddressFakeCheck1.addEventListener('click', checkActiveUserAddress1);
userAddressCheck2.addEventListener('click', unCheckActiveUserAddress2);
userAddressFakeCheck2.addEventListener('click', checkActiveUserAddress2);
userAddressCheck3.addEventListener('click', unCheckActiveUserAddress3);
userAddressFakeCheck3.addEventListener('click', checkActiveUserAddress3);

function unCheckActiveUserAddress1() {
    userAddressCheck1.classList.add('hidden');
    userAddressFakeCheck1.classList.remove('hidden');
}

function checkActiveUserAddress1() {
    userAddressCheck1.classList.remove('hidden');
    userAddressFakeCheck1.classList.add('hidden');
    unCheckActiveUserAddress2();
    unCheckActiveUserAddress3();
    selectedPickAdress = userAddress[0];
    unCheckActivePickItem1();
    unCheckActivePickItem2();
    unCheckActivePickItem3();
}

function unCheckActiveUserAddress2() {
    userAddressCheck2.classList.add('hidden');
    userAddressFakeCheck2.classList.remove('hidden');
}

function checkActiveUserAddress2() {
    userAddressCheck2.classList.remove('hidden');
    userAddressFakeCheck2.classList.add('hidden');
    unCheckActiveUserAddress1();
    unCheckActiveUserAddress3();
    selectedPickAdress = userAddress[1];
    unCheckActivePickItem1();
    unCheckActivePickItem2();
    unCheckActivePickItem3();
}

function unCheckActiveUserAddress3() {
    userAddressCheck3.classList.add('hidden');
    userAddressFakeCheck3.classList.remove('hidden');
}

function checkActiveUserAddress3() {
    userAddressCheck3.classList.remove('hidden');
    userAddressFakeCheck3.classList.add('hidden');
    unCheckActiveUserAddress1();
    unCheckActiveUserAddress2();
    selectedPickAdress = userAddress[2];
    unCheckActivePickItem1();
    unCheckActivePickItem2();
    unCheckActivePickItem3();
}


// Копки переключения окна + открытие/закрытие
const buttonSelectDevileryCourier = document.getElementById('select-delivery-courier');
const buttonSelectDeliveryPick = document.getElementById('select-delivery-pick');
const deliveryModal = document.getElementById('delivery-modal');
const userAddressContainer = document.getElementById('delivery-user-adsress-container');
const pickAdressContainer = document.getElementById('delivery-pick-adsress-container');

buttonSelectDevileryCourier.addEventListener('click', visibleUserAddressContainer);
buttonSelectDeliveryPick.addEventListener('click', visiblePickAddressContainer);
deliveryModal.addEventListener('click', handleDeliveryOutside);
document.querySelector('.delivery-modal-close').addEventListener('click', closeModalDelivery);
document.querySelectorAll('#open-delivery-modal').forEach((item) => item.addEventListener('click', openModalDelivery));

function visiblePickAddressContainer() {
    userAddressContainer.classList.add('hidden');
    pickAdressContainer.classList.remove('hidden');
    buttonSelectDevileryCourier.classList.remove('delivery-modal-options-button-active');
    buttonSelectDeliveryPick.classList.add('delivery-modal-options-button-active');
}

function visibleUserAddressContainer() {
    userAddressContainer.classList.remove('hidden');
    pickAdressContainer.classList.add('hidden');
    buttonSelectDevileryCourier.classList.add('delivery-modal-options-button-active');
    buttonSelectDeliveryPick.classList.remove('delivery-modal-options-button-active');
}

function openModalDelivery() {
    deliveryModal.style.display = 'flex';
    body.style.overflow = 'hidden';
}

function handleDeliveryOutside(e) {
    const isClickOutside = !!e.target.closest('#delivery-modal-container');

    if (!isClickOutside) {
        closeModalDelivery();
    }
}

function closeModalDelivery() {
    deliveryModal.style.display = 'none';
    body.style.overflow = 'visible';
}


// Изменить место доставки
let deliveryAddress = document.getElementById('delivery-address');
let finalDeliveryAddress = document.getElementById('final-form-deliveri-address');
let pickRating = document.getElementById('pick-rating');
let pickWorkingHours = document.getElementById('pick-working-hours');

deliveryAddress.innerHTML = `${pickAddress[0].place.city} ${pickAddress[0].place.street}`;
pickRating.innerHTML = pickAddress[0].rating;
pickWorkingHours.innerHTML = pickAddress[0].working_hours;
finalDeliveryAddress.innerHTML = pickAddress[0].place.street;


// Подтвердить выбранный пункт выдачи
document.getElementById('submit-delivery-pick').addEventListener('click', submitDeliveryPick);

function submitDeliveryPick() {
    if (selectedPickAdress) {
        deliveryAddress.innerHTML = `${selectedPickAdress.place.city} ${selectedPickAdress.place.street}`;
        finalDeliveryAddress.innerHTML = selectedPickAdress.place.street;

        selectedPickAdress?.rating ? pickRating.innerHTML = selectedPickAdress.rating : pickRating.classList.add('hidden');
        selectedPickAdress?.rating && pickRating.classList.remove('hidden')
        selectedPickAdress?.rating ? document.getElementById('pick-rating-icon').classList.remove('hidden') : document.getElementById('pick-rating-icon').classList.add('hidden');

        selectedPickAdress?.working_hours ? pickWorkingHours.innerHTML = selectedPickAdress.working_hours : pickWorkingHours.classList.add('hidden');
        selectedPickAdress?.working_hours && pickWorkingHours.classList.remove('hidden');
        deliveryMethod1.innerHTML = selectedPickAdress.description;
        deliveryMethod2.innerHTML = selectedPickAdress.description_delivery;
        closeModalDelivery();
    }
}