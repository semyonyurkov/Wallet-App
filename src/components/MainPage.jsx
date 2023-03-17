import Modal from './Modal';
import { NameList1, NameList2 } from '../const/NameList';

function MainPage(props) {
    const { addOperations, changeBalance, balance } = props;
    const arrOfReplName = NameList1();
    const arrOfSpendName = NameList2();
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
                    isNegativOperation
                    balance={balance}
                />
            </div>
        </>
    );
}

export default MainPage;
