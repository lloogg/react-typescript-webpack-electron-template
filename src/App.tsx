import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor';
import Eff from './components/Eff';
import Example from './components/Example';
import Ref from './components/Ref';
import Width from './components/Width';
import Memo from './examples/Memo';
const App = () => {
  return (
    <div
      onClick={() => {
        let childWindow = window.open(`${__dirname}/../public/scope.html`);
        let div = document.createElement('div');
        childWindow.document.body.appendChild(div);
        // ReactDOM.render(<Child win={childWindow} />, div);
      }}
    >
      abc
    </div>
  );
};

export default App;
