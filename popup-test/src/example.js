import React from 'react';
import _ from 'lodash';
import { Button, Popup, Grid } from 'semantic-ui-react';

import Styles from './example.css';

const general_setting_items = [
  //'Accounts',
  'General Preference',
  'Available Devices and Data',
  'Available Apps',
];

const service_items = [
  'Health Care',
  'Smart Home',
  'Connected Car',
];


const SubPopup = (props) => {
  const gridItems = _.map(props.items, (item) => {
    return (
      <Grid.Row>
        <Grid.Column
          className={Styles.hoverContentItem}
          >
          <b>{item}</b>
        </Grid.Column>
      </Grid.Row>
    );
  });

  return (
  <Popup
    className={Styles.popup}
    trigger={<b>{props.name}</b>}
    //hoverable
    position='right center'
    on='click'
    pinned
    >
    <Grid
      textAlign='left'
      className={Styles.hoverContent}
      rows='equal' divided='vertically'>
      {gridItems}
    </Grid>
  </Popup>
  );
}


const PopupExampleFlowing = () => {

  const gridItems = _.map(general_setting_items, (item) => {
    return (
      <Grid.Row
      >
      <Grid.Column
        className={Styles.hoverContentItem}
        >
        <SubPopup
          name={item}
          items={service_items}
        />
      </Grid.Column>
      </Grid.Row>
    );
  });

  return (
    <Popup
      className={Styles.popup}
      trigger={<b>General Setting</b>}
      //hoverable
      position='right center'
      on='click'
      pinned
      >
      <Grid
      textAlign='left'
      className={Styles.hoverContent}
      rows='equal' divided='vertically'>
        {gridItems}
      </Grid>
    </Popup>
  );
}

export default PopupExampleFlowing

