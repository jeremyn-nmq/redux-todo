import { Col, Row, Input, Button, Select, Tag, Space } from 'antd';
import Todo from '../Todo';
import {PRIORITY, PriorityColorMapping} from "../helper/enums";
import {useDispatch, useSelector} from "react-redux";
import {ITodo} from "../helper/interfaces";
import {ChangeEvent, useState} from "react";
import {todosRemainingSelector} from "../redux/selectors";
import todoSlice from "./todoSlice";
import {TODOACTIONS} from "../helper/constants";
const { v4: uuidv4 } = require('uuid');


const TodoList = () => {
    const [todoName, setTodoName] = useState('')
    const [todoPriority, setTodoPriority] = useState(PRIORITY.Medium)
    const todoList = useSelector(todosRemainingSelector)
    const dispatch = useDispatch()
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoName(e.target.value)
    }
    const handlePriorityChange = (value:any) => {
        setTodoPriority(value)
    }
    const handleAddBtnClicked = () => {
        let data: ITodo = {
            id: uuidv4(),
            name: todoName,
            completed: false,
            priority: todoPriority
        }
        // dispatch(addTodo(data))
        dispatch(todoSlice.actions[TODOACTIONS.ADD_TODO](data))
        setTodoName('')
        setTodoPriority(PRIORITY.Medium)
    }
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map((todoItem:ITodo) =>
                    <Todo key={todoItem.id} id={todoItem.id} name={todoItem.name} priority={todoItem.priority} completed={todoItem.completed}/>)}
            </Col>
            <Col span={24}>
                <Space.Compact style={{ display: 'flex' }}>
                    <Input value={todoName} onChange={handleInputChange}/>
                    <Select defaultValue={PRIORITY.Medium} value={todoPriority} onChange={handlePriorityChange}>
                        <Select.Option value={PRIORITY.High} label={PRIORITY.High}>
                            <Tag color={PriorityColorMapping[PRIORITY.High]}>{PRIORITY.High}</Tag>
                        </Select.Option>
                        <Select.Option value={PRIORITY.Medium} label={PRIORITY.Medium}>
                            <Tag color={PriorityColorMapping[PRIORITY.Medium]}>{PRIORITY.Medium}</Tag>
                        </Select.Option>
                        <Select.Option value={PRIORITY.Low} label={PRIORITY.Low}>
                            <Tag color={PriorityColorMapping[PRIORITY.Low]}>{PRIORITY.Low}</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleAddBtnClicked}>
                        Add
                    </Button>
                </Space.Compact>
            </Col>
        </Row>
    )
}
export default TodoList