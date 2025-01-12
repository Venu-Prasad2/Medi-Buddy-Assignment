import './index.css';
import { Component } from 'react';

class Question extends Component {
  state = { questionId: null, display: null };

  handleToggle = (id) => {
    // Toggle the display for the clicked question
    this.setState(prevState => ({
      questionId: id,
      display: prevState.display === id ? null : id // If it's already open, close it, otherwise open it
    }));
  }

  render() {
    const { questionObject } = this.props;

    if (!questionObject || !questionObject.props) return null; // Adding check for null or undefined

    return (
      <div className='questionContainer'>
        <h1 className='question-heading'>{questionObject.props?.[0]?.question}</h1>

        <ul className='question-ul'>
          {(questionObject.props?.[0]?.points?.length > 0) && questionObject.props[0].points.map((point, index) => (
            <li key={index} className='question-ul-li'>
              <img src={`https://www.medibuddy.in${point.img}`} alt={point.img} />
              <p className='point-para'>{point.pnt}</p>
            </li>
          ))}
        </ul>

        <h1 className='question-heading'>{questionObject.title}</h1>

        <div className='question-container'>
          <ul className='frequent-question-ul'>
            {questionObject.props.map((item, index) => {
              if (index > 0) {
                return (
                  <li key={item.id}>
                    <div className='question-top'>
                      <h1 className='question-head'>{item.question}</h1>
                      <button
                        onClick={() => this.handleToggle(item.id)}
                        className='circle'
                        aria-label={this.state.display === item.id ? 'Collapse answer' : 'Expand answer'}
                      >
                        {this.state.display === item.id ? '-' : '+'}
                      </button>
                    </div>

                    {/* Conditional rendering for answer and points */}
                    {this.state.display === item.id && (
                      <div>
                        <p className='pnt-txt'>{item.answer}</p>
                        <ul className='point-ul'>
                          {item.points?.map((point, idx) => (
                            <li key={idx}>
                              <p className='pnt-txt'>{point.pnt}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              }
              return null; // Return null for the first item (if necessary)
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Question;
