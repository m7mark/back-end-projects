
import { message, Form, Input, List } from 'antd';
import { useState } from 'react';
import { Image } from 'antd';

export default function SearchForm() {

  const [hits, setHits] = useState([]);

  const search = async ({ q }) => {
    setHits([])
    if (q.length > 2) {
      try {
        const params = new URLSearchParams({ q })
        const res = await fetch('/api/search?' + params)
        const result = await res.json()
        setHits(result['cars'])
      } catch (e) {
        message.error(`Network error ${e?.message}`)
      }
    }
  }

  return (
    <div className='formContainer'>
      <Form
        size='large'
        onValuesChange={search}
        className="formItem"
      >
        <Form.Item
          name="q"
        >
          <Input placeholder="Start type ..." />
        </Form.Item>
      </Form>
      <div>
        <List
          size='large'
          itemLayout="horizontal"
          dataSource={hits}
          renderItem={item => (
            <List.Item
              extra={
                <Image
                  width={72}
                  alt="image car"
                  src={
                    item.image
                      ? item.image
                      : 'https://urunresim.urunilani.com/resimdisk/bmw-bmw-5-serisi-525d-xdrive-pure-otomatik.jpg'
                  }
                />
              }
            >
              <List.Item.Meta
                title={<p>{item.make} {item.model}</p>}
                description={
                  item.description
                    ? item.description.substring(0, 15) + '...'
                    : ''
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}