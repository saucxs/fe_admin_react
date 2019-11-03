import React, {useState, useEffect, useCallback} from 'react';
import {Table, Select, Input, Button, Row, Col,} from "antd";
import styles from './index.css'
import TableSpecial from '../components/tables/index'
import axios from 'axios';

export default function() {
  const { Option } = Select;
  const { Search } = Input;
  const [searchKey, setSearchKey] = useState('');
  const [status, setStatus] = useState('1');

  const checkStatus = (value: any) => {
    setStatus(value);

  };
  const searchChange = (value: any) => {
    setSearchKey(value);
  };

  const newRepulsion = (type: any) => {

  };
  const statusSelect = (
    <Select defaultValue={status} style={{ width: 120 }} onChange={checkStatus}>
      <Option value="1">使用中</Option>
      <Option value="0">已下线</Option>
    </Select>
  )
  const searchInput = (
    <Search
      defaultValue={searchKey}
      className="input-search-style"
      placeholder="请输入互斥组ID、名称、描述搜索"
      onSearch={searchChange}
      style={{ width: 240, marginLeft: 10 }}
    />
  );
  const addRepulsion = (
    <Button
      type="primary"
      icon="plus"
      onClick={newRepulsion('new')}
    >
      新建互斥组
    </Button>
  );
  const columns = [
    {
      title: 'userID',
      dataIndex: 'user_id',
    },
    {
      title: 'IP地址',
      dataIndex: 'ip',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '内容',
      dataIndex: 'content',
    },
  ]
  return (
    <div className={styles.box_content}>
      <Row style={{ marginTop: 16 }}>
        <Col span={20} style={{ textAlign: 'left' }}>
          {statusSelect}
          {searchInput}
        </Col>
        <Col span={4} style={{ textAlign: 'right' }}>
          {addRepulsion}
        </Col>
      </Row>
      <TableSpecial id={'saucxs'}  status={status} searchKey={searchKey} newRepulsion={newRepulsion}/>
    </div>
  );
}
