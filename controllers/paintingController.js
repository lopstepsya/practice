const paintings = require('../data/paintingsData');
const { ERROR_TYPES, sendError } = require('../utils/errors');
const {
    applySearch,
    applyFilters,
    applyPagination
} = require('../utils/paintingUtils');

const getPaintings = (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            search,
            genre,
            artist,
            minYear,
            maxYear,
            minPrice,
            maxPrice,
            featured,
            sortBy = 'title', 
            sortOrder = 'asc' 
        } = req.query;

        let result = applySearch(paintings, search?.toLowerCase());
        result = applyFilters(result, {genre, artist, minYear, maxYear, minPrice, maxPrice, featured});
        
        const {data, pagination} = applyPagination(result, page, limit);

        const availableFilters = {
            genres: [...new Set(paintings.flatMap(p => p.genre))],
            artists: [...new Set(paintings.map(p => p.artist))],
            years: {
                min: Math.min(...paintings.map(p => p.year)),
                max: Math.max(...paintings.map(p => p.year))
            },
            prices: {
                min: Math.min(...paintings.map(p => p.price).filter(p => p > 0)),
                max: Math.max(...paintings.map(p => p.price))
            }
        };

        const response = {
            success: true,
            pagination,
            filters: {
                applied: Object.keys(req.query).length > 0 ? req.query : null,
                available: availableFilters
            },
            data
        };
    res.json(response);
    } catch (error) {
        console.error('Ошибка в getPaintings:', error);
        sendError(res, ERROR_TYPES.SERVER_ERROR, 'Не удалось получить список картин');
    }
};

const getPaintingById = (req, res) => {
    try {
        const paintingId = parseInt(req.params.id);
        const painting = paintings.find(p => p.id === paintingId);
        if (!painting) {
            return sendError(res, ERROR_TYPES.NOT_FOUND, `Картина с ID ${paintingId} не найдена`);
        }
        res.json({
            success: true,
            data: painting
        });
    } catch (error) {
        console.error('Ошибка в getPaintingById:', error);
        sendError(res, ERROR_TYPES.SERVER_ERROR, 'Не удалось получить данные картины');
    }
};

const getPaintingsByGenre = (req, res) => {
    try {
        const genre = req.params.genre.toLowerCase();
        const filteredPaintings = paintings.filter(painting => painting.genre.some(g => g.toLowerCase().includes(genre))
        );
        if (filteredPaintings.length === 0) {
            return sendError(res, ERROR_TYPES.NOT_FOUND, `Картины в жанре '${genre}' не найдены`);
        }
        res.json({
            success: true,
            count: filteredPaintings.length,
            genre: genre,
            data: filteredPaintings
        });
    } catch (error) {
        console.error('Ошибка в getPaintingsByGenre:', error);
        sendError(res, ERROR_TYPES.SERVER_ERROR, 'Не удалось отфильтровать картины по жанру');
    }
};

const getFeaturedPaintings = (req, res) => {
    try {
        const featuredPaintings = paintings.filter(painting => painting.isFeatured);
        if (featuredPaintings.length === 0) {
            return sendError(res, ERROR_TYPES.NOT_FOUND, 'Нет featured картин в галерее');
        }
        res.json({
            success: true,
            count: featuredPaintings.length,
            data: featuredPaintings
        });
        } catch (error) {
            console.error('Ошибка в getFeaturedPaintings:', error);
            sendError(res, ERROR_TYPES.SERVER_ERROR, 'Не удалось получить featured картины');
        }
};

module.exports = {
    getPaintings,
    getPaintingById,
    getPaintingsByGenre,
    getFeaturedPaintings
};