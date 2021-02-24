import React from 'react';
import { Graph } from '@antv/x6';
import { ReactShape } from '@antv/x6-react-shape';
const Editor = () => {
  const graph = new Graph({
    container: document.getElementById('container'),
    grid: true,
  });
  const source = graph.addNode({
    x: 300,
    y: 40,
    width: 80,
    height: 40,
    label: 'Hello',
  });
  const target = graph.addNode({
    x: 420,
    y: 180,
    width: 80,
    height: 40,
    label: 'World',
  });

  graph.addEdge({
    source,
    target,
  });
  return <div></div>;
};

export default Editor;
