import React from 'react'
import { styled } from 'styled-components'
import { useGlobalContext } from '../../Context/GlobalContext';
import { InnerLayout } from '../../Styles/Layouts';
import Form from '../Form/Form';

const Incomes = () => {

    const {addIncomes} = useGlobalContext()

    return (
        <IncomesStyle>
            <InnerLayout>
                <h2>
                    Incomes
                </h2>
                <div className='income-content'>
                    <div className='form-container'>
                        <Form/>
                    </div>
                    <div className='incomes'></div>
                </div>
            </InnerLayout>
        </IncomesStyle>
    )
}

const IncomesStyle = styled.div`

`;

export default Incomes