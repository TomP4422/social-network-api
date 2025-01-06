const { User } = require('../models');

module.exports = {
    getAllUsers(req, res) {
        User.find()
            .select('-__v')
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getUserById(req, res) {
        User.findById(req.params.id)
            .populate('thoughts')
            .populate('friends')
            .select('-__v')
            .then((user) => user ? res.json(user) : res.status(404).json({ message: 'User not found!' }))
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then((user) => user ? res.json(user) : res.status(404).json({ message: 'User not found!' }))
            .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        User.findByIdAndDelete(req.params.id)
            .then((user) => user ? res.json({ message: 'User deleted!' }) : res.status(404).json({ message: 'User not found!' }))
            .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        User.findByIdAndUpdate(
            req.params.userId,
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        )
        .then((user) => user ? res.json(user) : res.status(404).json({ message: 'User not found!' }))
        .catch((err) => res.status(500).json(err));
    },
    removeFriend(req, res) {
        User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
        .then((user) => user ? res.json(user) : res.status(404).json({ message: 'User not found!' }))
        .catch((err) => res.status(500).json(err));
    },
};
