import React from 'react'
import { styled } from 'styled-components'
import { InnerLayout } from '../../Styles/Layouts';

const Dashboard = () => {
    return (
        <DashboardStyle>
            <InnerLayout>
                Dashboard
            </InnerLayout>
        </DashboardStyle>
    )
}

const DashboardStyle = styled.div`

`;


export default Dashboard