const jwt = require("jsonwebtoken")
const verifyToken = (req, res, next) =>{
    console.log("xac thuc1");
    const authHeader = req.headers.token
    console.log(authHeader);
    if(authHeader){
        const token = authHeader.split(" ")[1];
        console.log(token);
        jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
            if(err) res.status(403).json("Token is not valid!")
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("You are not authenticated")

    }
}

// const verifyTokenAndAuthorization = (req, res, next) =>{
//     console.log("xac thuc2");
//     verifyToken(req, res, () =>{
//         console.log("ttt")
//         if(req.user.id === req.params.id || req.user.isAdmin){
//             next();
//         }else{
//             console.log(req.user.id  + "  " + req.params.id )
//             res.status(403).json("You are not alowed to do that!");
//         }
//     })
// }
const verifyTokenAndAuthorization = async (req, res, next) => {
    console.log("xac thuc2");
    try {
        await   verifyToken(req, res, () =>{
                    console.log("ttt")
                    if(req.user.id === req.params.id || req.user.isAdmin){
                        next();
                    }else{
                        console.log(req.user.id  + "  " + req.params.id )
                        res.status(403).json("You are not alowed to do that!");
                    }
                })
    } catch (error) {
        // Xử lý lỗi xác minh token
        console.log(error)
        res.status(401).json("Token is not valid!");
    }
}


const verifyTokenAndAdmin = (req, res, next) =>{
    verifyToken(req, res, () =>{
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not alowed to do that!");
        }
    })
}

module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin};