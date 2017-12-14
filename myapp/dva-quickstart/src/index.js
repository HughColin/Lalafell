import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Mudkip extends React.Component {
  render() {
    return (
      <div className="banner">

            <button>首页</button>
            <button>第二页</button>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Mudkip />,
  document.getElementById('root')
);
