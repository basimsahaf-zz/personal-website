import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import {Col, Card} from 'react-materialize';
import FontAwesome from 'react-fontawesome';
import Resources from './resources';
import {Image} from 'react-bootstrap';

import Picture from './mg/pic.png';



class MainSection extends React.Component {
  getSocials(){
    return <div key={1} className="socialdiv">{Resources.social.map(function(item, index){
      return <a key={index} target="blank" href={item.link}><FontAwesome
        className='socialIcons'
        name={item.platform}
        size='2x'
        key={index}
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      /></a>
    })}</div>
  }
  render() {
    return (
        <Col m={6} s={12}>
          <Card className='infoCard' actions={[this.getSocials()]} textClassName='black-text'>
            <div style={{ fontFamily: 'Lato', fontSize: '200%', textAlign: 'center' }}className='name'>
            <Image className="imageLogo" src={Picture} responsive/>
            {Resources.name}</div>
          </Card>
        </Col>
    )
  }
}

ReactDOM.render(
  <MainSection/>,
  document.getElementById('root')
);
