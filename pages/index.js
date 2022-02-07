import CarForm from "../lib/CarForm";
import SearchForm from "../lib/SearchForm";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default function Home() {
  return (
    <>
      <div className="App">
        <div className="header"></div>
        <div className="tabWrapper">
          <div className="tabContainer">
            <Tabs size='large' defaultActiveKey="1" centered>
              <TabPane tab="Create Car" key="1">
                <h1>Create a Car</h1>
                <CarForm />
              </TabPane>
              <TabPane tab="Search Cars" key="2">
                <SearchForm />
              </TabPane>
            </Tabs>

          </div>
        </div>
      </div>
    </>
  )
}
