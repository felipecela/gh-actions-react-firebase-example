/// <reference types="cypress" />
import 'cypress-react-app-actions'

const typeOptions = { delay: 35 }

describe('1 shorter tests', () => {
  const startOfSecondPageState = {
    Text1: 'Edit src/App.js and save to reload.',

  }


  beforeEach(() => {
    cy.visit('/')
  })

  it('first page', () => {
    cy.log('**First page**')
    cy.contains('p', 'Edit src/App.js and save to reload.')

    cy.contains('Learn React').click()

  })

})
