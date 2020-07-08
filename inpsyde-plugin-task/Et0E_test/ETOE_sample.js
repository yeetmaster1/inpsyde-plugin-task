describe('Wordpress plugin demo', function() {
   it('cycle through user info', function() {
     browser.waitForAngularEnabled(false);
     browser.get('http://127.0.0.1/wordpress/wp-admin/admin.php?page=inpsyde_task_plugin');
     /**
      * input your user name in the first by.id
      * input your password in the second by.id
      */
     element(by.id('user_login')).sendKeys(/**input your wordpress email */);
     element(by.id('user_pass')).sendKeys(/**input your wordpress password */); 
     element(by.id('wp-submit')).click();
     browser.driver.sleep(1000);
     browser.driver.sleep(1000);
     element(by.css('.sh1')).click();
     browser.driver.sleep(1000);
     browser.driver.sleep(1000);
     expect(element(by.css('.sh1')).getText()).
         toEqual('1'); 
     expect(element(by.css('.tl1')).getText()).
         toEqual('Leanne Graham');   
     expect(element(by.css('.usn1')).getText()).
         toEqual('Bret');    
     expect(element(by.css('.em1')).getText()).
         toEqual('Sincere@april.biz');          
   });
 });