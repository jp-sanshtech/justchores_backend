const home_services = require('../mockdata/services/home_services.json');
const salon_men = require('../mockdata/services/salon_men.json');
const salon_women = require('../mockdata/services/salon_women.json');

exports.getHomeServices = async (req, res) => {
    try {
        res.status(200).json(home_services);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send home services data', error });
    }
};

exports.getMenSalon = async (req, res) => {
    try {
        res.status(200).json(salon_men);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send men salon services data', error });
    }
};

exports.getWomenSalon = async (req, res) => {
    try {
        res.status(200).json(salon_women);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send women salon services data', error });
    }
};

exports.getServiceById = async (req, res) => {
    try {
        const { id } = req.params;
        const { category } = req.query;
        
        let service = null;
        
        if (category === 'home') {
            service = home_services.services.find(service => service.id === id);
        } else if (category === 'men') {
            service = salon_men.services.find(service => service.id === id);
        } else if (category === 'women') {
            service = salon_women.services.find(service => service.id === id);
        } else {
            service = home_services.services.find(service => service.id === id) ||
                     salon_men.services.find(service => service.id === id) ||
                     salon_women.services.find(service => service.id === id);
        }
        
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        
        res.status(200).json(service);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve service', error });
    }
};

exports.getServicesByCategoryId = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const { source } = req.query;
        
        let filteredServices = [];
        
        if (source === 'home') {
            filteredServices = home_services.services.filter(service => 
                service.categoryId === categoryId);
        } else if (source === 'men') {
            filteredServices = salon_men.services.filter(service => 
                service.categoryId === categoryId);
        } else if (source === 'women') {
            filteredServices = salon_women.services.filter(service => 
                service.categoryId === categoryId);
        } else {
            filteredServices = [
                ...home_services.services.filter(service => service.categoryId === categoryId),
                ...salon_men.services.filter(service => service.categoryId === categoryId),
                ...salon_women.services.filter(service => service.categoryId === categoryId)
            ];
        }
        
        if (filteredServices.length === 0) {
            return res.status(404).json({ message: 'No services found for this category ID' });
        }
        
        res.status(200).json({ services: filteredServices });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve services by category ID', error });
    }
};