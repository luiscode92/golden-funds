import { Table } from 'antd'
import React, { useEffect, useState } from 'react';
import {
  query,
  collection,
  onSnapshot,
  where,
  doc,
  getDocs,
  updateDoc,

} from "firebase/firestore";
import { firestore, updateDocEmailSent} from '../firebase'

const UsersTable = () => {
  const [newUsers, setNewUsers] = useState()
  const dataSource = []

  const updateUserDoc = (email) => {
    const q = query(collection(firestore, "users"), where("email", "==", email));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        firestore.collection("users").doc(doc.id).update({emailSent: true});
      });
  })
  }

 // if (newUsers.length === 0) { console.log("Array is empty!") }
  //if (newUsers.length > 0) { console.log(newUsers) }

  useEffect(() => {

    const getTableData = async () => {
      const q = query(collection(firestore, "users"), where("emailSent", "==", false));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data =[]
        querySnapshot.forEach((doc) => {
          data.push(doc.data())
        });
      setNewUsers(data);
    })
    }
    getTableData()

  },[])



 newUsers && newUsers.forEach((user, index) => {
    dataSource.push(
      {
        key: index,
        name: user.name,
        email: user.email,
        password: user.password,
      })
  })


  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Contraseña',
      dataIndex: 'password',
      key: 'password',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      updateDocEmailSent(selectedRows[0].email);
    },
  };
  


  return (
    <div>
      <Table 
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        dataSource={dataSource} 
        columns={columns} 
      />
    </div>
  )
}

export default UsersTable