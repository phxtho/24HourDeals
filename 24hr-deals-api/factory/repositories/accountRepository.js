const accountRepo = () => {
    
    // Configuration
    this.database = [];

    this.insertAccount = (data) => {
        this.database.push(data);
    };

    this.deleteAccount = (data) => {
        this.database.forEach(element => {
            if(element == data)
                delete element;
        });
    }
}