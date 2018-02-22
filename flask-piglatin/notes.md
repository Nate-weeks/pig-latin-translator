
Nate's Work
=============

* Went through this tutorial on setting up flask: https://realpython.com/blog/python/introduction-to-flask-part-1-setting-up-a-static-site/
* read about setting up flask as web api:  http://blog.luisrei.com/articles/flaskrest.html
* made some curl requests and read about curl request syntax here: https://makandracards.com/makandra/1145-how-to-send-http-requests-using-curl
* set up an api that takes data in plain text and translates it to pig-latin using our python module
* tried setting up apache/flask with mod wsgi
* followed this guide: https://devops.profitbricks.com/tutorials/deploy-a-flask-application-on-ubuntu-1404/
* didn't work, tried troubleshooting in various ways:  
* Tried it on port 80 with my other conf disabled, tried setting up port 81 with Listen 81
* tried messing with the mod-wsgi file as the new syntax for apache 2.4 is Require all granted http://flask.pocoo.org/docs/0.12/deploying/mod_wsgi/
* tried including this line of code: as i am using a virtual env
activate_this = '/path/to/env/bin/activate_this.py'
with open(activate_this) as file_:
    exec(file_.read(), dict(__file__=activate_this))

* probably tried a few other little edits I forgot but can't get past my Internal Server Error
/var/www/Flast/Flask/Virtenv/bin/activate_this.py
