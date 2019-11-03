import React, {useState, useEffect, useCallback} from 'react';
import {Table} from "antd";
import axios from 'axios';

const Tables = (props: any) => {
  const {id, status, searchKey, newRepulsion} = props;
  // console.log(id, 'a', status, 'b', searchKey, 'c', newRepulsion, 'd');
  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [status, searchKey]);
  const fetchData = async () => {
    setLoading(true);
    const result = await axios('https://chat.chengxinsong.cn/api/chat/get_feedback?page=1&pageNum=50')
    setTableData(result.data.data.feedbackList);
    setLoading(false);
  };
  const updateRepulsion = (record: any) => {
    newRepulsion();
  };
  const updateStatus = (record: any) => {

  };
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
    {
      title: '操作',
      key: 'operation',
      render: (record: any) => (
        <span>
          {/* tslint:disable-next-line:jsx-no-lambda */}
          <a style={{ marginRight: 10 }} onClick={() => updateRepulsion(record)}>修改</a>
          {/* tslint:disable-next-line:jsx-no-lambda */}
					<a onClick={() => updateStatus(record)}>
						{record.is_show === 1 ? ('不显示') : ('显示')}
					</a>
        </span>
      ),
    },
  ]
  return (
    <Table
      style={{ marginTop: 16 }}
      bordered={false}
      rowKey={id}
      columns={columns}
      loading={loading}
      dataSource={tableData}
      size='small'
    />
  );
};

export default Tables;
