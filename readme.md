--------------------
Monogo DB connection
---------------------
1. create a account
2. create a user with pass
3. whitelist IP address
4. database > connect > driver > Node > Show All code
5. change the password in the URI
---------------------------------
---------------POST--------------
1. CREATE ----- >> POST
2. app.post('/users/'/async (req, res) => {})
3. Make the function async to use await inside it
4. Make sure you use the express.json() middleware
5. access data from body: const user = req.body
6. const result = await userCollection.insertOne(user)
7. res.send(rusult)


-------------------
------CLIENT-------
-------------------
------CREATE-------

1. Create fetch
2. provide method: "POST"
3. add second parameter as an object 
4. add headers : {'content-type' : 'application/json'}
5. add body: JSON.stringify(user)
------------------


------------------
-------READ-------
------------------
