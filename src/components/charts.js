import _ from 'lodash';
import React from 'react';
import { Sparklines , SparklinesLine, SparklinesReferenceLine, SparklinesBars, SparklinesSpots } from 'react-sparklines';

function average(data){
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  //<SparklinesBars style={{ fill: props.color }} />
  return (
    <div>
      <Sparklines height = {120} width = {180} data = { props.data }>
        <SparklinesLine color = {props.color} />
        <SparklinesReferenceLine type = "avg" />
        <SparklinesSpots />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
