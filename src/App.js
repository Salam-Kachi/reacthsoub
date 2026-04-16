import "./App.css";
import Title from "./Title";
import Text from "./Text";

function App() {
  return (
    <div className="App">
      <Title title="اكاديمية حسوب" />
      <Text text="مرحبا بكم في أكاديمية حسوب">
        <h3>تهدف موسوعة حسوب إلى توفير محتوى تعليمي متنوع وعالي الجودة لجميع المستخدمين.</h3>
      </Text>
    </div>
  );
}

export default App;
