import React from 'react'
import { styled } from 'styled-components'
import { InnerLayout } from '../../Styles/Layouts';

const Expenses = () => {
    return (
        <ExpensesStyle>
            <InnerLayout>
                Expenses
            </InnerLayout>
        </ExpensesStyle>
    )
}

const ExpensesStyle = styled.div`

`;

export default Expenses