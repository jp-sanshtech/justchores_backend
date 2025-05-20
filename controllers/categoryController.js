const categories = require('../mockdata/categories.json')

exports.getCategories = async (req, res) => {
    try {
        res.status(200).json( categories );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send categories data', error });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = categories.categories.find(cat => cat.id === categoryId);
        
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        
        res.status(200).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve category', error });
    }
};
