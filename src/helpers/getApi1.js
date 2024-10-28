
const url = 'https://api.breakingbadquotes.xyz/v1/quotes';

export const getApi1 = async() => {
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const quotes = data.map( q => ({
            quote: q.quote,
            author: q.author
        }))
        
        return quotes[0];
      } catch (error) {
        console.error('Fetch error:', error);
        throw error;
      }

}
