
import { MaterialThemeProvider } from './components/MaterialThemeProvider';
import Index from './pages/Index';

function App() {
  return (
    <MaterialThemeProvider>
      <Index />
    </MaterialThemeProvider>
  );
}

export default App;
