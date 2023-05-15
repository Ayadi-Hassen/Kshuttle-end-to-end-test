/// <reference types="cypress" />


describe("Découvrir le site Shuttle",()=>{
  it.only("Testez les cookies",()=>{
      cy.viewport(1400,800)
      cy.visit('https://www.kshuttle.io/')
      cy.get('.elementor-element-85eb8a3 > .elementor-widget-container > .elementor-heading-title').trigger('mousemove', { clientX: 100, clientY: 200 })
      //cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click() // Accept Cookies
      //cy.get('#CybotCookiebotDialogBodyButtonDecline').click() //Refuser cookies
      //cy.get('.elementor-element-6220ee3c > .elementor-widget-container > .elementor-heading-title').should('contain.text','KSHUTTLE , DES SOLUTIONS METIER POUR :')
      cy.get('#CybotCookiebotDialogBodyLevelButtonPreferences').click() // Preference
      cy.get('#CybotCookiebotDialogBodyLevelButtonStatistics').click() // Statistics
      cy.get('#CybotCookiebotDialogBodyLevelButtonMarketing').click() // Marketing
      cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection').click() // Autoriser la selection
  })

  it("Rejoignez-nous",()=>{
    cy.viewport(1400,800)
    cy.visit('https://www.kshuttle.io/')
    cy.get('.elementor-element-85eb8a3 > .elementor-widget-container > .elementor-heading-title').trigger('mousemove', { clientX: 100, clientY: 200 })
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()
    cy.get('.elementor-element-6220ee3c > .elementor-widget-container > .elementor-heading-title').should('contain.text','KSHUTTLE , DES SOLUTIONS METIER POUR :')
    cy.contains('Rejoignez-nous').dblclick()
    cy.get('.elementor-element-44b1826 > .elementor-widget-container > .elementor-heading-title').should('contain.text','Nous rejoindre').wait(500)
    cy.get('.elementor-element-9dd6382 > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click() // Voir offre d'emplois
    cy.get('.jet-listing-dynamic-post-8603 > .elementor > .elementor-element-ad89687 > .e-con-inner > .elementor-element-b0623b7 > .elementor-element > .elementor-widget-container > .jet-listing > .jet-listing-dynamic-link__link').click()
    // Postulez
    cy.get('.elementor-element-6b123df > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click()
    // Remplir le formulaire 
    cy.get('#lastname').type('Ayadi')
    cy.get('#firstname').type('Hassen')
    cy.get('#field_téléphone').type('+21650495945')
    cy.get('#field_email').type('ayadihassen5@gmail.com')
    cy.get('#field_message').type("Bonjour j'espère que vous allez bien? Je me présente Hassen Ayadi jeune diplômé d'un master professionnel en Business Analytics à ESB")
    const cvfile = 'HassenAyadiBA.pdf';
    cy.get('[name="CV_input"]').attachFile(cvfile).wait(2000)
    //cy.get('.jet-engine-file-upload__errors').should('contain.text','File type is not allowed.')
    
    

})



  


})















