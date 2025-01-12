import './index.css'
import {Component} from 'react'

class Banner extends Component
{
    render()
    {
        const {bannerObject} = this.props;
        return (
            <ul className='banner-ul'>
                {
                    (bannerObject.props!==undefined)&&bannerObject.props.map((item)=>
                    {
                        return (
                            <li>
                                <img src={item.bannerUrl} alt="banner"/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default Banner;