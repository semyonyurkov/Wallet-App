import Modal from './Modal';
import React, { useState } from 'react';

function MainPage(props) {
    const operationsSetting = props;
    const [modal, setModal] = useState(false);
    return (
        <>
            <div>Общий баланс: 0 рублей</div>
            <div>
                <button onClick={() => setModal(true)}>Пополнить</button>
                <Modal
                    isVisible={modal}
                    setModal={setModal}
                    operationsSetting={operationsSetting}
                />
            </div>
        </>
    );
}

export default MainPage;
