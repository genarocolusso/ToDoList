import React from 'react'
import * as S from './styles';
import todoLogo from './../../assets/todoLogo.svg' 
export const HeaderComponent = () => {
  return (
     <S.Wrapper>
      <img src={todoLogo} alt=""/>
     </S.Wrapper>
  )
}
