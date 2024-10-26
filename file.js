const testCategorizeTask = async () => {
    const GEMINI_API_URL = 'https://api.gemini.com/v1/categorize';
    
    try {
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-GEMINI-APIKEY': 'YOUR_API_KEY', // Replace with your actual API key
            },
            body: JSON.stringify({ taskDescription: "Sample task description", taskPriority: "high" })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('API Response:', data);
    } catch (error) {
        console.error('Error categorizing task:', error);
    }
};

// Call the function to test the API
testCategorizeTask();
