function Operation(props) {
    const { operations, option } = props;

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
            <div
                key={index}
            >{`${operation.reason}: ${operation.balance} рублей`}</div>
        );
    });

    return <>{list}</>;
}

export default Operation;
