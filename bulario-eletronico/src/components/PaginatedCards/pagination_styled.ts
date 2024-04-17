import styled from "styled-components";

interface PageButtonProps {
  active: 'true' | 'false';
}

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 50px;
`;

export const PageButton = styled.button<PageButtonProps>`
    padding: 15px 25px;
    margin: 0 5px;
    background-color: ${(props) => (props.active === 'true' ? 'var(--green-primary)' : '#ffffff')};
    color: ${(props) => (props.active === 'true' ? '#ffffff' : 'var(--green-primary)')};
    border: 1px solid var(--green-primary);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: var(--green-primary);
      color: #ffffff;
    }
`;

export const CardSection = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
export const Filters = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;
`