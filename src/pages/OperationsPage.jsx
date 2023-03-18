import { useState } from 'react';
import OperationsList from '../components/OperationsList';
import { NameOption } from '../const/NameList';

function OperationsPage(props) {
    const { operations } = props;
    const arrOfOptionName = NameOption();
    const [option, setOption] = useState(arrOfOptionName[0].value);

    const list = arrOfOptionName.map((option, index) => {
        return (
            <option key={index} value={option.value}>
                {option.text}
            </option>
        );
    });

    function changingOption(event) {
        setOption(event.target.value);
    }
    console.log(option);
    return (
        <>
            <div>История операций</div>
            <div>
                <select value={option} onChange={changingOption}>
                    {list}
                </select>
            </div>
            <OperationsList option={option} operations={operations} />
        </>
    );
}

export default OperationsPage;
