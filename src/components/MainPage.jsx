import ReplenishBalance from './ReplenishBalance';
import React from 'react';

function MainPage(props) {
    const { balance } = props;
    const [isModal, setModal] = React.useState(false);
    return (
        <>
            <div>Общий баланс: {balance} рублей</div>
            <div>
                <button onClick={() => setModal(true)}>Пополнить</button>
                <ReplenishBalance
                    isVisible={isModal}
                    title="Пополнение"
                    content={
                        <p>
                            <select>
                                <option>Получение зарплаты</option>
                                <option>Перевод от друга</option>
                                <option>Кэшбек</option>
                                <option>Начисление бонусов</option>
                                <option>Грек вернул долг</option>
                            </select>
                            <div>
                                Сумма:{' '}
                                <input placeholder="Введите сумму"></input>
                            </div>
                        </p>
                    }
                    footer={
                        <>
                            <button onClick={() => setModal(false)}>
                                Подтвердить
                            </button>
                            <button onClick={() => setModal(false)}>
                                Закрыть
                            </button>
                        </>
                    }
                />
                <button>Потратить</button>
            </div>
        </>
    );
}

export default MainPage;
