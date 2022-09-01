import MainLayout from "../../components/MainLayout";

// antd
import React, { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    DatePicker,
    Checkbox,
    Upload,
    Space,
} from 'antd';

const { TextArea } = Input;

export default function About() {
    const [form] = Form.useForm();
    const onSubmit = () => {
        console.log('hi')
      }
    return (
        <MainLayout title={'About'}>
            <h1>Order Page</h1>
            <div>
                <div style={{ padding: 10, maxWidth: 600, margin: '0 auto 0 auto' }}>
                    <Form
                        form={form}
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 24 }}
                        layout="vertical"
                        disabled={false}
                        onFinish={() => onSubmit()}
                        requiredMark={true}
                    >
                        <Form.Item required tooltip="This is a required field">
                            <Radio.Group>
                                <Radio value="NP">{'Нова пошта'}</Radio>
                                <Radio value="UP">{'Укрпошта'}</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item required tooltip="This is a required field">
                            <Input placeholder="Ваше прізвище та імʼя" />
                        </Form.Item>
                        <Form.Item required tooltip="This is a required field">
                            <Select placeholder={'Місто'}>
                                <Select.Option value="IF">{'Івано-Франківськ'}</Select.Option>
                                <Select.Option value="LV">{'Львів'}</Select.Option>
                                <Select.Option value="TN">{'Тернопіль'}</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item required tooltip="This is a required field">
                            <DatePicker style={{ width: '100%' }} placeholder={'Оберіть дату граничного терміну доставки'} />
                        </Form.Item>
                        <Form.Item required tooltip="This is a required field">
                            <TextArea placeholder={'Додаткова інформація'} rows={4} />
                        </Form.Item>
                        <Form.Item valuePropName="fileList" required tooltip="This is a required field">
                            <Space direction="horizontal">
                            <Upload action="/upload.do" listType="picture-card">
                                <div>
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>{'Паспорт спереді'}</div>
                                </div>
                            </Upload>
                            <Upload action="/upload.do" listType="picture-card">
                                <div>
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>{'Паспорт ззаді'}</div>
                                </div>
                            </Upload>
                            </Space>
                        </Form.Item>
                        <Form.Item label="" name="disabled" valuePropName="checked">
                            <Checkbox>{'Я дозволяю зберігати свої дані в маркетингових цілях'}</Checkbox>
                        </Form.Item>
                        <Form.Item label="">
                            <Button size="large" style={{ width: '100%' }} type="primary" htmlType="submit">{'Замовити'}</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </MainLayout>
    )
}
