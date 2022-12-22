import React from 'react';
import Card from '../Card/Card';
const CardsLayout = () => {
    const data = [{name:'Harsha',age:'21',gender:'male',class:'10th'},{name:'Harsha',age:'21',gender:'male',clas:'10th'},{name:'Harsha',age:'21',gender:'male',clas:'10th'},{name:'Harsha',age:'21',gender:'male',clas:'10th'}]
  return (
    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default CardsLayout