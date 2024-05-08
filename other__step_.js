
// auth related api [01] end
// app.post('/jwt', logger, async (req, res) => {
//     const user = req.body;
//     console.log(user);
//     const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

//     res
//         .cookie('token', token, {
//             httpOnly: true,
//             secure: false,
//             sameSite: 'strict'
//         })
//         .send({ success: true })
// })


// middleware [02]
// const logger = async (req, res, next) => {
//     console.log("called:", req.host, req.originalUrl);
//     next()
// }
// verify token
// const verifyToken = (req, res, next) => {
//     const token = req.cookies.token;
//     console.log("value in the token of middleware:", token);
//     if (!token) {
//         res.status(401).send({ message: 'no authorized' })
//     }
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//         if (err) {
//             res.status(401).send({ message: 'not authorized' })
//         }
//         req.user = decoded;
//         next()
//     })
// }