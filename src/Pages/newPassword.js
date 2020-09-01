import React from "react";
import { Form, Input, Button } from "antd";
import {newPasswordForm} from '../util/authApi'


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const newPassword= (props) => {
  const onFinish = values => {
	 
	  const payload={
		userId:props.match.params.user,
		token:props.match.params.token,
		password:values.password
	  }
      newPasswordForm(payload);
     //console.log('Success:', payload);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{
      borderRadius:"10px",
      padding:"20px 50px 0 0",
      height:"40%",
    width:"50%",
    position: "absolute",
    margin: "auto",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
    }}>
     <h1 style={{textAlign:"center",padding:"20px"}}>Reset Password</h1>
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
       <Form.Item
        name="password"
        label="New Password"
        rules={[
          {
            required: true,
            message: 'Please input your new password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default newPassword;