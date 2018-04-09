import React from 'react';
import MockItems from './mockItems';

class ServerApi {

    getHomeSaleItems() {
        return MockItems;
    }
}

export default new ServerApi();