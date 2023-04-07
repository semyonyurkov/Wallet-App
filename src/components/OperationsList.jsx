import { useSelector } from 'react-redux';

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
    // console.log(filtredList);
    const list = filtredList.map((operation, index) => {
        return (
            <div
                key={index}
            >{`${operation.reason}: ${operation.balance} рублей`}</div>
        );
    });

    return <>{list}</>;
}

export default Operation;
