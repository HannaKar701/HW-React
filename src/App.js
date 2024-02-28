import React from 'react';
import Form from './components/Form';
import Image from './components/Image';
import Text from './components/Text';
import Fieldset from './components/Fieldset';

import './App.css';

class App extends React.Component {
    setName() {
        return 'Hello';
    }

    render() {
        return (
            <div className="wrapper">
                <h1>My form:</h1>
                <Form buttonText="Submit" />
                <Image text="Text for picture" />
                <Text text="React-section Text" />
                <Fieldset
                    text={555555555555}
                    firstInput={['Variant 1']}
                    secInput={this.setName()}
                    thirdInput={{ name: 'Hanna' }}
                />
            </div>
        );
    }
}

export default App;
