import Card from "./components/card";
function App() {
  let myObj = {
    username: "Khadija",
    age: 21
  }
  let newArr = [1,2,3]
  return (
    <>
    <h1 className="bg-green-400 p-4 text-black rounded-xl mb-4">Tailwind Test</h1>
    <Card username="Sara" btnText="click me!"/>
    <Card username="Maryam" />

    </>
  );
}

export default App;
