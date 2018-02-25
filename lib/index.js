const {create, env} = require('sanctuary')

const S = create({
    checkTypes: process.env.NODE_ENV !== 'production',
    env
})

const compute_frequencies = (count_map) => {
    S.reduce(S.add, 0, S.values(count_map))
}

const exp_he = () => {
}


module.exports.compute_frequencies = compute_frequencies
module.exports.exp_he = exp_he
