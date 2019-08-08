import React from 'react'
import _ from 'lodash';
import { Header, Button, Popup, Grid } from 'semantic-ui-react'


/*
// orig
const PopupExampleFlowing = () => (
    <Popup
      trigger={<Button>Show flowing popup</Button>}
      flowing
      hoverable
      >
      <Grid centered divided columns={3}>
        <Grid.Column textAlign='center'>
          <Header as='h4'>Basic Plan</Header>
            <p>
              <b>2</b> projects, $10 a month
            </p>
            <Button>Choose</Button>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Header as='h4'>Business Plan</Header>
          <p>
            <b>5</b> projects, $20 a month
          </p>
          <Button>Choose</Button>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Header as='h4'>Premium Plan</Header>
          <p>
            <b>8</b> projects, $25 a month
          </p>
          <Button>Choose</Button>
        </Grid.Column>
      </Grid>
    </Popup>
)
*/

/*
// typescript ではないので不要か
type SubPopupProp = {
  key : (string) => void,
}
*/

/*
// old
const SubPopup = (props) => {
  const items = props.items;
  return (
  <Popup
    trigger={<b>{props.name}</b>}
    hoverable
    position='right center'
    >
    <Grid rows='equal' divided='vertically'>
      <Grid.Row>
      <Grid.Column
        textAlign='left'>
        <b>{items[0]}</b>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column textAlign='left'>
        <b>Smart Home</b>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column textAlign='left'>
        <b>Connected Car</b>
      </Grid.Column>
      </Grid.Row>
    </Grid>
  </Popup>
  );
}
*/
const SubPopup = (props) => {
  //const items = props.items;
  const gridItems = _.map(props.items, (item) => {
    return (
      <Grid.Row>
        <Grid.Column
          textAlign='left'>
          <b>{item}</b>
        </Grid.Column>
      </Grid.Row>
    );
  });

  return (
  <Popup
    trigger={<b>{props.name}</b>}
    hoverable
    position='right center'
    >
    <Grid rows='equal' divided='vertically'>
      {gridItems}
    </Grid>
  </Popup>
  );
  /*
  const items = props.items;
  return (
  <Popup
    trigger={<b>{props.name}</b>}
    hoverable
    position='right center'
    >
    <Grid rows='equal' divided='vertically'>
      <Grid.Row>
      <Grid.Column
        textAlign='left'>
        <b>{items[0]}</b>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column textAlign='left'>
        <b>Smart Home</b>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column textAlign='left'>
        <b>Connected Car</b>
      </Grid.Column>
      </Grid.Row>
    </Grid>
  </Popup>
  );
  */
}

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

// ver3
const PopupExampleFlowing = () => {

  const gridItems = _.map(general_setting_items, (item) => {
    return (
      <Grid.Row>
      <Grid.Column
        textAlign='left'>
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
      trigger={<b>Show flowing popup</b>}
      hoverable
      position='right center'
      >
      <Grid rows='true' divided='vertically'>
        {gridItems}
      </Grid>
    </Popup>
  );
}

/*
// ver2
const PopupExampleFlowing = () => {
  return(
    <Popup
      trigger={<b>Show flowing popup</b>}
      hoverable
      position='right center'
      >
      <Grid rows='true' divided='vertically'>
        <Grid.Row>
          <Grid.Column textAlign='left'>
            <SubPopup
              name="Accounts"
              items={service_items}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='left'>
            <SubPopup
              name="General Preference"
              items={service_items}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='left'>
            <SubPopup
              name="Aailable Devices and Data"
              items={service_items}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='left'>
            <SubPopup
              name="Available Apps"
              items={service_items}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Popup>
  );
}
*/

export default PopupExampleFlowing

