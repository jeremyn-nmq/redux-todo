import { Row, Tag, Checkbox } from 'antd';
import {useState} from 'react';
import {PriorityColorMapping} from "../helper/enums";
import {ITodo} from "../helper/interfaces";
import {useDispatch} from "react-redux";
// import {toggleTodoStatus} from "../redux/actions";
import todoSlice from "../TodoList/todoSlice";
import {TODOACTIONS} from "../helper/constants";

const Todo = ({name, priority, completed, id}:ITodo) => {
    const [checked, setChecked] = useState(completed)
    const dispatch = useDispatch()

    const toggleCheckbox = () => {
        setChecked(!checked);
        // dispatch(toggleTodoStatus(id))
        dispatch(todoSlice.actions[TODOACTIONS.TOGGLE_TODO](id))
    }
    return (
        <Row justify='space-between'
             style={{marginBottom: 3, ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {})}}>
            <Checkbox checked={checked} onChange={toggleCheckbox}> {name} </Checkbox>
            <Tag color={PriorityColorMapping[priority]} style={{ margin: 0 }}> {priority} </Tag>
        </Row>
    )
}

export default Todo