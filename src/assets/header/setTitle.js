const setTitle = (location) => {
    switch(location.pathname){
        case '/login':
            document.title = 'Login - Aapple Paints';
            break;
        case '/register':
            document.title = 'Register - Aapple Paints';
            break;
        case '/user-dashboard':
            document.title = 'Dashboard - Aapple Paints';
            break;
        case '/user-dashboard/purchase':
            document.title = 'Purchase - Aapple Paints';
            break;
        case '/user-dashboard/transaction':
            document.title = 'Transaction - Aapple Paints';
            break;
        case '/admin-dashboard':
            document.title = 'Dashboard - Aapple Paints';
            break;
        case '/admin-dashboard/dealer-request':
            document.title = 'Dealers Request - Aapple Paints';
            break;
        case '/admin-dashboard/all-dealers':
            document.title = 'Dealers List - Aapple Paints';
            break;
        case '/admin-dashboard/new-orders':
            document.title = 'New Orders - Aapple Paints';
            break;
        case '/admin-dashboard/product-panel':
            document.title = 'Product Panel - Aapple Paints';
            break;
        default:
            document.title = 'React App';
            break;
    }
}

export default setTitle;