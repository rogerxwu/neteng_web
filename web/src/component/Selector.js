import React, { useState } from 'react';
import { EuiSelect, useGeneratedHtmlId } from '@elastic/eui';

export default function Selector(params) {
    //const [value, setValue] = useState();
    const basicSelectId = useGeneratedHtmlId({ prefix: 'basicSelect' });
    

    




    return <EuiSelect
        id={basicSelectId}
        options={params.options}
        value={params.value}
        onChange={params.onChange}
        aria-label="Use aria labels when no actual label is in use"
    />
}