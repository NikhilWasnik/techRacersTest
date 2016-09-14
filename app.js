var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var connection  = require('./routes/database.js');
// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));


app.get('/',function(req,res){
    res.writeHead(200, {"Content-Type":"text/html"});
// res.send('Hello techRacers..'+"1.) localhost:8000/allProjects --> to list all the projects 2.) localhost:8000/allUsers --> to list all the users in all the projects 3.) localhost:8000/loginAs/{username}/{project name} --> to login as a user in some project. 4.) localhost:8000/getProject/{project name} -->  to get details of a particular project. 5.) localhost:8000/getUser/{username} --> to get details of a particular user.")
res.write('Hello techRacers !!'+'</br>');
 res.write('1.) localhost:8000/allProjects --> to list all the projects.'+'</br>');
 res.write('2.) localhost:8000/allUsers --> to list all the users in all the projects.'+'</br>');
 res.write('3.) localhost:8000/loginAs/{username}/{project name} --> to login as a user in some project.'+'</br>');
 res.write('4.) localhost:8000/getProject/{project name} -->  to get details of a particular project.'+'</br>');
 res.write('5.) localhost:8000/getUser/{username} --> to get details of a particular user.'+'</br>');
 res.write('6.) localhost:8000/superAdmin --> to list all the projects and all users in every project.'+'</br>');
})

// ***** api to list all the projects

app.get('/allProjects',function(req,res){
    var str = "select projects from myCompany";
    connection.query(str,function(error,allProjects){
        if(error) console.log(error)
            else
            {
                res.send(allProjects);
            }
    })
})

// ***** api to list all the users in all projects

app.get('/allUsers',function(req,res){
    var str = "select distinct users from myCompany";
    connection.query(str,function(error,allUsers){
        if(error) console.log(error)
            else
            {
                res.send(allUsers);
            }
    })
})

// ***** authentication api

app.get('/loginAs/:users/:projects',function(req,res){
    var str = "select * from myCompany where FIND_IN_SET('"+req.params.users+"', users) > 0 and projects = '"+req.params.projects+"'";
    connection.query(str,function(err,info){
        if(err) console.log(err)
            else
            {
                if(info.length)
                {
                    var splitManagers = info[0].managers.split(",")

                    var splitDevelopers = info[0].developers.split(",")

                    var manager = splitManagers.indexOf(req.params.users);
                    var developer = splitDevelopers.indexOf(req.params.users);                    

                    if(manager != -1)
                    {
                        res.send(req.params.users+" is a manager in '"+req.params.projects+"' project. So listing all users in this project->  "+info[0].users);
                    }
                    else if(developer != -1)
                    {
                        res.send(req.params.users+" is a developer in '"+req.params.projects+"' project. So just showing the project name->  "+info[0].projects)
                    }
                    else
                    {
                        res.redirect('/superAdmin')
                    }
                    
                }
                else
                {
                    res.send("The user '"+req.params.users+"' is not a part of '"+req.params.projects+"' project.")
                }
            }
    })
})


// ***** api for details about particular project (by project name)

app.get('/getProject/:projects',function(req,res){
    var str = "select * from myCompany where projects='"+req.params.projects+"'";
    connection.query(str,function(error,projectDetails){
        if(error) console.log(error)
            else
            {
                res.send(projectDetails);
            }
    })
})

// ***** api for details about particular user (by user name)
// This user can see all projects assigned to him/her

app.get('/getUser/:users',function(req,res){
    var str1 = "select * from myCompany where FIND_IN_SET('"+req.params.users+"', users) > 0 ";
    connection.query(str1,function(err,role){
        if(err) console.log(err)
            else
            {
                for(var i=0;i<role.length;i++)
                {
                    if(role[i].superAdmin == req.params.users)
                        // res.send('This user is a SuperAdmin. So, listing all projects: ',role)
                    res.redirect('/superAdmin')
                }
                    
                    {
                        var str = "select projects from myCompany where FIND_IN_SET('"+req.params.users+"', users) > 0 ";
                        connection.query(str,function(error,userDetails){
                            if(error) console.log(error)
                                else
                                {
                                    res.send(userDetails);
                                }
                        })                    
                    }
                
            }
    })
    
})

// ***** api for superAdmin
app.get('/superAdmin',function(req,res){
    var str = "select projects,users from myCompany";
    connection.query(str,function(error,superAdmin){
        if(error) console.log(error)
            else
            {
                console.log("This is a Super Admin. So, showing all users in all projects")
                res.send(superAdmin)
            }
    })
})


app.listen(8000,function(){
  console.log("Server has started at port 8000. Run: http://localhost:8000 on your browser")
});

module.exports = app;
