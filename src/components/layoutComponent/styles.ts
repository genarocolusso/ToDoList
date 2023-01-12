import styled from "styled-components";

export const Container = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;   
  background: ${props => props.theme.gray600};
  color: #fff;
  min-height: 100vh;
  `