import React from "react";
import Node from './node/node';

import './PathfindingVisualizer.css';

class PathfindingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
        };
    }

    componentDidMount() {

    }
    
    render() {
        return <div>Foo <Node></Node></div>
        
        
        
        ;
  }
}