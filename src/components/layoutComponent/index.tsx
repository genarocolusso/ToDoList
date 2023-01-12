import React, { ReactFragment, ReactNode } from 'react'
import { HeaderComponent } from '../headerComponent'
import { TaskListComponent } from '../taskListComponent'

import * as S from './styles'
 
  
export const LayoutComponent  = () => {
  return (
    <S.Container>
    <HeaderComponent/> 
     <TaskListComponent/>
    </S.Container>
  )
}
