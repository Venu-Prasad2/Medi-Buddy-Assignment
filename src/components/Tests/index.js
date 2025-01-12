import './index.css'
import {Component} from 'react'

class Tests extends Component
{
    render()
    {
        const {tObject} = this.props;
        return (
            <ul className='services-ul'>
                {
                    (tObject.props!==undefined)&&tObject.props.map((item)=>
                    {
                        return (
                            <li>
                                <img src={item.iconUrl} alt={item.iconText}/>
                                <p>{item.iconText}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default Tests;