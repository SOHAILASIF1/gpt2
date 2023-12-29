// Before
// ReactDOM.render(<App />, document.getElementById('root'));

// After
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'

const root = document.getElementById('root');
const rootInstance = createRoot(root);
rootInstance.render(<App/>);
