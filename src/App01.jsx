import Footer from "./components/Footer"
import Header from "./components/Header"

export const App1 = () => {
  const title = "Hoc React khong kho"
  const handleClick = (text) => {
    console.log("Hello F8", text);
  }

  const users = [
    {
      id: 1,
      name: "user 1",
    },
    {
      id: 2,
      name: "user 2",
    },
    {
      id: 3,
      name: "user 3",
    },
  ]


  return (
    <div>
      <Header />
      <h1 style={{
        color: "red",
        fontWeight: "bold",
      }}
      >
        Hoc React khong kho</h1>
      <h3>{title}</h3>
      <button onClick={() => handleClick("Quoc Bao")}>Click Me</button>
      {users.map(({id, name}) => (
        <h3>{name}</h3>
      ))}
      <Footer />
    </div>
  )
}

