import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Component entry
import Contact from '../components/templates/Contact';

// Scenarios
const contactFeature = loadFeature('./src/features/contact.feature');

defineFeature(contactFeature, (test) => {
  jest.useFakeTimers();
  test('User conacting Ottolenghi', ({
    given, when, then, and,
  }) => {
    let getElement;
    let getSafeElement;
    let button;
    let name;
    let surname;
    let email;
    let error;
    let message;

    beforeEach(() => {
      act(() => {
        const { getByTestId, queryByTestId } = render(<Contact />);
        getElement = getByTestId;
        getSafeElement = queryByTestId;
      });
    });

    given(/^I am a user attempting to contact Ottolenghi$/, () => {
      button = getElement('submit');
      expect(button.disabled).toBe(true);
    });

    when(/^I type ("([^\\"]|\\")*") as name$/, (nameValue) => {
      name = getElement('name-field');
      fireEvent.change(name, { target: { value: nameValue } });
    });

    then(/^submit button should still be disabled$/, () => {
      expect(button.disabled).toBe(true);
    });

    when(/^I type ("([^\\"]|\\")*") as surname$/, (surnameValue) => {
      surname = getElement('surname-field');
      fireEvent.change(surname, { target: { value: surnameValue } });
    });

    then(/^submit button should still be disabled$/, () => {
      expect(button.disabled).toBe(true);
    });

    when(/^I type ("([^\\"]|\\")*") as email$/, (emailValue) => {
      email = getElement('email-field');
      fireEvent.change(email, { target: { value: emailValue } });
    });

    then(/^error should appear on field email$/, () => {
      error = getElement('error');
      expect(error).toBeTruthy();
    });

    when(/^I type ("([^\\"]|\\")*") as email$/, () => {
      email = getElement('email-field');
      fireEvent.change(email, { target: { value: 'elon.musk@gmail.com' } });
    });

    then(/^submit button should still be disabled$/, () => {
      expect(button.disabled).toBe(true);
    });

    and(/^error should be disabled$/, () => {
      expect(getSafeElement('error')).not.toBeInTheDocument();
    });

    when(/^I type ("([^\\"]|\\")*") as message$/, (messageValue) => {
      message = getElement('message-field');
      fireEvent.change(message, { target: { value: messageValue } });
    });
    then(/^submit button should be enabled$/, () => {
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      expect(button.disabled).toBe(false);
    });
    when(/^I click the submit button$/, () => {
      button = getElement('submit');
      button.click();
    });

    then(/^name field should be empty$/, () => {
      expect(name).toBeEmpty();
    });
    and(/^surname field should be empty$/, () => {
      expect(surname).toBeEmpty();
    });
    and(/^email field should be empty$/, () => {
      expect(email).toBeEmpty();
    });
    and(/^message field should be empty$/, () => {
      expect(message).toBeEmpty();
    });
  });
});
