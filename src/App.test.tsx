import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

describe('App', () => {
  it('renders learn react link', () => {
    mount(<App />);

    cy.get('a').contains('Learn React');
  });

  it('hides <VisibleOnlyScrollDown /> on scroll up', () => {
    mount(<App />);

    cy.scrollTo(0, 0);
    cy.get('#visibleOnlyScrollDown').should('not.exist');
  });

  it('shows <VisibleOnlyScrollDown /> on scroll down', () => {
    mount(<App />);

    cy.scrollTo(0, 1);
    cy.get('#visibleOnlyScrollDown').should('be.visible');
  });
});
