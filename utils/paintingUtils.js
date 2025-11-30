const applySearch = (paintings, searchTerm) => {
    if (!searchTerm) return paintings;
    return paintings.filter(painting => painting.title.toLowerCase().includes(searchTerm) || painting.artist.toLowerCase().includes(searchTerm) || painting.description.toLowerCase().includes(searchTerm));
};

const applyFilters = (paintings, filters) => {
    let filtered = [...paintings];
    
    if (filters.genre) {
        const genreTerm = filters.genre.toLowerCase();
        filtered = filtered.filter(painting => painting.genre.some(g => g.toLowerCase().includes(genreTerm)));
    }
    return filtered;
};

const applyPagination = (paintings, page, limit) => {
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;
  
    return {
        data: paintings.slice(startIndex, endIndex), 
        pagination: {
            currentPage: pageNum,
            totalPages: Math.ceil(paintings.length / limitNum),
            itemsPerPage: limitNum,
            totalItems: paintings.length,
            hasNextPage: pageNum < Math.ceil(paintings.length / limitNum),
            hasPrevPage: pageNum > 1
        }
    };
};

module.exports = {
    applySearch,
    applyFilters,
    applyPagination
};