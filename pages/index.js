import CarForm from "../lib/CarForm";

export default function Home() {
  return (
    <>
      <div className="App">
        <div className="header"></div>
        <div className="tabWrapper">
          <div className="tabContainer">
            <h1>Create a Car</h1>
            <CarForm />
          </div>
        </div>
      </div>
    </>
  )
}
