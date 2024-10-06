import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Container from '../../Components/Container'
import TextComponent from '../../Components/TextComponent'
import SpaceComponent from '../../Components/SpaceComponent'
import { TaskModel } from '../../models/TaskModel'
import InputComponent from '../../Components/InputComponent'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SectionComponent from '../../Components/SectionComponent'

const initValue: TaskModel ={
    title: '',
    description: '',
    dueDate: new Date(),
    star: new Date(),
    end: new Date(),
    uids: [],
    fileUrls: []
}
const AddNewTask = ({navigation}:any) => {

    const [taskDetail, setTaskDetail] = useState<TaskModel>(initValue);
    const handleChangeValue = (id:string, value: string) => {
      const item: any ={...taskDetail}
      item[`${id}`] = value
      setTaskDetail(item)
    }
    const handleAddNewTask = async () => {
      console.log(taskDetail)
    }

  return (
    <Container back title='Add New Screen'>
     <SectionComponent>
        <InputComponent 
          value={taskDetail.title}
          onChange={(val)=>handleChangeValue('title',val)}
          title='Title'
          allowClear
          placeholder='Title of task'
        />
        <InputComponent 
          value={taskDetail.description}
          onChange={(val)=>handleChangeValue('description',val)}
          title='Description'
          allowClear
          placeholder='Title of task'
          multible
          numberOfLine={3}
        />
     </SectionComponent>
     <SectionComponent>
      <Button title='Save' onPress={handleAddNewTask}/>
     </SectionComponent>
    </Container>
  )
}

export default AddNewTask