function NameList1() {
    const arrOfReplName = [
        {
            value: 'Получение зарплаты',
            text: 'Получение зарплаты',
        },
        {
            value: 'Перевод от друга',
            text: 'Перевод от друга',
        },
        {
            value: 'Кэшбек',
            text: 'Кэшбек',
        },
        {
            value: 'Начисление бонусов',
            text: 'Начисление бонусов',
        },
    ];
    return arrOfReplName;
}

function NameList2() {
    const arrOfSpendName = [
        {
            value: 'Покупка в магазине',
            text: 'Покупка в магазине',
        },
        {
            value: 'Оплата штрафа',
            text: 'Оплата штрафа',
        },
        {
            value: 'Оплата коммуналок',
            text: 'Оплата коммуналок',
        },
        {
            value: 'Перевод другу',
            text: 'Перевод другу',
        },
    ];
    return arrOfSpendName;
}

function NameOption() {
    const optionsList = [
        {
            value: 'all',
            text: 'Все',
        },
        {
            value: 'replenish',
            text: 'Получение',
        },
        {
            value: 'spending',
            text: 'Траты',
        },
    ];
    return optionsList;
}

export { NameList1, NameList2, NameOption };
