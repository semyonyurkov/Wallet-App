import { useState } from 'react';
import OperationsList from '../components/OperationsList';
import { optionsList } from '../const/NameList';

function OperationsPage() {
    const [option, setOption] = useState(optionsList[0].value);
    const list = optionsList.map((option, index) => {
        return (
            <option key={index} value={option.value}>
                {option.text}
            </option>
        );
    });

    function changingOption(event) {
        setOption(event.target.value);
    }
    return (
        <>
            <div>История операций</div>
            <div>
                <select value={option} onChange={changingOption}>
                    {list}
                </select>
            </div>
            <OperationsList option={option} />
        </>
    );
}

export default OperationsPage;
