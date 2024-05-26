import BasePage from './BasePage'


class TablesPage extends BasePage {

  // Locators

  getHeaders() {
    return cy.get('.header')
  }

  /**
   * This method takes the company headers and returns the specific header
   * depending on the argument.
   * 
   * @param {string} header - Company header name
   * @returns 
   * 
   * @example
   * 
   * getSpecificTableHeaderByLabel('Rank')
   */
  

  getSpecificTableHeaderByLabel(header) {
    return this.getCompanyTableHeaders().contains(header)
  }
  


  // Methods


}

export default TablesPage