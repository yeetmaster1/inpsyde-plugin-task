# inpsyde-plugin-task
This is the task required from me as a result of applying to a job at inpsyde.

## Installation

nothing just add the plugin file to your wordpress.

## Usage
The plugin has initially the required criteria with some changes as **discussed** via E-mail.

## Extra Dependencies used 
**All Extra Dependencies used were in a cdn format to ease the reviewing of the code**
1. [JQuery](https://jquery.com/)
2. [Protractor](https://www.protractortest.org/#/tutorial)
3. [bootstrap](https://www.bootstrapcdn.com/)
## changes 
 **(The reasoning behind all changes are listed blow.)**
1. The plugin does not output user info on the front-end but outputs them to an admin menu page.

## Reasons for changes
1. it was discussed via Email, whether it was ok to do it on an admin menu page rather then the front-end as this type of info should only be accessible by the owners of the site and not any vistor and the answer i got via Email was as follows and i quote 
***"Your choice. Create a menu page or a front end page. On the idea, we were more inside the idea to get a page on front end to list the users"*** 
and therefore i have decided to do the better option. 

2. Security, I belive that it should be a habit to always try and not leak or leave important info on the front-end where malicious actor could use said info in a bad way, even if it is just a sample test i still belive that a programmer must always think of the security of said info  

## Unit Testing
As discussed via Email the unit testing was done for demonstrative purposes and as a result one sample unit test was done now keep in mind the fact that this is for demonstartive reasons and at the time of writing the test my phpunit module broke, so i didn't preform the tests but i am confidant that the test will work.

Anyway to make up for the fact that my phpunit broke and i couldn't run the tests i added another type of test that i did run.

[references used](http://web.mit.edu/6.005/www/fa16/classes/03-testing/#reading_3_testing)
## End To End test
1. As i said i did an ete test to make up for my faultiy phpunit module but this test needs [installation](https://www.protractortest.org/#/tutorial).

2. After that installation you need to go to etoe_test folder and then to ETOE_sample.js file and change the wordpress password and username and the link of the admin page, I use xampp for the server so that address is in regards to my local host don't worry there are comments to direct you.

3. The reason you need to do the previous step is that the test runs the browser and goes to the address and since it's an admin menu page you need the password and username and the right link.

## Thinking process 
As for the design the task was done in, there was not much design put into it as in the task request it was made clear that simple, high quilty code is key, and i didn't want to spend much time on the design.
for the plugin code it self I aslo tried to follow the same quote "simple, high quality" so i made it as simple as possible whilst adhering to the list of requirements as well as trying to make it responsive.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
