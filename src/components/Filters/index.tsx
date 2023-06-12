import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import {PRIORITY, PriorityColorMapping, STATUS} from "../helper/enums";
import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {priorityFilterChange, searchFilterChange, statusFilterChange} from "../redux/actions";

const {Search} = Input

const Filters = () => {
    const [searchValue, setSearchValue] = useState('')
    const [statusValue, setStatusValue] = useState(STATUS.ALL)
    const [priorityValue, setPriorityValue] = useState([])
    const dispatch = useDispatch()

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        dispatch(searchFilterChange(e.target.value))
    }

    const handleStatusChange = (e: any) => {
        setStatusValue(e.target.value)
        dispatch(statusFilterChange(e.target.value))
    }

    const handlePriorityChange = (value: any) => {
        setPriorityValue(value)
        dispatch(priorityFilterChange(value))
    }

    return (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
                    Search
                </Typography.Paragraph>
                <Search placeholder='input search text' value={searchValue} onChange={handleSearchChange}/>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={statusValue} onChange={handleStatusChange}>
                    <Radio value={STATUS.ALL}>{STATUS.ALL}</Radio>
                    <Radio value={STATUS.COMPLETE}>{STATUS.COMPLETE}</Radio>
                    <Radio value={STATUS.TODO}>{STATUS.TODO}</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    value={priorityValue}
                    onChange={handlePriorityChange}
                    style={{ width: '100%' }}>
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
            </Col>
        </Row>
    )
}

export default Filters