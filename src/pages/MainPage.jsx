import Modal from '../components/Modal';
import { useSelector } from 'react-redux';
import { selectBalance } from '../features/Balance/balance-slice';
import { arrOfReplName, arrOfSpendName } from '../const/NameList';

function MainPage() {
    const currentBalance = useSelector((state) => state.balance);
    const balance = useSelector((state) =>
        selectBalance(state, currentBalance)
    );
    return (
        <>
            <div>Общий баланс: {balance} рублей</div>
            <div>
                <Modal
                    textButton={'Пополнить'}
                    options={arrOfReplName}
                    isNegativOperation={false}
                />
                <Modal
                    textButton={'Потратить'}
                    options={arrOfSpendName}
                    isNegativOperation
                />
            </div>
        </>
    );
}

export default MainPage;
