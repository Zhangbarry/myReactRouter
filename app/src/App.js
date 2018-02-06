import React from 'react'
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom'//导入的方式跟之前有点变化

import Home from './home.js'
import Content from './content.js'
import Second from './second.js'
import Use from './use.js'
import Nav from './ajax.js'
import NewsDetail from './newsDetail.js'
import './QGindex.css'

const App = () => (
    <Router>
        <div>
            <ul className="clearfix bc_12 tac pf top_0 wp">
            	<li className="fl w20p"><NavLink exact className="bc_20 db wp ptb10" activeStyle={{ color: 'white', fontWeight: 'bold',background:'red' }} to="/">首页</NavLink></li>
            	<li className="fl w20p"><NavLink className="bc_20 db wp ptb10" activeStyle={{ color: 'white', fontWeight: 'bold',background:'red' }} to="/two">第二页</NavLink></li>
            	<li className="fl w20p"><NavLink className="bc_20 db wp ptb10" activeStyle={{ color: 'white', fontWeight: 'bold',background:'red' }} to="/second">第三页</NavLink></li>
            	<li className="fl w20p"><NavLink className="bc_20 db wp ptb10" activeStyle={{ color: 'white', fontWeight: 'bold',background:'red' }} to="/use">第四页</NavLink></li>
            	<li className="fl w20p"><NavLink className="bc_20 db wp ptb10" activeStyle={{ color: 'white', fontWeight: 'bold',background:'red' }}  to="/nav">第五页</NavLink></li>
            </ul>
            <div className="mt42">
	            <Route exact path="/" component={Home}/>
	            <Route path="/two" component={Content}/>
	            <Route path="/second" component={Second}/>
	            <Route path="/use" component={Use}/>
	            <Route path="/nav" component={Nav}/>
	            <Route path="/Detail/:id" component={NewsDetail}/>
            </div>
        </div>
    </Router>
)
export default App