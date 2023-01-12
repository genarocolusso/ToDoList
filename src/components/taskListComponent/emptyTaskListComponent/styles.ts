import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;  
border-top:1px solid ${props => props.theme.gray400};
padding-top: 3rem;
  `
 
export const EmptyListIcon = styled.img`
width:4.66rem;
height: 4.66rem;
margin: 1rem;
`
export const Title = styled.div`
font-weight: bold;
color: ${(props) => props.theme.gray300};  
line-height: 140%;
`
export const Suggestion = styled.div`
color: ${(props) => props.theme.gray300}; 
line-height: 140%;

`