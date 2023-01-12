import styled from "styled-components";

export const Container = styled.div`
   
  form{
    
    display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: -1.5rem;
  margin-bottom: 5rem;
  }
  `

export const InputTask = styled.input`
all: unset;
background-color: ${(props) => props.theme.gray500};  
width: 100%;
border-radius: 0.5rem;
padding: 1rem;
font-size: 1rem;
 
&::-webkit-input-placeholder { /* Edge */
  color:  ${(props) => props.theme.gray300};
}

&:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color:  ${(props) => props.theme.gray300};
}

&::placeholder {
  color:  ${(props) => props.theme.gray300};
}
`

export const AddTaskButton = styled.button`
unset: all;
background-color: ${(props) => props.theme.blueDark};
color: white;
padding: 1rem;
border-radius: 0.5rem;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-size: 0.875rem;
font-weight: bold;
transition: all 0.1s ease-in-out;

svg {
    font-size: 1rem;
margin-left: 0.5rem
}

&:hover{ 
background-color: ${(props) => props.theme.blue};
}

`