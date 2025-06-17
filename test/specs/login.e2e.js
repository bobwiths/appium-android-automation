import userData from '../data/userData.json'
import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import MenuScreen from '../screen/menu.screen.js'
import LoginScreen from '../screen/login.screen.js'
import CheckoutScreen from '../screen/checkout.screen.js'

describe('My Login application', () => {
    it('should not login with invalid credentials', async () => {
       await MenuScreen.accessLoginScreen()
       await LoginScreen.fillLoginForm(userData.userFail.username, userData.userFail.password)
       await expect($(LoginScreen.errorMessage)).toHaveText("Provided credentials do not match any user in this service.");
    })
    it('should login with valid credentials', async () => {
        await MenuScreen.accessLoginScreen()
        await LoginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
        await expect($(LoginScreen.containerHeader))
    })
    it.only('checkout process with valid credentials', async () => {
        await MenuScreen.checkout()
        await LoginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
        await CheckoutScreen.fillCheckoutForm(userData.checkoutForm.fullName, userData.checkoutForm.addressLineOne, userData.checkoutForm.addressLineTwo, userData.checkoutForm.city, userData.checkoutForm.stateRegion, userData.checkoutForm.zipCode, userData.checkoutForm.country)
        await CheckoutScreen.fillPaymentMethod(userData.paymentMethod.fullName, userData.paymentMethod.cardNumber, userData.paymentMethod.expirationDate, userData.paymentMethod.securityCode)
        await CheckoutScreen.reviewYourOrder()
        await expect($(CheckoutScreen.checkoutCompleteMessage)).toHaveText("Checkout Complete")
        await CheckoutScreen.continueShoppingButton
    })
})

