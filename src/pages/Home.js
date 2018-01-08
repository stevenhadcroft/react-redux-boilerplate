import React, {Component} from 'react';
import Nav from '../components/Nav';

import '../css/pages/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page align-c">
                <Nav/>
                <section>
                    HOME PAGE
                </section>
            </div>
        )
    }
}

export default Home;

