class MenuScreen {
    constructor() {
        this.leftMenuButton = "~open menu"
        this.loginButton = "//*[@text='Log In']"
        this.catalogButton = "//android.widget.TextView[@text='Catalog']"
        this.storeItem = "(//android.view.ViewGroup[@content-desc='store item'])[2]/android.view.ViewGroup[1]"
        this.addToCartButton = "~Add To Cart button"
        this.cartButton = "//android.view.ViewGroup[@content-desc='cart badge']/android.widget.ImageView"
        this.checkoutButton = "~Proceed To Checkout button"
    }

    async accessLoginScreen() {
        await $(this.leftMenuButton).click()
        await $(this.loginButton).click()
    }
    async checkout() {
        await $(this.leftMenuButton).click()
        await $(this.catalogButton).click()
        await $(this.storeItem).click()
        await $(this.addToCartButton).click()
        await $(this.cartButton).click()
        await $(this.checkoutButton).click()
    }
}

export default new MenuScreen()