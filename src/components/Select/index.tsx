import React from 'react'
import {Div} from './styles';

import Select from 'react-select';

function SelectText() {

    const options = [
        /* Mudar nomes depois */
        { value: 'idCrescente', label: 'Menor número primeiro'},
        { value: 'idDescrente', label: 'Maior número primeiro'},
        { value: 'az', label: 'A-Z'},
        { value: 'za', label: 'Z-A'},
      ];

    return (
        <Div>
            <h2>Hello world</h2>
            <Select
            className="basic-single"
            classNamePrefix="Selecione um filtro"
            name="filter"
            
            options={options}
            />
        </Div>
    )

}

export default SelectText;