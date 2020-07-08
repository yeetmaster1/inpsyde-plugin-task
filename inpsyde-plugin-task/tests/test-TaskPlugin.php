<?php
/**
 * Class test_TaskPlugin 
 *
 * @package Inpsyde_Plugin_Task
 */

/**
 * Sample test case.
 */
class test_TaskPlugin extends WP_UnitTestCase {

	/**
	 * A single sample test.
	 * 
	 */
	public function test_register() {
	 $register_setting_link = new TaskPlugin();
	 $is_registered = has_action( "plugin_action_links_$this->name", array($register_setting_link, 'settings_link' ) );
        //i expect the value to be 10 if not that's why the echo statement is there just incase. 
	if ($is_registered === 10){	
	 $this->assertTrue( true );
	}else if($is_registered != 10){
		echo $is_registered;
		$this->assertTrue( false );
	}

}
}
