import ChangingBalance from './ChangingBalance';
import React, { useState } from 'react';

function MainPage() {
    const [balance, setBalance] = useState(0);
    const [isModal, setModal] = useState(false);
    const [data, setData] = useState([]);
    return (
        <>
            <div>Общий баланс: {balance} рублей</div>
            <div>
                <button onClick={() => setModal(true)}>Пополнить</button>
                <ChangingBalance
                    isVisible={isModal} /* переименовать пропс */
                    title="Пополнение"
                    content={
                        <>
                            <form>
                                <select id="loc" name="loc">
                                    <option>Получение зарплаты</option>
                                    <option>Перевод от друга</option>
                                    <option>Кэшбек</option>
                                    <option>Начисление бонусов</option>
                                    <option>Грек вернул долг</option>
                                </select>
                                <div>
                                    <input
                                        placeholder="Введите сумму"
                                        value={balance}
                                        onChange={
                                            (e) => setBalance(e.target.value)
                                            /* Получаем строку, нужен намбер!!!!!!!!! */
                                        }
                                    ></input>
                                </div>
                                <button
                                    type="submit"
                                    onSubmit={(e) => setData(e.target.value)}
                                >
                                    Подтвердить
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setModal(false)}
                                >
                                    Закрыть
                                </button>
                            </form>
                        </>
                    }
                />
            </div>
        </>
    );
}

export default MainPage;
