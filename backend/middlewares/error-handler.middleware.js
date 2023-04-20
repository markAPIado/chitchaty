export const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode

  res.status(statusCode).json({
    type: error.type,
    message: error.message,
    statck: process.env.NODE_ENV === 'production' ? null : error.stack,
  })
}
