import './index.css'
import {Component} from 'react'

class Services extends Component
{
    
    render()
    {
        console.log(this.props);
        const {serviceObject} = this.props;
        return (
            <ul className='services-ul'>
                {
                    (serviceObject.props!==undefined)&&serviceObject.props.map((item)=>
                    {
                        return (
                            <li>
                                <img src={item.iconUrl} alt={item.iconText} className='services-img'/>
                                <p className='services-para'>{item.iconText}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default Services;