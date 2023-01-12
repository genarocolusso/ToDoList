import styled from "styled-components";
import radio from "../../../assets/radio.svg";
import radiohover from "../../../assets/radiohover.svg";
import radiochecked from "../../../assets/radiochecked.svg";
import radiocheckedhover from "../../../assets/radiocheckedhover.svg";
import trash from "../../../assets/trash.svg";


 
type checktaskProps = {
    checked?: boolean; 
}

export const CheckTask = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-size: cover; 
`
 
export const TaskDescription = styled.div`
font-size: 0.875rem;
line-height: 1.225rem;
`

export const Container = styled.div<checktaskProps>`
display: flex;
flex-direction: row; 
padding: 1rem; 
width: 100%;
min-height: 4.5rem; 
background: ${props=> props.theme.gray500}; 
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
border-radius: 0.5rem; 
justify-content: space-between; 

${CheckTask}{ 
    background-image: url(${props=> props.checked ? radiochecked : radio}); 
}
${TaskDescription}{
   text-decoration:  ${props=> props.checked ? "line-through" : "none"};
   color: ${props=> !props.checked? props.theme.white : props.theme.gray300} ; 
    }
&:hover  { 
    cursor: pointer;
    ${CheckTask}{
    background-image: url(${props=> props.checked ? radiocheckedhover : radiohover}); 
    }
     
}  
  `

 export const TaskCheckGroup = styled.div`
 display: flex;
 gap: 0.875rem; 
 flex-direction: row;
 justify-content: flex-start;
 ` 
 export const TaskDelete = styled.div`
    display: flex; 
    width: 1.5rem;
    height: 1.5rem; 
    > svg {
    fill: ${props => props.theme.gray300}; 
    &:hover{ 
    fill: ${props => props.theme.danger}; 
    }
    }
     
 `