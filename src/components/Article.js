import React,{Component} from 'react'
import {Info} from './Info'

export class Article extends Component{
    render(){
        return(
            <>
              <article id="article">
                 <h2>Popular web browsers</h2>
                  <Info/>
              </article>



            </>    

        )
    }

}