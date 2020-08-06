const { v4: uuidv4 } = require('uuid');

module.exports.templateTags = [{
    name: 'uuidv4',
    displayName: 'Generate UUID v4',
    description: 'Generate UUID v4 token',
    async run (context) {
        return uuidv4();
    }
}];
