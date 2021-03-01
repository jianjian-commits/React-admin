import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

class Children extends PureComponent {
    constructor(props){
        super(props)
        this.state = {}
        console.log(props.match.params); //拿到动态路由传过来的参数
    }
    render() {
        return (
            <div>
                Children
                <Link to='/home'>按钮</Link>
            </div>
        );
    }
}

export default Children;
