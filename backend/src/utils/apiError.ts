interface ApiErrorInterface {
    status: number,
    message: string,
    data?: string | object,
    success: boolean
}

class ApiError extends Error implements ApiErrorInterface {
    status: number;
    message: string;
    data?: string | object | undefined;
    success: boolean;

    constructor(status: number, message: string, data: string = "", stackTrace: string = ""){
        super(message)
        this.status = status
        this.message = message
        this.data = data
        this.success = false

    }
}

export default ApiError