import React from 'react';
import { useState } from 'react';
import { changeBalance } from '../features/Balance/balance-slice';
import { useDispatch } from 'react-redux';
import { addOperation } from '../features/Operations/operations-slice';
import { useSelector } from 'react-redux';
import { Button, Select, Space, InputNumber } from 'antd';

function Modal(props) {
    const { onClose, textButton, options, isNegativOperation } = props;
    const dispatch = useDispatch();
    const [summ, setSumm] = useState(0);
    const [reason, setReason] = useState(options[0].value);
    const [visible, setVisible] = useState(false);
    const balance = useSelector((state) => state.balance);

    function reasonSetting(value) {
        setReason(`${value}`);
    }

    function balanceSetting(value) {
        setSumm(value);
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

    const list = options.map((option) => {
        return {
            value: option.value,
            label: option.label,
        };
    });

    return (
        <div>
            <Button
                style={{
                    width: 250,
                    height: 80,
                    fontSize: 22,
                }}
                onClick={() => setVisible(true)}
            >
                {textButton}
            </Button>
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
                                        <Select
                                            className="modal-select"
                                            value={reason}
                                            onChange={reasonSetting}
                                            options={list}
                                        ></Select>
                                        <div>
                                            <InputNumber
                                                className="modal-input"
                                                min={0}
                                                placeholder="Введите сумму"
                                                type="number"
                                                value={summ}
                                                onChange={balanceSetting}
                                            ></InputNumber>
                                        </div>
                                        <Space>
                                            <Button
                                                className="modal-button-submit"
                                                type="primary"
                                                htmlType="submit"
                                            >
                                                Подтвердить
                                            </Button>
                                            <Button
                                                className="modal-button-close"
                                                type="primary"
                                                onClick={() =>
                                                    setVisible(false)
                                                }
                                            >
                                                Закрыть
                                            </Button>
                                        </Space>
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
