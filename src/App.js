import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { StepBackwardOutlined } from '@ant-design/icons';
import Img from './image/app.png';

export default function App () {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const changeModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <div>
      <Button type="primary" onClick={ changeModal }>
        Open Modal
        <StepBackwardOutlined />
      </Button>
      <img src={ Img } />
      <div className="test">aaa</div>
      <Modal title="Basic Modal" visible={ isModalVisible } onCancel={ changeModal }>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
