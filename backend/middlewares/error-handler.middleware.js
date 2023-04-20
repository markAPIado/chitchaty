export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode

  res.status(statusCode).json({
    type: err.type,
    message: err.message,
    statck: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}