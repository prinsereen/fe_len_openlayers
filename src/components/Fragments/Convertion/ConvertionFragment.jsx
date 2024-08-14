import { useState } from 'react';
import { BigButton } from '../../Element/Button/BigButton';
import ConvertField from '../../Element/Field/ConvertField';

export const ConversionFragment = () => {
    const [activeTab, setActiveTab] = useState('DMS to DD');

    return (
        <div className="border border-gray-300 shadow-lg rounded-lg p-6 mx-4 w-80 bg-white">
            <div className="grid grid-cols-2">
                <BigButton label='DMS to DD' onClick={() => setActiveTab('DMS to DD')} type={activeTab}/>
                <BigButton label='DD to DMS' onClick={() => setActiveTab('DD to DMS')} type={activeTab}/>
            </div>
            <ConvertField type={activeTab}/>
        </div>
    );
};
