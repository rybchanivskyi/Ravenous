const apiKey = "FjNjvEsJh6NdVd6Vy77UWJqsJtyYK5QGPN2nZL_d08Wd-lwA4yHqrN1qI-jVUEz51Wbk4h2f6QQIjjT2SpuYcHWmMC-eHYnE4Ik2m8F48bQwRrk1tXK4gT8fUn7JXnYx";

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                })
            }
        });
    }
};

export default Yelp;