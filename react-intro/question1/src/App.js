//import logo from './logo.svg';
import "./App.css";

function App() {
  const structure = [
    {
      heading: "Mobile Operating System",
      data: [
        { name: "Android", style: "disc" },
        { name: "Blackberry", style: "disc" },
        { name: "iPhone", style: "disc" },
        { name: "windows phone", style: "disc" },
      ],
    },
    {
      heading: "Mobile Manufacturers",
      data: [
        { name: "samsung", style: "square" },
        { name: "HTC", style: "square" },
        { name: "micromax", style: "disc" },
        { name: "Apple", style: "circle" },
      ],
    },
  ];

  return (
    <div className="App">
      {structure.map((e) => {
        return (
          <Heading
            heading={e.heading}
            data={e.data.map((el) => {
              return <li className={el.style}> {el.name}</li>;
            })}
          />
        );
      })}
    </div>
  );
}
function Heading({ heading, data }) {
  return (
    <div>
      <h1>{heading}</h1>
      <ul>{data}</ul>
    </div>
  );
}

export default App;
