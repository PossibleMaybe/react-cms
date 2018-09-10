import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Button, Select, Form, Input, Icon, Table} from 'antd';

@inject('notification')
@observer
class Page1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            showHideForm: false,
        }

    }

    componentDidMount() {
        console.log('page1 did mounted');

        //this.props.common.fetchData();

        // this.props.history.push('/login')
    }

    handleInputChanage = (e) => {
        let { value } = e.target;
        this.setState({
            inputValue: value
        })
    }

    handleChange = (value) => {
        console.log(value);
    }

    //点击更多
    showMore = () => {
        let {hideForm} = this.state;
        this.setState({
            hideForm: !hideForm,
        })
    }

    renderSearchForm = () => {
        const {notification} = this.props;
        const {hideForm} = this.state;
        console.log(notification, 'notification');
        const FormItem = Form.Item;
        const Option = Select.Option;

        return (
            <div className="search-form-wrapper">

                <div className="search-form-show">
                    <Form layout="inline">
                        <FormItem>
                            <Select defaultValue="beizhu" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="beizhu">备注</Option>
                                <Option value="lucy">创建人</Option>
                            </Select>
                        </FormItem>

                        <FormItem>
                            <Input placeholder="请输入备注/创建人进行搜索" style={{width: '300px'}} />
                        </FormItem>

                        <FormItem>
                            <Button onClick={this.showMore} type="primary">更多</Button>
                        </FormItem>
                    </Form>

                </div>
                {hideForm?
                    <div className="search-form-hide">
                        <Form layout="inline">
                            <FormItem label="消息类型：">
                                <Select defaultValue="beizhu" style={{ width: 300 }} onChange={this.handleChange}>
                                    <Option value="beizhu">备注</Option>
                                    <Option value="lucy">创建人</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="推送类型：">
                                <Select defaultValue="beizhu" style={{ width: 300 }} onChange={this.handleChange}>
                                    <Option value="beizhu">备注</Option>
                                    <Option value="lucy">创建人</Option>
                                </Select>
                            </FormItem>
                        </Form>
                        <Form layout="inline">
                            <FormItem label="状态：">
                                <Select defaultValue="beizhu" style={{ width: 300 }} onChange={this.handleChange}>
                                    <Option value="beizhu">备注</Option>
                                    <Option value="lucy">创建人</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="推送时间：">
                                <Select defaultValue="beizhu" style={{ width: 300 }} onChange={this.handleChange}>
                                    <Option value="beizhu">备注</Option>
                                    <Option value="lucy">创建人</Option>
                                </Select>
                            </FormItem>
                        </Form>
                    </div>
                    :null}

            </div>
        )
    }

    renderTable = () => {
        const dataSource = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }];

        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        }];
        return (
            <div className="table-container">
                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
    }

    render() {
        console.log(this.props.history)
        return (
            <div className="notification">
                {this.renderSearchForm()}
                {this.renderTable()}
            </div>
        )
    }
}

export default Page1;
