import 'cypress-xpath';
import { data } from '../../fixtures/data'
import { edit_name, validate_name } from '../../fixtures/functions/edit_name'
import { edit_address, validate_address } from '../../fixtures/functions/edit_address'
import {edit_phone,validate_phone} from '../../fixtures/functions/edit_phone'
import { edit_birthdate,validate_birthdate } from '../../fixtures/functions/edit_birthdate'
import { edit_nationality, validate_nationality} from '../../fixtures/functions/edit_nationality'

describe('profile fields test cases', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    localStorage.clear();
    // cy.viewport(1900,1200)
    cy.login(data.email,data.password)

  })
  it ('it should update the name fields successfully', () => {
    cy.visit('/en/account/profile')
    validate_name(data.first_name,data.last_name)
    edit_name(data.edited_f_name,data.edited_l_name)
    validate_name(data.edited_f_name,data.edited_l_name) 
  })
  it ("it should edit the phone number successfully", () => {
    validate_phone(data.phone_ext,data.phone)
    edit_phone(data.edited_phone_ext,data.edited_phone)
    validate_phone(data.edited_phone_ext,data.edited_phone)
  })
  it('it should update the address successfully', () => {
    validate_address(data.address_1,data.city,data.country)
    edit_address(data.address_2,data.address_1,data.edited_zipcode,data.edited_city,data.edited_state,data.edited_country_value)
    validate_address(data.address_2,data.edited_city,data.edited_country)
  })
it ('its should update the birthdate fields successfully', () => {
  validate_birthdate(data.birth_day,data.birth_month,data.birth_year)
  edit_birthdate(data.edited_birth_day,data.edited_birth_month,data.edited_birth_year)
  validate_birthdate(data.edited_birth_day,data.edited_birth_month,data.edited_birth_year) 
  })
  it('it should update nationality successfully',()=> {
    validate_nationality(data.country)
    edit_nationality(data.edited_country_value)
    validate_nationality(data.edited_country)
  })
  after(()=> {
    edit_name(data.first_name,data.last_name)
    validate_name(data.first_name,data.last_name)
    edit_address(data.address_1,data.address_2,data.zipcode,data.city,data.state,data.country_value)
    validate_address(data.address_1,data.city,data.country)
    edit_phone(data.phone_ext,data.phone)
    validate_phone(data.phone_ext,data.phone)
    edit_birthdate(data.birth_day,data.birth_month,data.birth_year)
    validate_birthdate(data.birth_day,data.birth_month,data.birth_year)
    edit_nationality(data.country_value)
    validate_nationality(data.country)
  })
})