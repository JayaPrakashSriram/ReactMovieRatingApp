import "./App.css";

export default function D2App() {
  return (
    <div className="App">
      <Day2E3
        names=" A.P.J.K"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-NAO6dFUA5Mo6PTzdViauwqqWUIYgZxaLQ&usqp=CAU"
      />
      <Day2E3
        names=" Vallabai Pattal"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGo_i8n5NZMN-WwNtNsCQpJ-KRwcHrgGz2AQ&usqp=CAU"
      />
      <Day2E3
        names=" Kamarajar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7op1OQ4An0-busy-ZfM70PnUhgY-H3KH8A&usqp=CAU"
      />
    </div>
  );
}

function Day2E1() {
  const name = "Sri ram";
  return (
    <h1>
      My Name is <span className="stl">{name}</span>
    </h1>
  );
}

function Day2E2a(props) {
  const Leaders = props.names;
  return (
    <div>
      <h1>
        Honorable,<span className="stl">{Leaders}</span>
      </h1>
      <h2> {props.text} </h2>
    </div>
  );
}

function Day2E2aa() {
  return <h2> they are some of my favourate persons </h2>;
}

function Day2E2b({ Movies }) {
  return (
    <h2>
      Movie Name: <span className="stl">{Movies}</span>
    </h2>
  );
}

function Day2E2bb() {
  return <h2> they are some of my favourate movies </h2>;
}

function Day2E3(props) {
  return (
    <div>
      <img className="sty" src={props.src} Alt={props.names} />
      <h1>
        Honorable,<span className="stl">{props.names}</span>
      </h1>
    </div>
  );
}

function Sepration() {
  return <h1>----------------------------------</h1>;
}