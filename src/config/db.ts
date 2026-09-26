import mongoose from 'mongoose'


const connectDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/book-store-dev'
    const conn = await mongoose.connect(mongoUri)
    console.log(`✅ Kết nối MongoDB thành công: ${conn.connection.host}`)
  } catch (error: any) {
    console.error(`❌ Kết nối MongoDB thất bại: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB