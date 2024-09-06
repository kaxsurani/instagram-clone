import { User } from "../models/user.model";

export const register = async (req,res) => {
    try {
        const {username, email, password} = req.body;
        if (!username || !email || !password) {
            return res.status(401).json({
                message:"Something is missing, please check!",
                success:false,
            });
        }
        const user = await User.findOne({email});
        if (user) {
            return res.status(401).json({
                message:"Try different email",
                success:false,
            });
        };

        await User.create({
            username, 
            email,
            password
        })
    } catch (error) {
        console.log(error);
    }  
}