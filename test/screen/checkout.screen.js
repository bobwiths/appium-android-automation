class CheckoutScreen {
    constructor() {
        this.fullNameField = "~Full Name* input field"
        this.addressLineOne = "~Address Line 1* input field"
        this.addressLineTwo = "~Address Line 2 input field"
        this.cityField = "~City* input field"
        this.stateRegionField = "~State/Region input field"
        this.zipCodeField = "~Zip Code* input field"
        this.countryField = "~Country* input field"
        this.toPaymentButton = "~To Payment button"
        this.cardNumber = "~Card Number* input field"
        this.expirationDate = "~Expiration Date* input field"
        this.securityCode = "~Security Code* input field"
        this.reviewOrderButton = "~Review Order button"
        this.checkoutPaymentScreen = "~checkout payment screen"
        // this.totalPrice = "~total price"
        this.placeOrderButton = "~Place Order button"
        this.continueShoppingButton = "~Continue Shopping button"
        this.checkoutCompleteMessage = "//android.widget.TextView[@text='Checkout Complete']"
    }

    async fillCheckoutForm(fullName, addressLineOne, addressLineTwo, city, stateRegion, zipCode, country) {
        await $(this.fullNameField).setValue(fullName)
        await $(this.addressLineOne).setValue(addressLineOne)
        await $(this.addressLineTwo).setValue(addressLineTwo)
        await $(this.cityField).setValue(city)
        await $(this.stateRegionField).setValue(stateRegion)
        await $(this.zipCodeField).setValue(zipCode)
        await $(this.countryField).setValue(country)
        await $(this.toPaymentButton).click()
    }

    async fillPaymentMethod(fullName, cardNumber, expirationDate, securityCode) {
        await $(this.fullNameField).setValue(fullName)
        await $(this.cardNumber).setValue(cardNumber)
        await $(this.expirationDate).setValue(expirationDate)
        await $(this.securityCode).setValue(securityCode)
        // await $(this.checkoutPaymentScreen).click()
        await $(this.reviewOrderButton).click()
        await $(this.reviewOrderButton).click()
    }

    async reviewYourOrder() {
        await $(this.placeOrderButton).click()
    }
}

export default new CheckoutScreen()