import styled from 'styled-components';

export const ChangeNameInput = styled.input`
    border: 0px;
    border-bottom: 1px solid ${props => props.config.pageHeaderFontSize.mainColor};
    padding-bottom: 5px;
    margin-top: ${props => props.config.marginTop.small};
`;