// ** Routes Imports
import MainPages from './main'


// ** Document title

// ** Default Route
const DefaultRoute = '/products'

// ** Merge Routes
const pagesRoutes = [
    ...MainPages,
]

export { DefaultRoute, pagesRoutes }