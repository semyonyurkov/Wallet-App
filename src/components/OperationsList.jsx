import { useSelector } from 'react-redux';
import { Divider, List } from 'antd';

function Operation(props) {
    const { option } = props;
    const operations = useSelector((state) => state.operations);
    const filtredList = operations.filter((operation) => {
        if (option === 'all') {
            return operation;
        } else if (option === 'replenish') {
            return operation.isNegativOperation === false;
        } else if (option === 'spending') {
            return operation.isNegativOperation === true;
        }
    });
    const list = filtredList.map((operation, index) => {
        return (
            <div className="operations-container">
                <div
                    className="operations-reason"
                    key={index}
                >{`${operation.reason}`}</div>
                <div className="operations-summ">{`${operation.balance} рублей`}</div>
            </div>
        );
    });

    return (
        <>
            <Divider orientation="left"></Divider>
            <div className="info-container">
                <div className="info-type">Тип операции</div>
                <div className="info-summ">Сумма</div>
            </div>
            <List
                className="list"
                size="large"
                bordered
                dataSource={list}
                renderItem={(item) => (
                    <List.Item className="operations-list">{item}</List.Item>
                )}
            />
        </>
    );
}

export default Operation;
