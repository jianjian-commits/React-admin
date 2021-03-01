import { PureComponent } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Children from './views/Children'

class App extends PureComponent{
    constructor(){
        super()
        this.state = {}
    }
    render(){
        return(
            <Router> {/* 用于提供hash路由 */}
                <Switch> {/* Switch包裹的路由只会匹配第一次 */}
                    {/* 重定向到 /home */}
                    <Route path='/' exact render={() => <Redirect to='/home'/>}></Route> {/* 如果没有加入exact就不能往下匹配了, exact表示精准匹配 */}
                    <Route path='/home' component={Home}></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/children/:id' component={Children}></Route>
                </Switch>
            </Router>
        )
    }
}

export default App
