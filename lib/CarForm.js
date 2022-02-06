
import { Form, Input, Button, Checkbox } from 'antd';

export default function CarForm() {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const formData = Object.fromEntries(form.entries())
    console.log(formData);
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
    <Form onSubmit={handleSubmit}>
      <Input name='make' type='text' />
      <Input name='model' type='text' />
      <Input name='image' type='text' />
      <Input name='description' type='text' />

      <Button type='submit'>Create Car</Button>
    </Form>
  )
}