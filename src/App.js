import "./App.css";
import Title from "./Title";
import Text from "./Text";

function App() {
  const handleButtonClick = () => {
    console.log("اهلا بالعالم");
  };
  return (
    <div className="App">
      <Title title="اكاديمية حسوب" />
      <Text>
        <h3>
          تهدف موسوعة حسوب إلى توفير محتوى تعليمي متنوع وعالي الجودة لجميع
          المستخدمين.
        </h3>
        <button onClick={handleButtonClick}>انقرني</button>
      </Text>
    </div>
  );
}

export default App;
