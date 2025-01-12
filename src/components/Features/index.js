import './index.css';
import { Component } from 'react';

class Features extends Component {
  state = {
    count: 0,
  }

  increase = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  decrease = () => {
    this.setState(prevState => ({
        
      count: prevState.count - 1
    }));
  }

  render() {
    const { count } = this.state;
    const { featuresObject } = this.props;

    return (
      <div className='features-container'>
        <h1 className='heading1'>{featuresObject.heading}</h1>

        <ul className='features-ul'>
          {
            (featuresObject.categories?.["10386"] !== undefined) &&
            featuresObject.categories?.["10386"].map((item, index) => {
              const isFirstItem = index === 0;
              return (
                <li key={index}>
                  <button
                    style={{
                      borderColor: isFirstItem ? 'blue' : '#F2F2F2',
                      color: isFirstItem ? 'blue' : '#050A4E',
                    }}
                  >
                    {item}
                  </button>
                </li>
              );
            })
          }
        </ul>

        <ul className='features-ul-types'>
          {
            (featuresObject.props?.[0]?.packages !== undefined) &&
            featuresObject.props?.[0]?.packages.map((item, index) => {
              return (
                <li className='features-ul-types-li' key={index}>
                  <h1 className='heading1'>{item.packageDisplayName}</h1>
                  <p className='report'>{item.reportsTatText}</p>
                  <div className='flex-row'>
                    <div>
                      <p className='features-para1'>{item.testCount} tests</p>
                      <ul className='tests'>
                        {
                          (item?.testsSummary !== undefined) && item?.testsSummary.map((testItem, idx) => {
                            return (
                              <li className='total-tests' key={idx}>{testItem}</li>
                            );
                          })
                        }
                      </ul>
                    </div>
                    <div>
                      <p className='features-para1'>Includes</p>
                      <p>{item.isRadiologyIncluded ? 'Radiology' : ''}</p>
                    </div>
                  </div>
                  <div className='flex-row fasting-container'>
                    <div>
                      <p className='features-para1'>Fasting</p>
                      <p className='total-tests'>{item.fastingHoursText}</p>
                    </div>
                    <div>
                      <p className='features-para1'>Available at</p>
                      <p className='total-tests'>{item.isHomeSampleAvailable ? 'Home' : ''}</p>
                    </div>
                  </div>
                  <div className='cart-price-container'>
                    <p className='features-heading'>{item.price}</p>
                    <div className='cart-btn'>
                      <button onClick={this.decrease} style={{ cursor: 'pointer' }}>-</button>
                      <button>{count}</button> 
                      <button onClick={this.increase} style={{ cursor: 'pointer' }}>+</button> 
                    </div>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Features;
