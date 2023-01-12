import React, { FormEvent } from 'react'
import * as S from './styles';
import {TrashIcon} from "./trashIcon"

interface TaskProps{
  id: number;
  title: string;
  checked: boolean;
  onCheckTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export const TaskComponent = ({id,title,checked, onCheckTask,onDeleteTask} : TaskProps) => {
  return (
    <S.Container checked={checked} onClick={(e)=> { e.stopPropagation(),onCheckTask(id)}}>
      <S.TaskCheckGroup  >
      <S.CheckTask /> 
     <S.TaskDescription>{title}</S.TaskDescription>
      </S.TaskCheckGroup>
      
    <S.TaskDelete onClick={(e)=>{ e.stopPropagation(),onDeleteTask(id)}}>  
      <TrashIcon/> 
    </S.TaskDelete>
    </S.Container>
  )
}
