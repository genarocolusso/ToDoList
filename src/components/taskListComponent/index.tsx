 
import { EmptyTaskListComponent } from './emptyTaskListComponent'
import { TaskComponent } from './taskComponent'

import * as S from './styles'
import { InputTaskComponent } from '../inputTaskComponent'
import { FormEvent, useState } from 'react'

interface task {
  id: number 
  description: string
  checked: boolean
}

export const  TaskListComponent  = ( ) => {

  const [tasks, setTasks] = useState<task[]>([])
  //length mantem o mesmo sempre, mesmo deletando itens. para manter id unico, nao quis usar bibliotecas externas
  const [tasklength, setTasklength] = useState(0)



  const handleAddTask = (event: FormEvent , task: string ) => {
    event.preventDefault();  
       setTasks([...tasks,{id: tasklength, description: task, checked: false}]);
       setTasklength(tasklength + 1);
  } 

  const handleCheckTask = ( id: number ) => { 
      const newTasks = tasks.map(task => task.id === id? {...task, checked:!task.checked} : task); 
      console.log(newTasks, tasks)
      setTasks(newTasks); 
       }

  const onDeleteTask = ( id: number ) => {  
        const newTasks = tasks.filter(task => task.id !== id);  
        setTasks(newTasks); 
         }
       
   
 
  return (
    <S.Wrapper>
      <InputTaskComponent addTask={handleAddTask}/>
      <S.TaskInfos>
        <S.TaskCreated>
          Tarefas criadas <span>{tasks.length}</span>
          </S.TaskCreated>
        <S.TaskCompleted>
          Concluidas <span>{tasks.filter(t=> t.checked).length} de {tasks.length}</span>
          </S.TaskCompleted>
      </S.TaskInfos>
     
       {
       tasks.length>0 && 
          <S.TaskList> {
        tasks.map(t => <TaskComponent key={t.id}
          title={t.description} 
          checked={t.checked} 
          id={t.id} 
          onCheckTask={handleCheckTask} 
          onDeleteTask={onDeleteTask}/>  ).reverse() 
          } 
        </S.TaskList> 
        }
      
       {tasks.length == 0 && <EmptyTaskListComponent/>}
    </S.Wrapper>
  )
}
