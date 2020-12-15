import React,{Component} from 'react'


export class Navigation extends Component{
    render(){
        return(
            <div id="navigation-bar">
            <nav>
              <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
              </ul>
            </nav>
          </div>

        )
    }

}