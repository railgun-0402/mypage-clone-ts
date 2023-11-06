import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import handleCallApi from "../api/PutItem";

const UserInfo = () => {
  // フォームの入力値を格納＆状態管理
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    sex: "1",
  });

  // フォームの各フィールドが変更されたときに呼び出されるハンドラ関数
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // フォームが送信されたときに実行されるハンドラ関数
  const handleSubmit = (e: { preventDefault: () => void }) => {
    // フォームに入力しEnterが押下された際にページがリロードされない
    e.preventDefault();
    console.log(`formData = ${JSON.stringify(formData)}`);

    // apiで入力値をDynamoDBに登録
    handleCallApi(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSex">
          <Form.Label>Sex</Form.Label>
          <Form.Select
            required
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
          >
            <option value="1">男性</option>
            <option value="2">女性</option>
            <option value="3">その他</option>
          </Form.Select>
        </Form.Group>

        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Container>
    </Form>
  );
};

export default UserInfo;
