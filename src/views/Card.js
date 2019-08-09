import React, { Component } from 'react'
import { Card } from 'antd'

class MyCard extends Component {
  render() {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <Card style={{ width: 300 }} cover={<img src={process.env.PUBLIC_URL + '/imgs/1.jpeg'} style={{ filter: 'blur(2px)' }} alt="" />}>
            <Card.Meta description="高斯模糊" style={{textAlign: 'center'}}></Card.Meta>
          </Card>
          <Card style={{ width: 300, marginLeft: 20 }} cover={<img src={process.env.PUBLIC_URL + '/imgs/1.jpeg'} style={{filter: 'grayScale(100%)'}} alt="" />} >
            <Card.Meta description="灰度" style={{textAlign: 'center'}}></Card.Meta>
          </Card>
          <Card style={{ width: 300, marginLeft: 20 }} cover={<img src={process.env.PUBLIC_URL + '/imgs/1.jpeg'} style={{filter: 'brightness(50%)'}} alt="" />} >             
            <Card.Meta description="亮度" style={{textAlign: 'center'}}></Card.Meta>
          </Card>
          <Card style={{ width: 300, marginLeft: 20 }} cover={<img src={process.env.PUBLIC_URL + '/imgs/1.jpeg'} style={{filter: 'contrast(30%)'}} alt="" />} >
            <Card.Meta description="对比度" style={{textAlign: 'center'}}></Card.Meta>
          </Card>
        </div>
        <div style={{ display: 'flex', marginTop: 20 }}>
          <Card style={{ width: 300 }} cover={<img src={process.env.PUBLIC_URL + '/imgs/1.jpeg'} style={{filter: 'hue-rotate(90deg)'}} alt="" />} >
            <Card.Meta description="色相旋转" style={{textAlign: 'center'}}></Card.Meta>
          </Card>
          <Card style={{ width: 300, marginLeft: 20 }} cover={<img src={process.env.PUBLIC_URL + '/imgs/1.jpeg'} style={{filter: 'invert(100%)'}} alt="" />} >
            <Card.Meta description="反转图像" style={{textAlign: 'center'}}></Card.Meta>
          </Card>
          <Card style={{ width: 300, marginLeft: 20 }} cover={<img src={process.env.PUBLIC_URL + '/imgs/1.jpeg'} style={{filter: 'saturate(30%)'}} alt="" />} >
            <Card.Meta description="饱和度" style={{textAlign: 'center'}}></Card.Meta>
          </Card>
          <Card style={{ width: 300, marginLeft: 20 }} cover={<img src={process.env.PUBLIC_URL + '/imgs/1.jpeg'} style={{filter: 'sepia(100%)'}} alt="" />} >
            <Card.Meta description="深褐色" style={{textAlign: 'center'}}></Card.Meta>
          </Card>
        </div>
      </div>
    )
  }
}

export default MyCard
