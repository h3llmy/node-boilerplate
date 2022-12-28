import mongoose from 'mongoose'

const example = new mongoose.Schema(
    {
        example : {
            type: String,
            required : true,
            unique : [true, 'name must be unique']
        },
        isActive : {
            type : Boolean,
            default : true
        },
        deletedAt: {
        type: Date
        }
    },
    {
        timestamps: true
    }
)

example.pre('countDocuments', function () {
    this.where({ deletedAt: null })
})

example.pre('find', function () {
    this.where({ deletedAt: null })
})

example.pre('findOne', function () {
    this.where({ deletedAt: null })
})

const Example = mongoose.model('example', example)

export default Example
