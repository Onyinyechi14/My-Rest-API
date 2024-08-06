const User = require('./models/User.js');
const asyncHandler = require('express-async-handler')

const getUsers = asyncHandler (async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})
  
  // POST: Add a new user
 const postUser = asyncHandler(async(req, res) => {
    if(!req.body.name && !req.body.text){
        res.status(400)
    throw new Error ('Please add a text field')
}
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.status(200).json(user)
})
  // PUT: Edit a user by ID
  const updatedUser = asyncHandler(async(req, res) => {
      const user = await User.findById(req.params.id);

      if (!user) {
         res.status(404)
         throw new Error ('User not found')
      }
  
   const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})

   res.status(200).json(updateUser)
    })
  
  // DELETE: Remove a user by ID
  const deleteUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)

      if (!user) {
        res.status(404)
        throw new Error('User not found');
      } 
      await Goal.findByIdAndDelete({_id: req.params.id})

      res.status(200).json({id: req.params.id})                                                           
  })
  app.delete('/users/:id', async (req, res) => {
    try {
      
      await User.remove();
      res.json({ message: 'User deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  