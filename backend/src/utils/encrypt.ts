import bcrypt from 'bcryptjs'

export const hashPassword = async (data: string): Promise<string> => {
    return await bcrypt.hash(data, 5)
}

export const comparePassword = async (data: string, hashedData: string): Promise<boolean> => {
    return await bcrypt.compare(data, hashedData)
}