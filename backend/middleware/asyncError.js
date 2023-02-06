//To handle asynchronous errors, used curried(nexted) functions
export const asyncError = (func) => (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch(next);
}