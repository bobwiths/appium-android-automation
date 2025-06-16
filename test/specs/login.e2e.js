import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import MenuScreen from '../screen/menu.screen'

describe('My Login application', () => {
    it('should not login with invalid credentials', async () => {
       await MenuScreen.accessLoginScreen()
       await $("~Username input field").setValue('wrongUser')
       await $("~Password input field").setValue('123456')
       await $("~Login button").click()
       await expect($('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView')).toHaveText("Provided credentials do not match any user in this service.")

    })
})

