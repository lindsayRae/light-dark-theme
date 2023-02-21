import './App.css';
import { ThemeProvider, useTheme } from './ThemeContext';
import Switch from './Switch';

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === 'light' ? 'black' : 'white',
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === 'light' ? 'black' : 'white',
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        One of the most common use cases for Context is to define a theme for
        your application.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Light Dark Theme Sample Project</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className='Page'>
      <Title>React Context API</Title>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className='App'
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
