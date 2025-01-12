import './index.css'
import {Component} from 'react'

class Packages extends Component
{
    render()
    {
        const {packageObject} = this.props;
        return (
            <div className='package-container'>
                <h1 className='package-heading'>{packageObject.title}</h1>
            <ul className='package-ul'>
                {
                    (packageObject.props!==undefined)&&packageObject.props.map((item)=>
                    {
                        return (
                            <li className='package-ul-li'>
                                <img src={`https://www.medibuddy.in/${item.imgSrc}`} alt={item.title} className='package-img'/>
                                <p>{item.title}</p>
                            </li>
                        )
                    })
                }
            </ul>
            </div>
        )
    }
}
export default Packages;