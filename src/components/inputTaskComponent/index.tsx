import React, { FormEvent } from 'react'
import * as S from './styles';
import {AiOutlinePlusCircle} from 'react-icons/ai'


interface InputTaskProps { 
  addTask: (e: FormEvent, task: string ) => void;
}

export const InputTaskComponent = ({addTask}: InputTaskProps) => {
  const [newTask, setNewTask] = React.useState('');

   const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setNewTask(e.target.value);
    
      }

  return (
   <S.Container>
    <form onSubmit={(e) => { addTask(e, newTask), setNewTask('')}}> 
    <S.InputTask  placeholder='Adicione uma nova tarefa' name="task" value={newTask} onChange={(e) => handleTaskChange(e)}/>
    <S.AddTaskButton >Criar <AiOutlinePlusCircle/></S.AddTaskButton>
    </form>
    </S.Container>
  )
}
