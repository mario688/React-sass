import React,{Component} from 'react'
import browsers from "../data/data.json"

export class Info extends Component{
    render(){
        return(
         <>   

               
        {browsers.map((browser, index)=>{
              return <section><header>
                  <h4>{browser.name}</h4>
                  <img src={browser.url} alt="Google Chrome Logo"/>
                  </header>
                  <p>{browser.text}</p>
                  </section>
        })}


        </>
        )
    }

}

