import { useEffect, useRef } from 'react';
import Split from 'react-split';
import { ipcRenderer} from 'electron';
export const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function resize() {
      // const win = remote.getCurrentWindow();
      // const bounds = win.getBounds();
      const bbox = ref.current.getBoundingClientRect();

      // ipcRenderer.send('shit', { x: Math.floor(bounds.x + bbox.x), y: Math.floor(bounds.y + bbox.y), width: Math.floor(bbox.width), height: Math.floor(bbox.height) })

      // ipcRenderer.send('shit', { x: Math.round(bounds.x), y: Math.round(bounds.y), width: Math.round(bbox.width), height: Math.round(bbox.height) })

      ipcRenderer.send('shit', {
        x:Math.floor(bbox.x),
        y:Math.floor(bbox.y),
        width: Math.floor(bbox.width),
        height: Math.floor(bbox.height),
      });
    }

    new ResizeObserver(resize).observe(ref.current);
  }, []);
  return (
    <Split
      sizes={[25, 75]}
      minSize={100}
      expandToMin={false}
      gutterSize={10}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
      color="black"
      style={{ display: 'flex', height: '100%' }}
    >
      <div
        onClick={() => {
          let childWindow = window.open(`${__dirname}/../public/index2.html`);
          childWindow.addEventListener('load', () => {
            let div = document.createElement('div');
          div.textContent  = 'hell o child windwo'
          childWindow.document.body.appendChild(div);
          })
        }}
      >
        abc
      </div>

      <div
        ref={ref}
        style={{ height: '100%' }}
        onClick={() => {
          let childWindow = window.open(`${__dirname}/../public/index2.html`);
          childWindow.addEventListener('load', () => {
            let div = document.createElement('div');
          div.textContent  = 'hell o child windwo'
          childWindow.document.getElementById('root').appendChild(div);
          })
          // ReactDOM.render(<Child win={childWindow} />, div);
        }}
      >
        abc
      </div>
    </Split>
  );
};
