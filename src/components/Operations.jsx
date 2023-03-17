import Operation from './Operation';

function Operations(props) {
    const { operations } = props;
    return (
        <>
            <div>История операций</div>
            <div>
                <select>
                    <option value="all">Все</option>
                    <option value="replenish">Получение</option>
                    <option value="spending">Траты</option>
                </select>
            </div>
            <Operation operations={operations} />
        </>
    );
}

export default Operations;
