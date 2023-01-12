import React from 'react'
import * as S from './styles'
import List from '../../../assets/list.svg'
export const EmptyTaskListComponent = () => {
  return (
   <S.Container>
   <S.EmptyListIcon src={List}/>
   <S.Title >Você ainda não tem tarefas cadastradas </S.Title>
   <S.Suggestion>Crie tarefas e organize seus itens a fazer</S.Suggestion>
   </S.Container>
  )
}
