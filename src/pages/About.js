import React, {Component} from 'react';
import Nav from '../components/Nav';

class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
            <div className="page align-c">
                <Nav/>
                <section>
                    ABOUT PAGE
                </section>
            </div>
		)
	}
}

export default About;

