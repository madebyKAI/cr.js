let { get } = require('snekfetch');

/**
 * Gets an clan based off clan tag.
 * @async
 * @function getClan
 * @returns {Promise<Object>} 
 * @example getTopClans(10);
 */

getTopClans = (limit = 100) => {
    return new Promise((res, rej) => {
        get(`http://api.cr-api.com/top/clans`)
            .then(data => res(data.body.clans.slice(0, limit)))
            .catch(err => rej(err));
    })
}

module.exports = getTopClans;