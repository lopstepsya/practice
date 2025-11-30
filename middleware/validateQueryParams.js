const { ERROR_TYPES, sendError } = require('../utils/errors');

const validateQueryParams = (req, res, next) => {
    const {
        page,
        limit,
        minYear,
        maxYear,
        minPrice,
        maxPrice
    } = req.query;

    if (page && isNaN(parseInt(page))) {
        return sendError(res, ERROR_TYPES.VALIDATION_ERROR, `Параметр '${page}' должен быть числом`);
    }

    if (limit && isNaN(parseInt(limit))){
        return sendError(res, ERROR_TYPES.VALIDATION_ERROR, `Параметр '${limit}' должен быть числом`);
    }

    if (minYear && isNaN(parseInt(minYear))) {
        return sendError(res, ERROR_TYPES.VALIDATION_ERROR, `Параметр '${minYear}' должен быть числом`);
    }

    if (maxYear && isNaN(parseInt(maxYear))) {
        return sendError(res, ERROR_TYPES.VALIDATION_ERROR, `Параметр '${maxYear}' должен быть числом`);
    }

    if (minPrice && isNaN(parseInt(minPrice))) {
        return sendError(res, ERROR_TYPES.VALIDATION_ERROR, `Параметр '${minPrice}' должен быть числом`);
    }

    if (maxPrice && isNaN(parseInt(maxPrice))) {
        return sendError(res, ERROR_TYPES.VALIDATION_ERROR, `Параметр '${maxPrice}' должен быть числом`);
    }
    
    if (minYear && maxYear && parseInt(minYear) > parseInt(maxYear)) {
        return sendError(res, ERROR_TYPES.VALIDATION_ERROR, `'${minYear}'не может быть больше '${maxYear}'`);
    }

    if (minPrice && maxPrice && parseInt(minPrice) > parseInt(maxPrice)) {
        return sendError(res, ERROR_TYPES.VALIDATION_ERROR, `'${minPrice}'не может быть больше '${maxPrice}'`);
    }

    next();
};

module.exports = validateQueryParams;