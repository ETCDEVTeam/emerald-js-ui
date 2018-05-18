import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import theme from '../../src/theme.json';
import muiThemeable from 'material-ui/styles/muiThemeable';

import IdentityIcon from '../../src/components/IdentityIcon';

const ColorsComponent = muiThemeable()(({ muiTheme, ...props }) => {
    return (
        <div>
            <Card style={{ backgroundColor: muiTheme.palette.accent1Color }}>
                <CardTitle title="accent1Color" subtitle="Ruby" />
                <CardTitle subtitle="#F41A2D" style={{marginTop: '-30px'}} />
                <CardText style={{marginTop: '-25px'}}>
                    Warnings, Accent
                </CardText>
            </Card>
            <Card style={{ backgroundColor: muiTheme.palette.primary1Color }}>
                <CardTitle title="primary1Color" subtitle="Emerald" />
                <CardTitle subtitle="#00C853" style={{marginTop: '-30px'}} />
                <CardText style={{marginTop: '-25px'}}>
                    Mouse Over, Highlights, Active States, Buttons
                </CardText>
            </Card>
            <Card style={{ backgroundColor: muiTheme.palette.textColor }}>
                <CardTitle title="textColor" subtitle="Coal" titleColor={muiTheme.palette.alternateTextColor} subtitleColor={muiTheme.palette.alternateTextColor} />
                <CardTitle subtitle="#222222" style={{marginTop: '-30px'}} subtitleColor={muiTheme.palette.alternateTextColor}/>
                <CardText style={{marginTop: '-25px', color: muiTheme.palette.alternateTextColor}}>
                    text
                </CardText>
            </Card>
            <Card style={{ backgroundColor: muiTheme.palette.secondaryTextColor }}>
                <CardTitle title="secondaryTextColor" subtitle="Ash" />
                <CardTitle subtitle="#B1BFB7" style={{marginTop: '-30px'}} />
                <CardText style={{marginTop: '-25px'}}>
                    Nav bars, Subtext, Less important text, Outlines for input fields, placeholder-input text color, second-action-button-color
                </CardText>
            </Card>
            <Card style={{ backgroundColor: muiTheme.palette.borderColor }}>
                <CardTitle title="borderColor disabledColor" subtitle="Conch" />
                <CardTitle subtitle="#EAEFEC" style={{marginTop: '-30px'}} />
                <CardText style={{marginTop: '-25px'}}>
                    1px outlines for white boxes, 1px horizontal lines, disabled options
                </CardText>
            </Card>
            <Card style={{ backgroundColor: muiTheme.palette.canvasColor }}>
                <CardTitle title="canvasColor" subtitle="Snow" />
                <CardTitle subtitle="#F7F9F8" style={{marginTop: '-30px'}} />
                <CardText style={{marginTop: '-25px'}}>
                    app background, canvas color
                </CardText>
            </Card>
            <Card style={{ backgroundColor: muiTheme.palette.alternateTextColor }}>
                <CardTitle title="alternateTextColor" subtitle="White" />
                <CardTitle subtitle="#F7F9F8" style={{marginTop: '-30px'}} />
                <CardText style={{marginTop: '-25px'}}>
                    windows, app bar
                </CardText>
            </Card>
            <Card style={{ backgroundColor: muiTheme.palette.shadowColor }}>
              <CardTitle title="shadowColor" subtitle="ASH 30% Opacity" />
              <CardTitle subtitle="rgba(177, 191, 183, 0.3)" style={{marginTop: '-30px'}} />
              <CardText style={{marginTop: '-25px'}}>
                Used for box-shadow
              </CardText>
            </Card>
        </div>
    )
});

storiesOf('Theme Colors', module)
    .addDecorator(muiTheme([theme]))
    .add('all', () => (
        <ColorsComponent />
    ));

