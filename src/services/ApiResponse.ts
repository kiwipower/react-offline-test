import ApiError from "./ApiError";

export default interface ApiResponse<T> {
    error?: ApiError;
    data?: T;
}
