let { get } = require('snekfetch');

/**
 * Gets an clan based off clan tag.
 * @async
 * @function getClan
 * @argument {string} [object] tag - Clan Tag
 * @returns {Promise<Object>} 
 * @example getClan('2CCCP');
 */

getClan = (tag) => {
    return new Promise((res, rej) => {
        let clans = typeof tag === 'string' ? `${tag}`.replace('#', '') : tag.map(t => t.replace('#', '')).join(',');
        get(`http://api.cr-api.com/clan/${clans}`)
            .then(data => res(data.body))
            .catch(err => rej(err));
    })
}

module.exports = getClan;