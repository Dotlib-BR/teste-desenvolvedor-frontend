import styled from "styled-components";

//Types
import { IRowProps } from "./list.types";

export const Table = styled.table`
  width: 100%;
  padding: 10px;
`;

export const Header = styled.thead`
  color: ${(props) => props.theme.primary};
`;

export const Row = styled.tr<IRowProps>`
  display: flex;
  justify-content: space-between;

  padding: 20px;
  gap: 30px;

  border-radius: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.header ? "" : props.theme.quartiary)};
  }
`;

export const THeader = styled.th`
  border-radius: 10px;
`;

export const TBody = styled.tbody`
  height: 300px;

  display: flex;
  flex-direction: column;
  gap: 3px;

  overflow-y: scroll;
  border-radius: 10px;
`;

export const TData = styled.td`
`;

export const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  font-size: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
`;
