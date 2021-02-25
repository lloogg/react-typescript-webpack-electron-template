import React from 'react';
import Editor from './components/Editor';
import Eff from './components/Eff';
import Example from './components/Example';
import Ref from './components/Ref';
import Width from './components/Width';
import Memo from './examples/Memo';
const App = () => {
  return (
    <div>
      <Editor />
      <Example />
      {/* <Eff /> */}
      <Width />
      <Ref />
      <hr />
      <Memo />
    </div>
  );
};

export default App;
