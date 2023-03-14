import React from 'react';
import { useState } from 'react';

function Modal(props) {
    const { isVisible, onClose, setModal, operationsSetting } = props;

    const [balance, setBalance] = useState(0);
    const [reason, setReason] = useState();

    function reasonSetting(event) {
        setReason({ value: event.target.value });
    }

    function balanceSetting(event) {
        setBalance(event.target.value);
    }

    function operationSetting() {
        operationsSetting({ reason: reason, balance: balance });
    }

    return !isVisible ? null : (
        <div className="modal" onClick={onClose}>
            <div className="modal-dialog">
                <div className="modal-header">
                    <h3 className="modal-title">Пополнение</h3>
                </div>
                <div className="modal-body">
                    <div className="modal-content">
                        <>
                            <form>
                                <select value={reason} onChange={reasonSetting}>
                                    <option value="receiving a salary">
                                        Получение зарплаты
                                    </option>
                                    <option value="friend's transfer">
                                        Перевод от друга
                                    </option>
                                    <option value="cashback">Кэшбек</option>
                                    <option value="bonus accrual">
                                        Начисление бонусов
                                    </option>
                                </select>
                                <div>
                                    <input
                                        placeholder="Введите сумму"
                                        type="number"
                                        value={balance}
                                        onChange={balanceSetting}
                                    ></input>
                                </div>
                                <button
                                    type="submit"
                                    onSubmit={operationSetting}
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
