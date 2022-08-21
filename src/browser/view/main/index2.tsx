import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
export const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {}, []);
  return (
    <div>abcde</div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
