# Material-UI Expandable TextField

## Table of Contents

- [Description](#description)
- [Installation](#instalaltion)
- [Usage](#usage)
    - [Preparation](#preparation)
        -[Material-UI](#material-ui)
        -[Reducers](#reducers)
    - [Examples](#examples)
    - [Properties](#properties)
- [Contributing](#contributing)


## Description

Material-UI Expandable TextField is a React-Redux component that uses [Material-UI](http://www.material-ui.com/) to create a Expandable TextField.

The main reason to use only containers and not prepared TextFields with this behavior is that you can now change the style of the TextField and the IconButtons as you like. You can also use other components to hide and display them on click events.

You can also place the Button and the TextField in seperate places. They bound only by the same `id` you give them.

You can try it out the [DEMO](https://tarikhuber.github.io/material-ui-expandable-text-field/).

## Installation

This project can be istalled as npm module using following command:

```bash
npm i -S material-ui-expandable-text-field
```

## Usage


### Preparation

#### Material-UI

For this project components to work in your application after the npm installetion you have to be shure that everithing is correctly setup for Material-UI to work. You can find more about that [here](https://github.com/callemall/material-ui#installation).

#### Reducers

No mather where you store your reducers the project components need access to a specific reducer and its state. For that we add to our reducers `index.js` file where we compine all our reducers the following two reduces:

```js

import { combineReducers } from 'redux';
import {expandableTextFields} from 'material-ui-expandable-text-field';

const reducers = combineReducers({
  expandableTextFields
})

export default reducers;

```

That are the points we have to do before using this module in our application.


### Examples

The module contains of two main parts:
* **ExpandableTextFieldContainer** the container in witch we set our TextField
* **ETFIconButtonContainer** the container in witch we set our IconButtons witch triggeractions

All can be imported like this:

```js

import {
  ExpandableTextFieldContainer,
  ETFIconButtonContainer
} from 'material-ui-expandable-text-field'

```

All of them are just containers in witch you can put all your other application components:

```js

<div>
<ETFIconButtonContainer
  value={true}
  hideOnOpen={true}
  id={'1'}>
  <ActionSearch/>
</ETFIconButtonContainer>
<ETFIconButtonContainer
  value={false}
  hideOnClose={true}
  id={'1'}>
  <NavigationClose/>
</ETFIconButtonContainer>
<ExpandableTextFieldContainer id={'1'}>
  <TextField
    floatingLabelText={'Text field with autofocus'}
    ref={(ref) => {if(ref!=null){ref.focus()}}}
    id={'1'}
  />
</ExpandableTextFieldContainer>
</div>

```


**NOTICE**: - both of those components need the propertie **id** to colaborate corectly. Each TextField witch is in a ExpandableTextFieldContainer should have a diferent `id`.

You can also import the Actions from the module to trigger them when you want and without the prepared containers.

The actions available in this module are: `setIsETFOpen`, `toggleETF`.

We can import them from the module like this:

```js

import {
  ExpandableTextFieldContainer,
  ETFIconButtonContainer,
  setIsETFOpen,
  toggleETF
} from 'material-ui-expandable-text-field'

```

An complete example with all the actions called can be found in the [App.js](https://github.com/TarikHuber/material-ui-expandable-text-field/blob/master/demo/src/App.js) of the demo part of this project.

### Properties

ExpandableTextFieldContainer:
* **id** - (string) **required** - the `id` with witch we identify witch containers act together

ETFIconButtonContainer:
* **id** - (string) **required** - the `id` with witch we identify witch containers act together
* **value** - (boolean) optional - if you set it to `true` the button will only make the TextField visible. If it is `false` it can only hide the TextField and if you don't set a value the `ETFIconButtonContainer` will act as a toggler for the TextField visibility.
* **hideOnOpen** - (boolean) optional - if `true` the botton will hide when the TextField is open
* **hideOnClose** - (boolean) optional - if `true` the botton will hide when the TextField is closed
* **closeOthers** - (boolean) optional - if `true` by clicking the button all other open ExpandabldeTextFields will closeOthese
* **onETFChange** - (function) optional - a callback function that will be triggered on TextField visibility change


## Contributing

Every help no mather if it is a kritik, suggestion or pull request is welkome :)
