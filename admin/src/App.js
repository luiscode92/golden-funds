
import './App.css';
import React, {useEffect, useState} from 'react'
import {
  Form,
  Input,
  Button,
} from 'antd';
import { addData } from './firebase';

function App() {
  const [id, setId] = useState("");
  const [link, setLink] = useState("");
  const [email, setEmail] = useState("");

  const onFinish = () => {
    addData(id, link, email)
  }
  return (
    <div className="App">
      <Form
        name='useForm'
        size={"large"}
        onFinish={onFinish}
      >
        <Form.Item label="Id" name="id" value={id} onChange={(e) => setId(e.target.value)} >
          <Input />
        </Form.Item>
        <Form.Item label="link" name="link" value={link} onChange={(e) => setLink(e.target.value)}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit'>nuevo</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
