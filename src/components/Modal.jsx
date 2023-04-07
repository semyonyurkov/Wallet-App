import React from 'react';
import { useState } from 'react';
import { changeBalance } from '../features/Balance/balance-slice';
import { useDispatch } from 'react-redux';
import { addOperation } from '../features/Operations/operations-slice';
import { useSelector } from 'react-redux';

function Modal(props) {
    const { onClose, textButton, options, isNegativOperation } = props;
    const dispatch = useDispatch();
    const [summ, setSumm] = useState(0);
    const [reason, setReason] = useState(options[0].value);
    const [visible, setVisible] = useState(false);
    const balance = useSelector((state) => state.balance);

    function reasonSetting(event) {
        setReason(event.target.value);
    }

    function balanceSetting(event) {
        setSumm(event.target.value);
    }

    function addingBalance(e) {
        e.preventDefault();
        if (isNegativOperation) {
            dispatch(changeBalance(Number(summ * -1)));
        } else {
            dispatch(changeBalance(Number(summ)));
        }
        setVisible(false);
    }

    function isPossibleOperation() {
        if (isNegativOperation && summ > balance) {
            alert('Недостаточно средств');
            return false;
        } else {
            return true;
        }
    }

    function isSummMoreThenZero() {
        if (summ !== '0' && summ !== '' && summ !== 0) {
            return true;
        } else {
            alert('Введите сумму');
            return false;
        }
    }

    function onSubmit(e) {
        if (isPossibleOperation() && isSummMoreThenZero()) {
            e.preventDefault();
            addingBalance(e);
            dispatch(addOperation(reason, summ, isNegativOperation));
            setVisible(false);
            return;
        }
        e.preventDefault();
        return;
    }

    const list = options.map((option, index) => {
        return (
            <option key={index} value={option.value}>
                {option.text}
            </option>
        );
    });

    return (
        <div>
            <button onClick={() => setVisible(true)}>{textButton}</button>
            {!visible ? null : (
                <div className="modal" onClick={onClose}>
                    <div className="modal-dialog">
                        <div className="modal-header">
                            <h3 className="modal-title">{textButton}</h3>
                        </div>
                        <div className="modal-body">
                            <div className="modal-content">
                                <>
                                    <form onSubmit={onSubmit}>
                                        <select
                                            value={reason}
                                            onChange={reasonSetting}
                                        >
                                            {list}
                                        </select>
                                        <div>
                                            <input
                                                placeholder="Введите сумму"
                                                type="number"
                                                value={summ}
                                                onChange={balanceSetting}
                                            ></input>
                                        </div>
                                        <button type="submit">
                                            Подтвердить
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setVisible(false)}
                                        >
                                            Закрыть
                                        </button>
                                    </form>
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
