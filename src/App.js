import './App.css';
import ImageViewer from './components/ImageViewer';
import DatePicker from './components/DatePicker';
import RangeSlider from './components/RangeSlider';
import Stack from 'react-bootstrap/Stack';

function App() {
  return (
    <div className="App">
      <h2>NASA pics</h2>
      <Stack gap={3}>
        <DatePicker/>
        <RangeSlider/>
      </Stack>
      <ImageViewer/>

    </div>
  );
}

export default App;
