
import { Form, Input, Button, Checkbox } from 'antd';

export default function CarForm() {

  const handleSubmit = async (formData) => {
    const res = await fetch('/api/cars', {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'appllication/json',
      },
      method: 'POST',
    })
    const result = await res.json()
    console.log(result);
  }

  return (
    <div className='formContainer'>
      <Form
        size='large'
        onFinish={handleSubmit}
        className="formItem"
      >
        <Form.Item
          name="make"
          rules={[
            { required: true, message: 'Please input your make!' },
          ]}
        >
          <Input placeholder="Make" />
        </Form.Item>

        <Form.Item
          name="model"
          rules={[
            { required: true, message: 'Please input your model!' },
          ]}
        >
          <Input placeholder="Model" />
        </Form.Item>

        <Form.Item name="image" >
          <Input placeholder="Image" />
        </Form.Item>

        <Form.Item name="description" >
          <Input.TextArea placeholder="Description" />
        </Form.Item>

        <Button type="primary" htmlType="submit" >
          Create Car
        </Button>
      </Form>
    </div>
  )
}