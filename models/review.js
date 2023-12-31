import mongoose from "mongoose"
import User from "./user.js"
const { Schema } = mongoose

const reviewSchema = new Schema({
    body: String,
    rating: Number,
    createdAt: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Review = mongoose.model('Review', reviewSchema)
export default Review