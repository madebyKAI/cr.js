let { get } = require('snekfetch');

/**
 * Gets an profile based off player tag.
 * @async
 * @function getProfile
 * @argument {string} [object] tag - Player Tag
 * @returns {Promise<Object>} 
 * @example getProfile('2J8U0PRJ');
 */

getProfile = (tag) => {
    return new Promise((res, rej) => {
        let tags = typeof tag === 'string' ? `${tag}`.replace('#', '') : tag.map(t => t.replace('#', '')).join(',');
        get(`http://api.cr-api.com/profile/${tags}`)
            .then(data => res(data.body))
            .catch(err => rej(err));
    })
}

module.exports = getProfile;