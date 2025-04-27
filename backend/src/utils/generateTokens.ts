import jwt from 'jsonwebtoken'

export const generateAccessToken = ({id, username}: {id: string, username: string}) => {
    return jwt.sign(
        {
            id, username
        },
        `${process.env.ACCESS_SECRET}`,
        {
            expiresIn: "1d" 
        }
    )
}

export const generateRefreshToken = (id: string) => {
    return jwt.sign(
        {
            id
        },
        `${process.env.REFRESH_SECRET}`,
        {
            expiresIn: "10d"
        }
    )
}