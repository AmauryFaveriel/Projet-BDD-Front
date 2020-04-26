import React, { useState } from 'react';

import Description from '../molecules/description';
import SidePanel from '../atoms/side-panel';
import Body from '../organisms/home/home-body';

import InputGroup from '../molecules/input-group';
import TextAreaGroup from '../molecules/textarea-group';

import ContactBody from '../organisms/contact/contact-body';

import Button from '../atoms/button';

export default () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const queryState = {
    fetching: false,
    readyToFetch: true,
  };

  return (
    <Body testid="body">
      <SidePanel testid="side-panel-left">
        <Description
          bigTitle="Let’s get in touch"
          subTitle="with ottoenghi"
          text="Yotam Ottolenghi—the chef behind instant cookbook classics Jerusalem, Plenty, Ottolenghi Simple and a string of beloved London restaurants—has been at the helm of the culinary vegetable renaissance."
          testid="description"
          onClick={() => console.log('View recipe')}
        />
      </SidePanel>
      <SidePanel background="white">
        <ContactBody>
          <InputGroup
            label="name"
            error={!queryState.readyToFetch}
            onChange={(e) => setName(e.target.value)}
            disabled={queryState.fetching}
            testid="username-field"
          />
          <InputGroup
            label="surname"
            error={!queryState.readyToFetch}
            onChange={(e) => setSurname(e.target.value)}
            disabled={queryState.fetching}
            testid="username-field"
          />
          <InputGroup
            label="email"
            error={!queryState.readyToFetch}
            onChange={(e) => setEmail(e.target.value)}
            disabled={queryState.fetching}
            testid="username-field"
          />
          <TextAreaGroup
            label="message"
            rows={15}
            error={!queryState.readyToFetch}
            onChange={(e) => setMessage(e.target.value)}
            disabled={queryState.fetching}
            testid="username-field"
          />
          <Button width="245px" onClick={() => console.log('clicked')}>
            <span>Send message</span>
          </Button>
        </ContactBody>
      </SidePanel>
    </Body>
  );
};
