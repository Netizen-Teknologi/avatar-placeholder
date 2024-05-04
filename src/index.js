// index.js

const {
    avatarRandom,
    avatarRandomByGender,
    avatarByName,
    avatarByInitial
} = require('./avatar-placeholder');

// Export fungsi-fungsi agar bisa digunakan oleh pengguna package
module.exports = {
    avatarRandom,
    avatarRandomByGender,
    avatarByName,
    avatarByInitial
};
