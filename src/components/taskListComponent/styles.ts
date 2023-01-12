import styled from "styled-components";


export const Wrapper = styled.div` 

width: 46rem;
display: flex;
flex-direction: column; 

@media (max-width: 768px) {
    width: 100%;
   padding: 0rem 2rem;
  }

`
export const TaskInfos = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
font-weight: bold;
font-size: 0.875rem;
margin-bottom: 1.5rem;

`
export const TaskCreated = styled.div`
color: ${props => props.theme.blue};
 
span{
    color: white;
    padding:  0.125rem 0.5rem;
    background-color: ${props => props.theme.gray400};
    border-radius: 999px;
    font-weight: bold;
}

`;

export const TaskCompleted = styled.div`

color: ${props => props.theme.purple};
 
span{
    color: white;
    padding: 0.125rem 0.5rem;
    background-color: ${props => props.theme.gray400};
    border-radius: 999px;
    font-weight: bold;
    
} 

`;

export const TaskList = styled.div`
display: flex;
 
flex-direction: column;
gap: 0.875rem;
`

