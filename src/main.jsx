
import ReactDOM from "react-dom/client"
import React from "react"
import App from "./App";


const rootEl = document.querySelector("#root")
// const h1 = React.createElement("h1", { id: "title" }, "Hoc React khong kho!!!")
// const h3 = [...Array(50).keys()].map((index) =>
//   React.createElement("h3", {}, `item ${index + 1}`),
// );
// const button = React.createElement(
//   "botton",
//   {
//     type: "button",
//     className: "btn",
//     onClick: (e) => {
//       console.log("Hello Bao")
//       e.target.style.color = "red",
//         e.target.style.background = "yellow",
//         e.target.style.border = "2px solid red"
//     }
//   },
//   "Click me"
// )


// const div = React.createElement(
//   "div",
//   {
//     id: "content",
//     className: "content",
//     "data-index": "ahihi", // có gạch ngang đưa dấu nháy vào
//   },
//   "Hello F8",
//   h1,
//   ...h3,
//   button,

// );

// const div = (
//   <div className="content">
//     <h1>Hoc React khong kho</h1>
//     {/* h3*10>{item $} */}
//     <h3>item 1</h3>
//     <h3>item 2</h3>
//     <h3>item 3</h3>
//     <h3>item 4</h3>
//     <h3>item 5</h3>
//     <h3>item 6</h3>
//     <h3>item 7</h3>
//     <h3>item 8</h3>
//     <h3>item 9</h3>
//     <h3>item 10</h3>
//     <button className="btn" onClick={() => {
//       console.log("hello F8")
//     }}>Click ME</button>
//   </div>
// )

// componant
// hàm hoặc class: Viêt hoa ký tự dầu tiên
// const ProducItem = () => {
//   return <h2>Chi tiet san pham</h2>
// }


// const Product = () => {
//   return(
//   <div>
//     <h1>Danh sach san pham</h1>
//     <ProducItem />
//     <ProducItem />
//     <ProducItem />
//     <ProducItem />
//   </div >
//   )
// }

// // ReactDOM.createRoot(rootEl).render(Product());
ReactDOM.createRoot(rootEl).render(<App />);