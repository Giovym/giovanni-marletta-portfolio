import { Fragment } from 'react';
import Header from './components/Header';
import Tecnologies from './components/Tecnologies';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Fragment>
      <Header />
      <Tecnologies />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
