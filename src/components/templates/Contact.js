import React, { useState } from 'react';

import Description from '../molecules/description';
import SidePanel from '../atoms/side-panel';
import Body from '../organisms/home/home-body';

import InputGroup from '../molecules/input-group';
import TextAreaGroup from '../molecules/textarea-group';

import ContactBody from '../organisms/contact/contact-body';

import Button from '../atoms/button';
import { validateEmail } from '../../utils/index';

export default () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // eslint-disable-next-line max-len
  const isReadyToSubmit = () => Boolean(name.length && surname.length && validateEmail(email) && email.length && message.length);

  const reset = () => {
    setName('');
    setSurname('');
    setEmail('');
    setMessage('');
  };

  return (
    <Body testid="body">
      <SidePanel testid="side-panel-left">
        <Description
          bigTitle="Let’s get in touch"
          subTitle="with ottoenghi"
          text="Yotam Ottolenghi—the chef behind instant cookbook classics Jerusalem, Plenty, Ottolenghi Simple and a string of beloved London restaurants—has been at the helm of the culinary vegetable renaissance."
          testid="description"
          mediumTitle="Follow me on social media"
          onClick={() => console.log('View recipe')}
        />
      </SidePanel>
      <SidePanel background="white">
        <ContactBody>
          <InputGroup
            label="name"
            onChange={(e) => setName(e.target.value)}
            testid="name-field"
          />
          <InputGroup
            label="surname"
            onChange={(e) => setSurname(e.target.value)}
            testid="surname-field"
          />
          <InputGroup
            label="email"
            error={Boolean(email && !validateEmail(email))}
            onChange={(e) => setEmail(e.target.value)}
            testid="email-field"
          />
          <TextAreaGroup
            label="message"
            rows={15}
            onChange={(e) => setMessage(e.target.value)}
            testid="message-field"
          />
          <Button testid="submit" disabled={!isReadyToSubmit()} width="245px" onClick={() => reset()}>
            <span>Send message</span>
          </Button>
        </ContactBody>
      </SidePanel>
    </Body>
  );
};
