import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface iUser extends Document {
    email: string;
    password: string;
    encryptPassword(password: string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
    
};

const userSchema = new Schema({

    email: {
        type: String,
        unique: true,
        required: true
        
    },
    password: {
        type: String,
        required: true
    }

});

userSchema.methods.encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

userSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
};

export default model<iUser>('user', userSchema)
