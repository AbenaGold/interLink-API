import jwt from 'jsonwebtoken'

export const isAuthenticated = (req, res, next) => {
    // check if session has user
    if (req.session.user) {
        next();
    } else {

        res.status(401).json('user not authenticated');
    }
}

