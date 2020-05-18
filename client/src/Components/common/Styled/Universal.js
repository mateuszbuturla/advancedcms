import styled from 'styled-components';

export const MainContainer = styled.div`
    width: ${props => props.config.mainContainerSize.size};
    max-width: ${props => props.config.mainContainerSize.maxSize};
    margin: 0 auto;
`;

export const PageHeader = styled.h2`
    font-size: ${props => props.config.pageHeaderFontSize.small};

    @media (min-width: ${props => props.config.breakPoints.medium})
    {
        font-size: ${props => props.config.pageHeaderFontSize.medium};
    }

    @media (min-width: ${props => props.config.breakPoints.big})
    {
        font-size: ${props => props.config.pageHeaderFontSize.big};
    }
`;