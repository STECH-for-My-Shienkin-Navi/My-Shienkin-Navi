import { CssBaseline } from '@mui/material';
import { Router } from './routes/Router';
import { AppProviders } from './providers/AppProviders';

function App() {
  return (
    <AppProviders>
      <CssBaseline />
      <Router />
    </AppProviders>
  );
}

export default App;
