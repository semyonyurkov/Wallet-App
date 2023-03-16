import Modal from './Modal';

function MainPage(props) {
    const { addOperations, changeBalance, balance } = props;
    const arrOfReplName = [
        {
            value: 'receiving a salary',
            text: 'Получение зарплаты',
        },
        {
            value: 'transfer from friend',
            text: 'Перевод от друга',
        },
        {
            value: 'cashback',
            text: 'Кэшбек',
        },
        {
            value: 'bonus accrual',
            text: 'Начисление бонусов',
        },
    ];
    const arrOfSpendName = [
        {
            value: 'shop purchase',
            text: 'Покупка в магазине',
        },
        {
            value: 'payment of the penalty',
            text: 'Оплата штрафа',
        },
        {
            value: 'payment for utilities',
            text: 'Оплата коммуналок',
        },
        {
            value: 'transfer to a friend',
            text: 'Перевод другу',
        },
    ];

    return (
        <>
            <div>Общий баланс: {balance} рублей</div>
            <div>
                <Modal
                    addOperations={addOperations}
                    textButton={'Пополнить'}
                    options={arrOfReplName}
                    changeBalance={changeBalance}
                    isNegativOperation={false}
                />
                <Modal
                    addOperations={addOperations}
                    textButton={'Потратить'}
                    options={arrOfSpendName}
                    changeBalance={changeBalance}
                    isNegativOperation={true}
                    balance={balance}
                />
            </div>
        </>
    );
}

export default MainPage;
