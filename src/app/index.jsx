import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return (<div className="box">
			<strong>REACT is working</strong><br/>
			<code>src="assets/images/d.png"</code><br/>
			<img src="assets/images/d.png"/>
		</div>);
	}
}

export default () => ReactDOM.render(<App/>, document.getElementById('app'));