
import { message, Form, Input, Button } from 'antd';

export default function CarForm() {

  const [form] = Form.useForm()

  const handleSubmit = async (formData) => {
    try {
      const res = await fetch('/api/cars', {
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
      const result = await res.json()
      message.success('Save success')
      form.resetFields()
    } catch (e) {
      message.error(`Network error ${e?.message}`)
    }
  }

  return (
    <div className='formContainer'>
      <Form
        form={form}
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