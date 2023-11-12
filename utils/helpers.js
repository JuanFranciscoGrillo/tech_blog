module.exports = {
    format_date: (date) => {
        // Format the date to MM/DD/YYYY
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    format_plural: (word, amount) => {
        // Add 's' to the word if the amount is greater than 1
        return amount !== 1 ? `${word}s` : word;
    },
    format_url: (url) => {
        // Simplify the URL for display
        return url
            .replace('http://', '')
            .replace('https://', '')
            .replace('www.', '')
            .split('/')[0]
            .split('?')[0];
    }
};
