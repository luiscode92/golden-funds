 /* eslint-disable */
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Register from '../Register'
const Landing = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  

    return (
    <>
        <Button type="primary" onClick={showModal}>
            Open Modal
        </Button>
        <Modal visible={isModalVisible} footer={null} title={null}>
            <Register />
        </Modal>
    </>
  )


}


export default Landing