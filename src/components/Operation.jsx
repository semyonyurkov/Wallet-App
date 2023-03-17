// поменять название компонента
// СДелать папку pages
function Operation(props) {
    const { operations } = props;

    const list = operations.map((operation, index) => {
        return (
            <div
                key={index}
            >{`${operation.reason}: ${operation.balance} рублей`}</div>
        );
    });

    return <>{list}</>;
}

export default Operation;
