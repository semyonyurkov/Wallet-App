import { useState } from 'react';
import OperationsList from '../components/OperationsList';
import { optionsList } from '../const/NameList';
import { Select, Space } from 'antd';

function OperationsPage() {
    const [option, setOption] = useState(optionsList[0].value);

    const list = optionsList.map((option) => {
        return {
            value: option.value,
            label: option.label,
        };
    });

    function changingOption(value) {
        setOption(`${value}`);
    }
    return (
        <>
            <div>История операций</div>
            <div>
                <Space>
                    <Select
                        style={{
                            width: 150,
                        }}
                        value={option}
                        onChange={changingOption}
                        options={list}
                    ></Select>
                </Space>
            </div>
            <OperationsList option={option} />
        </>
    );
}

export default OperationsPage;
