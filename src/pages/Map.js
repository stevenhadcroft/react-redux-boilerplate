import React, {Component} from 'react';
import Nav from '../components/Nav';

import '../css/pages/Map.css';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
            <div className="page align-c">
                <Nav/>
                <section>
                    MAP PAGE
                </section>
            </div>
		)
	}
}

export default Home;

