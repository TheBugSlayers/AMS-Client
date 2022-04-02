import React from 'react'
import styled from 'styled-components'
import AdminDashboardCard from '../AdminDashboardCard';
import Card from '../globalComps/EventCard';

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 2em 7em;

.titleDiv{
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #4D4D4D;
    margin: 1em 0;
    padding-top: 2em;
    }
`;

const StyledCardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
`;

const OrganizerDash = () => {

    const list = [1, 2, 3, 4, 5, 6, 7, 4];
    return (
        <StyledContent>
            <AdminDashboardCard />

            <div className='titleDiv'>My Events</div>
            <StyledCardDiv>
                <Card />
                {list.map(() => {
                    return <Card />
                })}
            </StyledCardDiv>

        </StyledContent>
    )
}

export default OrganizerDash