export const loadPosts = (posts) => {  
    return {
        type: 'API_GET', 
        posts
    };
 }