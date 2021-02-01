import React from "react";
import { Form, Input, Button } from "antd";
import { forgotPasswordForm } from "../util/authApi";

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

const resetPassword = (props) => {
	const onFinish = (values) => {
		forgotPasswordForm(values);
		//     console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div
			style={{
				borderRadius: "10px",
				minPadding: "20px 50px 0 0",
				height: "30%",
				width: "30%",
				position: "absolute",
				margin: "auto",
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
			}}
		>
			<h1
				style={{
					textAlign: "center",
					padding: "10px",
					color: "#7A7E81",
				}}
			>
				Enter registered Email!
			</h1>
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
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: "Please input the registered Email!",
						},
					]}
				>
					<Input />
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

export default resetPassword;
