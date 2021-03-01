import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

class About extends PureComponent {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                About
                <Link to='/home'>按钮</Link>
            </div>
        );
    }
}

export default About;
